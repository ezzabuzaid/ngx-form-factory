import { Validators } from '@angular/forms';

import { IFieldOnlyOptions } from '../fields';
import { convertArgsToProps } from './field_modeler_component';

export default (args: any): IFieldOnlyOptions<any, any> => {
  const props = convertArgsToProps(args);
  return {
    appearance: args.appearance,
    floatLabel: args.floatLabel,
    hideRequiredMarker: args.hideRequiredMarker,
    placeholder: args.placeholder,
    readonly: args.readonly,
    label: args.label,
    autocomplete: args.autocomplete,
    hint: args.hint,
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
