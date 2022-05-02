import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

import { Field, IFieldOptions, ITextOptions } from './field';
import { EFieldType } from './field_type';

export interface ITimeFieldOptions
  extends IFieldOptions<string>,
    MatFormFieldDefaultOptions,
    ITextOptions {
  /**
   * Minumum allowed time to enter
   *
   * e.g: 10:02
   */
  min?: string;
  /**
   * Maximum allowed time to enter
   * e.g: 10:02
   */
  max?: string;
  /**
   * Either EFieldType.DATETIME or EFieldType.TIME
   */
  type?: EFieldType.DATETIME | EFieldType.TIME;
  autocomplete?: 'on' | 'off';
}

export interface ITimeField {
  /**
   * Minumum allowed time to enter
   *
   * e.g: 10:02
   */
  min?: string;
  /**
   * Maximum allowed time to enter
   * e.g: 10:02
   */
  max?: string;
  autocomplete?: 'on' | 'off';
}

export class TimeField extends Field<string> implements ITimeField {
  public min?: string;
  public max?: string;
  public override autocomplete?: 'on' | 'off';
  constructor(options?: ITimeFieldOptions) {
    super(options);
    this.type = options?.type ?? EFieldType.TIME;
    this.min = options?.min;
    this.max = options?.max;
    this.autocomplete = options?.autocomplete;
  }
}
