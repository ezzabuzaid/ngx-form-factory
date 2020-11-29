import { Type } from '@angular/core';
import { BaseField, EFieldType, IBaseFieldOptions } from './base';

interface IRawFieldOptions<T> extends IBaseFieldOptions<T> {
    /**
     * the component which will act as field
     */
    component: Type<IRawFieldComponent<T>>;
    /**
     * Component inputs 
     */
    inputs?: { [key: string]: any };
    /**
     * Component outputs
     */
    outputs?: {
        [key: string]: (event: any) => any
    };
}

export class RawField<T> extends BaseField<T> {
    component: Type<IRawFieldComponent<T>>;
    inputs?: { [key: string]: any };
    outputs?: { [key: string]: (event: any) => any };
    constructor(options?: IRawFieldOptions<T>) {
        super(options);
        this.type = EFieldType.RAW_FIELD;
        this.component = options.component;
        this.inputs = options.inputs;
        this.outputs = options.outputs;
    }
}

export interface IRawFieldComponent<T> {
    formControl: BaseField<T>;
}
