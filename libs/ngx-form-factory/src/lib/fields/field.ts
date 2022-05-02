import {
  FloatLabelType,
  MatFormFieldAppearance,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';

import { AutoComplete } from '../shared/autocomplete.type';
import { BaseField, IBaseField, IBaseFieldOptions } from './base';
import { EFieldType } from './field_type';
import { ILengthOptions } from './length_options.interface';

export interface IFieldOptions<T> extends IBaseFieldOptions<T> {
  label?: string;
  class?: string | string[];
}

export interface ITextOptions {
  readonly?: boolean;
  /**
   * Field placeholder
   */
  placeholder?: string;
  /**
   * Field label
   */
  /**
   * Small text to show underneath the field
   */
  hint?: string;
}

interface IFieldOnlyOptions<T>
  extends IFieldOptions<T>,
    ILengthOptions,
    MatFormFieldDefaultOptions,
    ITextOptions {
  /**
   * type of the field that you want to
   */
  type?: EFieldType;
  /**
   * HTMLInputElement autocomplete
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autocomplete?: AutoComplete;
}

export interface IField<T> extends IBaseField<T>, MatFormFieldDefaultOptions {
  maxlength?: number;
  minlength?: number;
  readonly?: boolean;
  label?: string;
  hint?: string;
  placeholder?: string;
  class?: string | string[];
}

export class Field<T> extends BaseField<T> implements IField<T> {
  public label?: string;
  public hint?: string;
  public appearance?: MatFormFieldAppearance;
  public floatLabel?: FloatLabelType;
  public hideRequiredMarker?: boolean;
  public readonly?: boolean;
  public maxlength?: number;
  public minlength?: number;
  public placeholder?: string;
  public class?: string | string[];
  public autocomplete?: AutoComplete;
  constructor(options?: IFieldOnlyOptions<T>) {
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
    this.class = options?.class;
  }
}
