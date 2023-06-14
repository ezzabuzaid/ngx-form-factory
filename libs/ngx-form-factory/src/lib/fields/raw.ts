import { Type } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { UserInputs, UserOutputs } from '../shared';
import { BaseField, IBaseFieldOptions } from './base';
import { EFieldType } from './field_type';

export interface IRawFieldOptions<T>
  extends Omit<IBaseFieldOptions<T>, 'type' | 'errorsMessages'> {
  /**
   * the component which will act as field
   */
  component: Type<ControlValueAccessor>;
  /**
   * Component inputs
   */
  inputs?: { [key: string]: any };
  /**
   * Component outputs
   */
  outputs?: {
    [key: string]: (event: any) => any;
  };
}

export class RawField<T, C> extends BaseField<T> {
  component: Type<ControlValueAccessor>;
  inputs?: UserInputs;
  outputs?: UserOutputs;
  componentInstance!: C;
  constructor(options: IRawFieldOptions<T>) {
    super(options);
    this.type = EFieldType.RAW_FIELD;
    this.component = options.component;
    this.inputs = options?.inputs;
    this.outputs = options?.outputs;
  }
}
