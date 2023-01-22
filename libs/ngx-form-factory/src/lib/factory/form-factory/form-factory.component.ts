import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EnhancedForm, Form, IBaseField } from '../../fields/base';
import { assertNotNullOrUndefined } from '../../shared';
import { FieldFactoryComponentModule } from '../field-factory/field-factory.component';
import { FormFactoryManager } from '../form-factory.manager';

@Component({
  selector: 'ngx-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFactoryComponent implements OnInit, OnDestroy {
  public readonly progressListener = this.formWidgetManager.watch();
  private readonly subscription = new Subject();

  @Input() formGroup!: Form<any>;
  @Input() implicitFields = true;
  @HostBinding('class.loading') public loading = false;

  sectionsNames: string[] = [];
  sections!: { [key: string]: IBaseField<any>[] };

  constructor(
    private readonly formWidgetManager: FormFactoryManager,
    private cdf: ChangeDetectorRef
  ) {}

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

  ngOnDestroy() {
    this.subscription.next(null);
    this.subscription.complete();
  }

  private flattenFields(controls: EnhancedForm<any>[0][]) {
    return controls.reduce((acc, control) => {
      if (control instanceof Form) {
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
}

function values(fields: EnhancedForm<any>): EnhancedForm<any>[0][] {
  return Object.values(fields);
}

@NgModule({
  declarations: [FormFactoryComponent],
  imports: [CommonModule, FieldFactoryComponentModule, MatProgressBarModule],
  exports: [FormFactoryComponent],
})
export class FormFactoryComponentModule {}
