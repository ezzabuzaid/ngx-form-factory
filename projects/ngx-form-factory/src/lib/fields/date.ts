import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerBase } from '@angular/material/datepicker/datepicker-base';
import { Field, IFieldOptions } from './field';
import { EFieldType } from './field_type';

export interface IDateField<PT> {
    min?: Date;
    max?: Date;
    startView?: MatDatepickerBase<any, any, Date>['startView'];
    startAt?: MatDatepickerBase<any, any, Date>['startAt'];
    yearSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
    monthSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
}

export interface IDateFieldOptions<PT> extends IFieldOptions<Date> {
    startView?: MatDatepickerBase<any, any, Date>['startView'];
    startAt?: MatDatepickerBase<any, any, Date>['startAt'];
    yearSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
    monthSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
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
export class DateField<PT = Date> extends Field<Date> implements IDateField<PT> {
    public min?: Date;
    public max?: Date;
    public startView?: MatDatepickerBase<any, any, Date>['startView'];
    public startAt?: MatDatepickerBase<any, any, Date>['startAt'];
    public yearSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
    public monthSelected?: (date: Date, picker: MatDatepicker<PT>) => void;
    constructor(options?: IDateFieldOptions<PT>) {
        super(options);
        this.type = EFieldType.DATE;
        this.min = options?.min;
        this.max = options?.max;
        this.startAt = options?.startAt;
        this.startView = options?.startView ?? 'month';
        this.yearSelected = options?.yearSelected ?? ((d, p) => { });
        this.monthSelected = options?.monthSelected ?? ((d, p) => { });
    }
}
