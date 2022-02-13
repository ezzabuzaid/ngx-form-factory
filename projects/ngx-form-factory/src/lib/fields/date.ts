import { MatDatepickerBase } from '@angular/material/datepicker/datepicker-base';
import { Field, IFieldOptions } from './field';
import { EFieldType } from './field_type';

export interface IDateField {
    min?: Date;
    max?: Date;
    startView?: MatDatepickerBase<any, any, Date>['startView'];
    startAt?: MatDatepickerBase<any, any, Date>['startAt'];
    yearSelected?: (date: Date) => void;
    monthSelected?: (date: Date) => void;
}

export interface IDateFieldOptions extends IFieldOptions<Date> {
    startView?: MatDatepickerBase<any, any, Date>['startView'];
    startAt?: MatDatepickerBase<any, any, Date>['startAt'];
    yearSelected?: (date: Date) => void;
    monthSelected?: (date: Date) => void;
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
export class DateField extends Field<Date> implements IDateField {
    public min?: Date;
    public max?: Date;
    public startView?: MatDatepickerBase<any, any, Date>['startView'];
    public startAt?: MatDatepickerBase<any, any, Date>['startAt'];
    public yearSelected?: (date: Date) => void;
    public monthSelected?: (date: Date) => void;
    constructor(options?: IDateFieldOptions) {
        super(options);
        this.type = EFieldType.DATE;
        this.min = options?.min;
        this.max = options?.max;
        this.startAt = options?.startAt;
        this.startView = options?.startView;
        this.yearSelected = options?.yearSelected ?? ((d) => { });
        this.monthSelected = options?.monthSelected ?? ((d) => { });
    }
}
