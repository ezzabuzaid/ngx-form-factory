import {
  AbstractControl,
  FormControl,
  FormControlOptions,
  FormGroup,
} from '@angular/forms';
import { fromEvent } from 'rxjs';

import { generateAlphabeticString } from '../shared';
import { EFieldType } from './field_type';

export type FieldName<T> = keyof T extends string ? keyof T : never;

export type FieldValue<T, name> = {
  [key in keyof T]: key extends name ? T[key] : never;
}[keyof T];

export declare type Constructor<T> = new (...args: any[]) => T;

export interface IBaseFieldOptions<T> extends FormControlOptions {
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
    super(options?.value, options);
    this.id = options?.id ?? generateAlphabeticString(5);
    this.section = options?.section ?? generateAlphabeticString(5);
    this.errorsMessages = options?.errorsMessages;
  }

  /**
   * Get the input element from the DOM
   */
  getElement<T extends HTMLInputElement>() {
    return document.getElementById(this.id) as T;
  }

  /**
   * Attach event listener to the input element
   */
  on(eventName: keyof HTMLElementEventMap) {
    return fromEvent(this.getElement(), eventName);
  }
}
// export interface IForm<T> extends AbstractControl<T> {
//   fields: NativeForm<T>;
// }

// export type EnhancedForm<T> = {
//   [key in keyof T]: BaseField<T[key]> | IForm<T[key]>;
// };

export type NativeForm<T> = {
  [key in keyof T]:
    | BaseField<T[key]>
    | (AbstractControl<T[key]> & {
        controls: NativeForm<T[key]>;
      });
};

export class Form<
  T extends {
    [key in keyof T]: T[key];
  }
> extends FormGroup<NativeForm<T>> {
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
  // override addControl<Key extends keyof T>(
  //   name: Key extends string ? Key : never,
  //   control: BaseField<T[Key]>,
  //   options?: { emitEvent?: boolean | undefined } | undefined
  // ) {
  //   this.fields[name] = control;
  //   return super.addControl(name, control, options);
  // }
  // override registerControl<Key extends keyof T>(
  //   name: Key extends string ? Key : never,
  //   control: BaseField<T[Key]>
  // ) {
  //   this.fields[name] = control;
  //   return super.registerControl(name, control);
  // }
  // override removeControl<Key extends keyof T>(
  //   name: Key extends string ? Key : never,
  //   options?: { emitEvent?: boolean | undefined } | undefined
  // ): void {
  //   delete this.fields[name];
  //   return super.removeControl(name as any, options);
  // }
  // override setControl<Key extends keyof T>(
  //   name: Key extends string ? Key : never,
  //   control: BaseField<T[Key]>,
  //   options?: { emitEvent?: boolean | undefined } | undefined
  // ): void {
  //   this.fields[name] = control;
  //   return super.setControl(name, control, options);
  // }
}
