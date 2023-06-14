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

import { EFieldType } from '../../fields';
import { BaseField, EnhancedForm, Form } from '../../fields/base';
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

  @Input({ required: true }) formGroup!: Form<any>;
  @Input() implicitFields = true;
  @HostBinding('class.loading') public loading = false;

  sectionsNames: string[] = [];
  sections!: { [key: string]: BaseField<any>[] };

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

    const fields = this.flattenFields(
      Object.values(this.formGroup.fields)
    ).filter((it) => it.type !== EFieldType.HIDDEN);

    this.sectionsNames = [...new Set(fields.map((field) => field.section))];
    this.sections = this.groupBySection(fields);
  }

  ngOnDestroy() {
    this.subscription.next(null);
    this.subscription.complete();
  }

  private flattenFields(controls: EnhancedForm<any>[string][]) {
    return controls.reduce<BaseField<any>[]>((acc, control) => {
      if (control instanceof BaseField) {
        acc.push(control);
      } else {
        acc.push(...this.flattenFields(Object.values(control.fields)));
      }
      return acc;
    }, []);
  }

  private groupBySection(fields: BaseField<any>[]) {
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

@NgModule({
  declarations: [FormFactoryComponent],
  imports: [CommonModule, FieldFactoryComponentModule, MatProgressBarModule],
  exports: [FormFactoryComponent],
})
export class FormFactoryComponentModule {}
