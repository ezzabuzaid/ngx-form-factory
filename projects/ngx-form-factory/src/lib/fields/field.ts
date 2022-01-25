import { FloatLabelType, MatFormFieldAppearance, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { BaseField, EFieldType, IBaseField, IBaseFieldOptions } from './base';


export interface IFieldOptions<T> extends IBaseFieldOptions<T>, MatFormFieldDefaultOptions {
    /**
     * Field placeholder
     */
    label?: string;
    /**
     * small text to show underneath the field
     */
    hint?: string;
}

export interface IField<T> extends IBaseField<T>, MatFormFieldDefaultOptions {
    label?: string;
    hint?: string;
}

export class Field<T> extends BaseField<T> implements IField<T>{
    public label?: string;
    public hint?: string;
    public appearance?: MatFormFieldAppearance;
    public floatLabel?: FloatLabelType;
    public hideRequiredMarker?: boolean;
    constructor(options?: IFieldOptions<T>) {
        super(options);
        this.type = options?.type ?? EFieldType.TEXT;
        this.label = options?.label;
        this.hint = options?.hint;
        this.appearance = options?.appearance;
        this.floatLabel = options?.floatLabel;
        this.hideRequiredMarker = options?.hideRequiredMarker;
    }

}
