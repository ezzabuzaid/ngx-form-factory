import { Validators } from '@angular/forms';

import { IFieldOnlyOptions } from '../fields';
import { convertArgsToProps } from './field_modeler_component';

export default (args: any): IFieldOnlyOptions<any, any> => {
  const props = convertArgsToProps(args);
  return {
    label: args.label,
    class: args.class,
    value: args.value,
    errors: props['errors'],
    validatorOrOpts: {
      validators: [
        args.min && Validators.min(args.min),
        args.max && Validators.max(args.max),
        args.maxLength && Validators.maxLength(args.maxLength),
        args.minLength && Validators.minLength(args.minLength),
        args.email && Validators.email,
        args.required && Validators.required,
        args.pattern && Validators.pattern(args.pattern),
      ].filter((v) => !!v),
    },
  };
};
export const matFormFieldOptions = (args: any): IFieldOnlyOptions<any, any> => {
  return {
    readonly: args.readonly,
    hint: args.hint,
    placeholder: args.placeholder,
    autocomplete: args.autocomplete,

    subscriptSizing: args.subscriptSizing,
    color: args.color,
    hideRequiredMarker: args.hideRequiredMarker,
    appearance: args.appearance,
    floatLabel: args.floatLabel,
  };
};
export const matSelectOptions = (args: any): IFieldOnlyOptions<any, any> => {
  return {
    readonly: args.readonly,
    hint: args.hint,
    placeholder: args.placeholder,

    subscriptSizing: args.subscriptSizing,
    color: args.color,
    hideRequiredMarker: args.hideRequiredMarker,
    appearance: args.appearance,
    floatLabel: args.floatLabel,
  };
};
