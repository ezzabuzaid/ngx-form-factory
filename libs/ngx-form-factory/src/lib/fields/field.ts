import {
  FloatLabelType,
  MatFormFieldAppearance,
  MatFormFieldDefaultOptions,
  SubscriptSizing,
} from '@angular/material/form-field';

import { AutoComplete } from '../shared/autocomplete.type';
import { BaseField, IBaseFieldOptions } from './base';
import { EFieldType } from './field_type';
import { ILengthOptions } from './length_options.interface';

export interface IFieldOptions<T> extends IBaseFieldOptions<T> {
  /**
   * Field label
   */
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
   * Small text to show underneath the field
   */
  hint?: string;

  suffix?: string;
  prefix?: string;
}

export interface IFieldOnlyOptions<
  T,
  O extends IConfigurableOptions = DefaultConfigurableOptions
> extends IFieldOptions<T>,
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
  autocomplete?: O['autocomplete'];
}

export interface IField<T>
  extends IBaseFieldOptions<T>,
    MatFormFieldDefaultOptions,
    IFieldOptions<T>,
    ITextOptions {
  maxlength?: number;
  minlength?: number;
}

export interface IConfigurableOptions {
  autocomplete?: AutoComplete;
}
type DefaultConfigurableOptions = IConfigurableOptions;

export class Field<
    T,
    O extends IConfigurableOptions = DefaultConfigurableOptions
  >
  extends BaseField<T>
  implements IField<T>
{
  public label?: string;
  public hint?: string;
  public appearance?: MatFormFieldAppearance;
  public subscriptSizing?: SubscriptSizing;
  public floatLabel?: FloatLabelType;
  public hideRequiredMarker?: boolean;
  public readonly?: boolean;
  public maxlength?: number;
  public minlength?: number;
  public placeholder?: string;
  public suffix?: string;
  public prefix?: string;
  public class?: string | string[];
  public autocomplete?: O['autocomplete'];
  constructor(options?: IFieldOnlyOptions<T>) {
    super(options);
    this.type = options?.type ?? EFieldType.TEXT;
    this.label = options?.label;
    this.hint = options?.hint;
    this.subscriptSizing = options?.subscriptSizing;
    this.appearance = options?.appearance;
    this.floatLabel = options?.floatLabel;
    this.hideRequiredMarker = options?.hideRequiredMarker;
    this.placeholder = options?.placeholder;
    this.minlength = options?.minlength;
    this.maxlength = options?.maxlength;
    this.readonly = options?.readonly;
    this.class = options?.class;
    this.prefix = options?.prefix;
    this.suffix = options?.suffix;
  }
}
