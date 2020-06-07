import { Field } from './field';
import { Options, EFieldType } from './base';

export class DateField extends Field<Date>  {
    public min?: Date;
    public max?: Date;
    constructor(options: Options<DateField> = {}) {
        super(options);
        this.type = EFieldType.DATE;
        this.min = options.min;
        this.max = options.max;
    }
}
