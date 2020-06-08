import { Field } from './field';
import { EFieldType, IBaseFieldOptions } from './base';

export interface IDateField extends IBaseFieldOptions<Date> {
    min?: Date;
    max?: Date;
}

export class DateField extends Field<Date> implements IDateField {
    public min?: Date;
    public max?: Date;
    constructor(options: IDateField) {
        super(options);
        this.type = EFieldType.DATE;
        this.min = options?.min;
        this.max = options?.max;
    }
}
