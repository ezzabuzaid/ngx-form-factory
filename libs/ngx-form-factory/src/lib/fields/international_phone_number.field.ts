import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

import InternationalPhoneNumberFieldComponent from '../controls/phonenumber/international-phone-number-field-component';
import { IFieldOptions, ITextOptions } from './field';
import { IRawFieldComponent, IRawFieldOptions, RawField } from './raw';

export interface IInternationalPhoneNumberFieldOptions
  extends Omit<IRawFieldOptions<string>, 'component' | 'inputs' | 'outputs'>,
    IFieldOptions<string>,
    MatFormFieldDefaultOptions,
    ITextOptions {
  inline?: boolean;
}
export interface IInternationalPhoneNumberField
  extends IRawFieldComponent<string>,
    IFieldOptions<string>,
    ITextOptions {
  inline?: boolean;
}

export class InternationalPhoneNumberField extends RawField<
  string,
  InternationalPhoneNumberFieldComponent
> {
  constructor(options: IInternationalPhoneNumberFieldOptions) {
    super({
      ...options,
      inputs: {
        appearance: options.appearance,
        hideRequiredMarker: options.hideRequiredMarker,
        color: options.color,
        floatLabel: options.floatLabel,
        subscriptSizing: options.subscriptSizing,
        label: options.label,
        inline: options.inline ?? true,
        class: options.class,
        hint: options.hint,
        placeholder: options.placeholder,
        readonly: options.readonly,
        id: options.id,
      } as IInternationalPhoneNumberFieldOptions,
      component: InternationalPhoneNumberFieldComponent,
    });
  }
}
