import { EFieldType } from './base';
import { Field, IFieldOptions } from './field';


export interface ITimeFieldOptions extends IFieldOptions<string> {
    /**
     * Minumum allowed time to enter
     *
     * e.g: 10:02
     */
    min?: string;
    /**
     * Maximum allowed time to enter

     * e.g: 10:02
     */
    max?: string;
}

export interface ITimeField {
    /**
     * Minumum allowed time to enter
     *
     * e.g: 10:02
     */
    min?: string;
    /**
     * Maximum allowed time to enter

     * e.g: 10:02
     */
    max?: string;
}

export class TimeField extends Field<string> implements ITimeField {
    public min?: string;
    public max?: string;
    constructor(options?: ITimeFieldOptions) {
        super(options);
        this.type = options?.type ?? EFieldType.TIME;
        this.min = options?.min;
        this.max = options?.max;
    }
}
