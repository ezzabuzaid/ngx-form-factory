import { Validators } from '@angular/forms';

import { IFieldOptions } from '../fields';
import { convertArgsToProps } from './field_modeler_component';

export default (args: any): IFieldOptions<any> => {
  const props = convertArgsToProps(args);
  return {
    appearance: args.appearance,
    floatLabel: args.floatLabel,
    hideRequiredMarker: args.hideRequiredMarker,
    label: args.label,
    placeholder: args.placeholder,
    readonly: args.readonly,
    class: args.class,
    autocomplete: args.autocomplete,
    value: args.value,
    errors: props['errors'],
    hint: args.hint,
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
