import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

import { PhoneNumberFieldComponent } from '../controls/phone-number/phone-number-field-component';
import { IFieldOptions, ITextOptions } from './field';
import { IRawFieldOptions, RawField } from './raw';

export interface IPhoneNumberFieldOptions
  extends Omit<IRawFieldOptions<string>, 'component' | 'inputs' | 'outputs'>,
    IFieldOptions<string>,
    MatFormFieldDefaultOptions,
    ITextOptions {}

export interface IPhoneNumberField
  extends IFieldOptions<string>,
    ITextOptions {}

export class PhoneNumberField extends RawField<
  string,
  PhoneNumberFieldComponent
> {
  constructor(options: IPhoneNumberFieldOptions) {
    super({
      ...options,
      component: PhoneNumberFieldComponent,
      inputs: {
        appearance: options.appearance,
        hideRequiredMarker: options.hideRequiredMarker,
        color: options.color,
        floatLabel: options.floatLabel,
        subscriptSizing: options.subscriptSizing,
        label: options.label,
        class: options.class,
        hint: options.hint,
        placeholder: options.placeholder,
        readonly: options.readonly,
        id: options.id,
      } as IPhoneNumberFieldOptions,
    });
  }
}
