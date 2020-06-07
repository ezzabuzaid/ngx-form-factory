import { IBaseField, BaseField, EFieldType, Options } from './base';
import { Validators } from '@angular/forms';

export interface IField<T> extends IBaseField<T> {
    label?: string;
    hint?: string;
}

export class Field<T> extends BaseField<T> implements IField<T> {
    public label?: string = null;
    public hint?: string;
    constructor(options: Options<IField<T>> = {}) {
        super(options);
        this.type = options.type ?? EFieldType.TEXT;
        this.label = options.label;
        this.hint = options.hint;
    }

}
