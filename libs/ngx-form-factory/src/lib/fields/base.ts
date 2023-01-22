import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  FormControlOptions,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { fromEvent } from 'rxjs';

import { generateAlphabeticString } from '../shared';
import { EFieldType } from './field_type';

export type FieldName<T> = keyof T extends string ? keyof T : never;

export type FieldValue<T, name> = {
  [key in keyof T]: key extends name ? T[key] : never;
}[keyof T];

export declare type Constructor<T> = new (...args: any[]) => T;

export interface IBaseFieldOptions<T> {
  /**
   * Group fields by section name
   *
   * used to reflow the fields to shape together in the HTML as line of maximum 3 fields
   */
  section?: string;
  /**
   * Give the field unique id to locate it's element in the DOM
   *
   * It'll be generated uniquly, unless you want to give it specific one
   */
  id?: string;
  /**
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   */
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | FormControlOptions | null;
  /**
   * @param asyncValidator A single async validator or array of async validator functions
   * @note quoted from Angular docs
   */
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
  /**
   * @param formState Initializes the control with an initial value,
   * or an object that defines the initial value and disabled state.
   */
  value?: T | { value: T; disabled: boolean };
  /**
   * Object that represent the expected error names and the message for each of them to show
   *
   * {
   *  "required": "please enter some info, this field is required",
   *  "minlength": (value) => `${value.length} is less than the minumum length`,
   * }
   */
  errorsMessages?: Record<string, string | ((value: any) => string)>;
  type?: EFieldType;
}

export class BaseField<T> extends FormControl implements IBaseFieldOptions<T> {
  public type!: EFieldType;
  public section: string;
  public id: string;

  /**
   * @internal
   */
  public errorsMessages?: Record<string, string | ((value: any) => string)>;

  constructor(options?: IBaseFieldOptions<T>) {
    super(options?.value, options?.validatorOrOpts, options?.asyncValidator);
    this.id = options?.id ?? generateAlphabeticString(5);
    this.section = options?.section ?? generateAlphabeticString(5);
    this.errorsMessages = options?.errorsMessages;
  }

  /**
   * return the input element
   */
  getElement<T extends HTMLInputElement>() {
    return document.getElementById(this.id) as T;
  }

  /**
   * Attach an event handler to the field input element
   *
   */
  on(eventName: keyof HTMLElementEventMap) {
    return fromEvent(this.getElement(), eventName);
  }
}
export interface IForm<T> extends AbstractControl<T> {
  fields: NativeForm<T>;
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
}

export type EnhancedForm<T> = {
  [key in keyof T]: BaseField<T[key]> | IForm<T[key]>;
};

export type NativeForm<T> = {
  [key in keyof T]: AbstractControl<T[key]>;
};

export class Form<
  T extends {
    [key in keyof T]: T[key];
  }
> extends FormGroup<NativeForm<T>> {
  constructor(
    public fields: EnhancedForm<T>,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(fields, validatorOrOpts, asyncValidator);
  }

  /**
   * Retrieves a child control given the control's name.
   *
   * @param name of the field control
   */
  override get<Key extends keyof T>(
    name: Key extends string ? Key : never
  ): BaseField<T[Key]> {
    return super.get(name as any) as any;
  }

  override addControl<Key extends keyof T>(
    name: Key extends string ? Key : never,
    control: BaseField<T[Key]>,
    options?: { emitEvent?: boolean | undefined } | undefined
  ) {
    this.fields[name] = control;
    return super.addControl(name, control, options);
  }
  override registerControl<Key extends keyof T>(
    name: Key extends string ? Key : never,
    control: BaseField<T[Key]>
  ) {
    this.fields[name] = control;
    return super.registerControl(name, control);
  }
  override removeControl<Key extends keyof T>(
    name: Key extends string ? Key : never,
    options?: { emitEvent?: boolean | undefined } | undefined
  ): void {
    delete this.fields[name];
    return super.removeControl(name as any, options);
  }
  override setControl<Key extends keyof T>(
    name: Key extends string ? Key : never,
    control: BaseField<T[Key]>,
    options?: { emitEvent?: boolean | undefined } | undefined
  ): void {
    this.fields[name] = control;
    return super.setControl(name, control, options);
  }
}
