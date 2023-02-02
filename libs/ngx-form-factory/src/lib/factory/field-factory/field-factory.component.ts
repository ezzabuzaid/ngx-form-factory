/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  NgModule,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import {
  CountryComponentModule,
  MaskComponentModule,
  TextareaComponentModule,
} from '../../controls';
import {
  EFieldType,
  Field,
  RawField,
  SelectField,
  TimeField,
} from '../../fields';
import { DateField } from '../../fields/date';
import {
  AbstractFieldFactoryComponent,
  assertNotNullOrUndefined,
  DynamicComponentDirective,
  IdDirective,
  MatInputDirective,
  MatSelectDirective,
  TogglePasswodDirective,
} from '../../shared';
import { ErrorsPipe } from '../../shared/errors.pipe';
import { MatFormFieldDirective } from '../../shared/mat-form-field.directive';

@Component({
  selector: 'ngx-field-factory',
  templateUrl: './field-factory.component.html',
  styleUrls: ['./field-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractFieldFactoryComponent,
      useExisting: forwardRef(() => FieldFactoryComponent),
    },
  ],
})
export class FieldFactoryComponent
  extends AbstractFieldFactoryComponent<Field<any>>
  implements OnInit
{
  types = EFieldType;

  ngOnInit() {
    assertNotNullOrUndefined(this.field, '@Input() field');

    if (this.field.type === EFieldType.TIME && this.timeField()!.max) {
      this.field.addValidators(maxTimeValidator(this.timeField()!.max!) as any);
    }
    if (this.field.type === EFieldType.TIME && this.timeField()!.min) {
      this.field.addValidators(minTimeValidator(this.timeField()!.min!) as any);
    }
  }

  normalField() {
    return this.field instanceof Field ? this.field : null;
  }

  rawField() {
    return this.field instanceof RawField ? this.field : null;
  }

  selectField() {
    // Convert to rawfield
    return this.field instanceof SelectField ? this.field : null;
  }

  dateField() {
    // Convert to rawfield
    return this.field instanceof DateField ? this.field : null;
  }

  timeField() {
    // Convert to rawfield
    return this.field instanceof TimeField ? this.field : null;
  }

  onRawFieldCreation(instance: any, rawField: RawField<any, any>) {
    rawField.componentInstance = instance;
  }
}

function maxTimeValidator(max: string) {
  return (control: Field<string>) => {
    return control.getElement()?.checkValidity() ? null : { max: true };
  };
}

function minTimeValidator(min: string) {
  return (control: Field<string>) => {
    return control.getElement()?.checkValidity() ? null : { min: true };
  };
}

@NgModule({
  declarations: [FieldFactoryComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    CountryComponentModule,
    ReactiveFormsModule,
    TogglePasswodDirective,
    MaskComponentModule,
    TextareaComponentModule,
    MatCheckboxModule,
    MatIconModule,

    // Local Directives
    DynamicComponentDirective,
    MatFormFieldDirective,
    IdDirective,
    MatInputDirective,
    MatSelectDirective,
    ErrorsPipe,
  ],
  exports: [FieldFactoryComponent],
})
export class FieldFactoryComponentModule {}
