import { BaseField, IBaseField, EFieldType } from './base';
import { Type } from '@angular/core';

export class RawField<T> extends BaseField<T> {
    component: Type<IRawFieldComponent<T>>;
    constructor(options: Partial<IBaseField<Date> & RawField<T>>) {
        super(options ?? {});
        this.type = EFieldType.RAW_FIELD;
        this.component = options.component;
    }
}

export interface IRawFieldComponent<T> {
    formControl: BaseField<T>;
}
