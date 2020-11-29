import { EFieldType } from './base';
import { Field, IFieldOptions } from './field';

export interface IDateField {
    min?: Date;
    max?: Date;
}

export interface IDateFieldOptions extends IFieldOptions<Date> {
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
    constructor(options?: IDateFieldOptions) {
        super(options);
        this.type = EFieldType.DATE;
        this.min = options?.min;
        this.max = options?.max;
    }
}
