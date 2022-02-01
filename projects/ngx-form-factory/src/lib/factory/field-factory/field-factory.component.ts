import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Field, RawField, SelectField, TimeField } from '../../fields';
import { EFieldType } from '../../fields/base';
import { DateField } from '../../fields/date';
import { assertNotNullOrUndefined } from '../../shared';

@Component({
  selector: 'ngx-field-factory',
  templateUrl: './field-factory.component.html',
  styleUrls: ['./field-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldFactoryComponent implements OnInit {
  @Input() field: Field<any> | RawField<any> | DateField | SelectField<any>;
  types = EFieldType;

  ngOnInit() {
    assertNotNullOrUndefined(this.field)
    if (
      this.field.type === EFieldType.TIME
      &&
      this.timeField().max
    ) {
      this.field.addValidators(maxTimeValidator(this.timeField().max));
    }
    if (
      this.field.type === EFieldType.TIME
      &&
      this.timeField().min
    ) {
      this.field.addValidators(minTimeValidator(this.timeField().min));
    }
  }

  normalField() {
    return this.field instanceof Field ? this.field : null;
  }

  rawField() {
    return this.field instanceof RawField ? this.field : null;
  }

  selectField() {
    return this.field instanceof SelectField ? this.field : null;
  }

  dateField() {
    return this.field instanceof DateField ? this.field : null;
  }

  timeField() {
    return this.field instanceof TimeField ? this.field : null;
  }

  errors(): [string, () => string][] {
    return Object.entries(this.field.errorsMessages ?? {}).map(([errorName, value]) => {
      return [
        errorName,
        typeof value === 'function'
          ? () => value(this.field.value)
          : () => value
      ]
    });
  }


}

function maxTimeValidator(max: string) {
  return (control: Field<string>) => {
    return control.getElement()?.checkValidity() ? null : { max: true }
  };
}

function minTimeValidator(min: string) {
  return (control: Field<string>) => {
    return control.getElement()?.checkValidity() ? null : { min: true }
  };
}
