import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Form, IBaseField, TFields } from '../../fields/base';
import { assertNotNullOrUndefined } from '../../shared';
import { FieldFactoryComponentModule } from '../field-factory/field-factory.component';
import { FormFactoryManager } from '../form-factory.manager';
import { SubmitButtonOptions } from './submit_button_options';
import { SubmitEvent } from './submit_event';

const DEFAULT_SUBMIT_BUTTON_OPTIONS = {
  autoValidate: true,
  disabled: false,
  show: true,
  class: [],
} as SubmitButtonOptions;
@Component({
  selector: 'ngx-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFactoryComponent implements OnInit, OnDestroy, OnChanges {
  public readonly progressListener = this.formWidgetManager.watch();
  private readonly subscription = new Subject();
  @Input() submitButtonOptions: SubmitButtonOptions =
    DEFAULT_SUBMIT_BUTTON_OPTIONS;
  @Output() public readonly onSubmit = new EventEmitter<SubmitEvent>();
  @Input() formGroup!: Form<any>;
  @Input() implicitFields = true;
  @HostBinding('class.loading') public loading = false;

  sectionsNames: string[] = [];
  sections!: { [key: string]: IBaseField<any>[] };

  constructor(
    private readonly formWidgetManager: FormFactoryManager,
    private cdf: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submitButtonOptions']) {
      this.submitButtonOptions = Object.assign(
        {},
        DEFAULT_SUBMIT_BUTTON_OPTIONS,
        this.submitButtonOptions
      );
    }
  }

  ngOnInit() {
    assertNotNullOrUndefined(this.formGroup);

    this.progressListener
      .pipe(takeUntil(this.subscription))
      .subscribe((show) => {
        this.loading = show;
      });

    const fields = this.flattenFields(values(this.formGroup.fields));
    this.sectionsNames = [...new Set(fields.map((field) => field.section))];
    this.sections = this.groupBySection(fields);
  }

  submit() {
    this.onSubmit.emit({
      value: this.formGroup.value,
      valid: this.formGroup.valid,
    });
  }

  ngOnDestroy() {
    this.subscription.next(null);
    this.subscription.complete();
  }

  form(field: any): field is Form<any> {
    return field instanceof Form;
  }

  private flattenFields(controls: TFields<any>[0][]) {
    return controls.reduce((acc, control) => {
      if (this.form(control)) {
        acc.push(...this.flattenFields(values(control.fields)));
      } else {
        acc.push(control);
      }
      return acc;
    }, [] as any[]);
  }

  private groupBySection(fields: IBaseField<any>[]) {
    return fields.reduce((acc, curr) => {
      const section = curr.section as unknown as string;
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(curr);
      return acc;
    }, {} as Record<string, any[]>);
  }

  disableSubmitButton() {
    this.submitButtonOptions.disabled = true;
    this.cdf.markForCheck();
  }

  enableSubmitButton() {
    this.submitButtonOptions.disabled = false;
    this.cdf.markForCheck();
  }
}

function values(fields: TFields<any>): TFields<any>[0][] {
  return Object.values(fields);
}

@NgModule({
  declarations: [FormFactoryComponent],
  imports: [CommonModule, FieldFactoryComponentModule, MatProgressBarModule],
  exports: [FormFactoryComponent],
})
export class FormFactoryComponentModule {}