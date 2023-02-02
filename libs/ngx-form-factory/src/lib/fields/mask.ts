import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { InputmaskOptions } from '@ngneat/input-mask';

import { Field, IField, IFieldOptions, ITextOptions } from './field';
import { EFieldType } from './field_type';

export interface IMaskFieldOptions<T>
  extends IFieldOptions<T>,
    MatFormFieldDefaultOptions,
    ITextOptions {
  mask: InputmaskOptions<T>;
}

export interface IMaskField<T> extends IField<T> {
  mask: InputmaskOptions<T>;
}

export class MaskField<T> extends Field<T> implements IMaskField<T> {
  mask: InputmaskOptions<T>;
  constructor(options: IMaskFieldOptions<T>) {
    super(options);
    this.type = EFieldType.MASK;
    this.mask = options.mask;
  }
}
