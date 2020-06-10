import { BaseField, EFieldType, IBaseField, IBaseFieldOptions } from './base';


export interface IFieldOptions<T> extends IBaseFieldOptions<T> {
    label?: string;
    hint?: string;
}

export interface IField<T> extends IBaseField<T> {
    label?: string;
    hint?: string;
}

export class Field<T> extends BaseField<T> implements IField<T> {
    public label?: string;
    public hint?: string;
    constructor(options?: IFieldOptions<T>) {
        super(options);
        this.type = options?.type ?? EFieldType.TEXT;
        this.label = options?.label;
        this.hint = options?.hint;
    }

}
