import { FloatLabelType, MatFormFieldAppearance, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { BaseField, IBaseField, IBaseFieldOptions } from './base';
import { EFieldType } from './field_type';


export interface IFieldOptions<T> extends IBaseFieldOptions<T>, MatFormFieldDefaultOptions {
    maxlength?: number;
    minlength?: number;
    readonly?: boolean;
    /**
     * Field placeholder
     */
    placeholder?: string;
    /**
     * Field label
     */
    label?: string;
    /**
     * Small text to show underneath the field
     */
    hint?: string;
}

export interface IField<T> extends IBaseField<T>, MatFormFieldDefaultOptions {
    maxlength?: number;
    minlength?: number;
    readonly?: boolean;
    label?: string;
    hint?: string;
    placeholder?: string;
}

export class Field<T> extends BaseField<T> implements IField<T>{
    public label?: string;
    public hint?: string;
    public appearance?: MatFormFieldAppearance;
    public floatLabel?: FloatLabelType;
    public hideRequiredMarker?: boolean;
    public readonly?: boolean;
    public maxlength?: number;
    public minlength?: number;
    public placeholder?: string;
    constructor(options?: IFieldOptions<T>) {
        super(options);
        this.type = options?.type ?? EFieldType.TEXT;
        this.label = options?.label;
        this.hint = options?.hint;
        this.appearance = options?.appearance;
        this.floatLabel = options?.floatLabel;
        this.hideRequiredMarker = options?.hideRequiredMarker;
        this.placeholder = options?.placeholder;
        this.minlength = options?.minlength;
        this.maxlength = options?.maxlength;
        this.readonly = options?.readonly;
    }

}
