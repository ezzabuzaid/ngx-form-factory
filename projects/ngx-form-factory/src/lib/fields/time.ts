import { EFieldType } from './base';
import { Field, IFieldOptions } from './field';

export interface ITimeField extends IFieldOptions<string> {
    min?: string;
    max?: string;
}

export class TimeField extends Field<string> implements ITimeField {
    public min?: string;
    public max?: string;
    constructor(options?: ITimeField) {
        super(options);
        this.type = EFieldType.TIME;
        this.min = options?.min;
        this.max = options?.max;
    }
}
