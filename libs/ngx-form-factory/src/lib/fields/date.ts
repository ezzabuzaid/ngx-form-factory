import { DateFilterFn, MatDatepicker } from '@angular/material/datepicker';
import {
  MatFormFieldDefaultOptions,
  SubscriptSizing,
} from '@angular/material/form-field';

import { Field, IFieldOptions, ITextOptions } from './field';
import { EFieldType } from './field_type';

export interface IDateField<PT> {
  min?: Date;
  max?: Date;
  startView?: MatDatepicker<Date>['startView'];
  startAt?: MatDatepicker<Date>['startAt'];
  yearSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
  monthSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
  datepickerFilter?: DateFilterFn<PT>;

  /** Whether the form field should reserve space for one line by default. */
  subscriptSizing?: SubscriptSizing;
}

export interface IDateFieldOptions<PT>
  extends IFieldOptions<Date>,
    MatFormFieldDefaultOptions,
    Omit<ITextOptions, 'readonly'> {
  startView?: MatDatepicker<Date>['startView'];
  startAt?: MatDatepicker<Date>['startAt'];
  yearSelected?: (date: Date | undefined, picker: MatDatepicker<PT>) => void;
  monthSelected?: (date: Date | undefined, picker: MatDatepicker<PT>) => void;
  datepickerFilter?: DateFilterFn<PT>;
  /**
   * Minumum allowed date to enter
   *
   * by default material date picker will disable anydate the comes before it
   */
  min?: Date;
  /**
   * Maximum allowed date to enter
   *
   * by default material date picker will disable anydate the comes after it
   */
  max?: Date;
}
export class DateField<PT = Date>
  extends Field<Date>
  implements IDateField<PT>
{
  public min?: Date;
  public max?: Date;
  public startView?: MatDatepicker<Date>['startView'];
  public startAt?: MatDatepicker<Date>['startAt'];
  public yearSelected?: (
    date: Date | undefined,
    picker: MatDatepicker<PT>
  ) => void;
  public monthSelected?: (
    date: Date | undefined,
    picker: MatDatepicker<PT>
  ) => void;
  public datepickerFilter?: DateFilterFn<PT>;
  constructor(options?: IDateFieldOptions<PT>) {
    super(options);
    this.type = EFieldType.DATE;
    this.min = options?.min;
    this.max = options?.max;
    this.startAt = options?.startAt;
    this.startView = options?.startView ?? 'month';
    this.yearSelected =
      options?.yearSelected ??
      ((d, p) => {
        //
      });
    this.monthSelected =
      options?.monthSelected ??
      ((d, p) => {
        //
      });
    this.datepickerFilter = options?.datepickerFilter ?? ((d) => true);
  }
}
