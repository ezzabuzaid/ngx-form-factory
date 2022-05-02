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
import { AutoComplete } from '../shared/autocomplete.type';
import { EFieldType } from './field_type';

export type FieldName<T> = keyof T extends string ? keyof T : never;
export type FieldValue<T, name> = {
  [key in keyof T]: key extends name ? T[key] : never;
}[keyof T];
export declare type Constructor<T> = new (...args: any[]) => T;

export interface IBaseField<T> extends FormControl {
  id: string;
  type?: EFieldType;
  value: T | { value: T; disabled: boolean };
  section?: string;
  autocomplete?: AutoComplete;
}

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
  errors?: Record<string, string | ((value: any) => string)>;
}

export class BaseField<T> extends FormControl implements IBaseField<T> {
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
    this.errorsMessages = options?.errors;
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
export type TFields<T> = {
  [key in keyof T]: BaseField<T[key]> | IForm<T[key]>;
};
export interface IForm<T> extends AbstractControl {
  fields: TFields<T>;
  validation?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
}
export class Form<T> extends FormGroup implements IForm<T> {
  constructor(
    public fields: TFields<T>,
    validation?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(fields, validation, asyncValidator);
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

  /**
   * Simple method that will return the same provided name,
   * perfect usage will be in HTML with `[formControlName]` directive,
   * in case of name change the compiler will rise an error up
   */
  getName(name: keyof T) {
    return name;
  }

  /**
   *
   * Reports whether the control with the given path has the error specified.
   *
   * @param name of the field control
   * @param errorName that will be used to check against
   */
  hasControlError(name: keyof T, errorName: string) {
    return this.get(name as any).hasError(errorName);
  }

  /**
   *
   * Return the specified control typed value
   *
   * @param name of the field control
   * @param defaultValue that will be used in case of null or undefined
   */
  getControlValue<key extends keyof T>(name: key, defaultValue?: T[key]) {
    return this.get(name as any).value ?? defaultValue;
  }
}
