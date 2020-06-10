import { Type } from '@angular/core';
import { BaseField, EFieldType, IBaseFieldOptions } from './base';

interface IRawFieldOptions<T> extends IBaseFieldOptions<T> {
    component: Type<IRawFieldComponent<T>>;
}

export class RawField<T> extends BaseField<T> {
    component: Type<IRawFieldComponent<T>>;
    constructor(options?: IRawFieldOptions<T>) {
        super(options);
        this.type = EFieldType.RAW_FIELD;
        this.component = options.component;
    }
}

export interface IRawFieldComponent<T> {
    formControl: BaseField<T>;
}
