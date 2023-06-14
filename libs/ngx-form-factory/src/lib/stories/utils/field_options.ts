import { Validators } from '@angular/forms';

import { IFieldOnlyOptions } from '../../fields';
import { convertArgsToProps } from './field_modeler_component';

export default (args: any): IFieldOnlyOptions<any, any> => {
  const props = convertArgsToProps(args);
  return {
    label: args.label,
    class: args.class,
    value: args.value,
    errorsMessages: props['errorsMessages'],
    validators: [
      args.min && Validators.min(args.min),
      args.max && Validators.max(args.max),
      args.maxlength && Validators.maxLength(args.maxlength),
      args.minlength && Validators.minLength(args.minlength),
      args.email && Validators.email,
      args.required && Validators.required,
      args.pattern && Validators.pattern(args.pattern),
    ].filter(Boolean),
  };
};
export const matFormFieldOptions = (args: any): IFieldOnlyOptions<any, any> => {
  return {
    readonly: args.readonly,
    hint: args.hint,
    placeholder: args.placeholder,
    autocomplete: args.autocomplete,

    suffix: args.suffix,
    prefix: args.prefix,

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

    suffix: args.suffix,
    prefix: args.prefix,

    subscriptSizing: args.subscriptSizing,
    color: args.color,
    hideRequiredMarker: args.hideRequiredMarker,
    appearance: args.appearance,
    floatLabel: args.floatLabel,
  };
};
