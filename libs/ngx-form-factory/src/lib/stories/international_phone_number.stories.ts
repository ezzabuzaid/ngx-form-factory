import { ArgTypes, Meta, StoryObj } from '@storybook/angular';

import {
  IInternationalPhoneNumberFieldOptions,
  InternationalPhoneNumberField,
} from '../fields/international_phone_number.field';
import { commonArgTypes } from './utils/common_arg_types';
import {
  ARGS,
  convertArgsToProps,
  FieldModelerComponent,
} from './utils/field_modeler_component';
import field_options, { matFormFieldOptions } from './utils/field_options';
import { requiredArgType } from './utils/validation_arg_types';

const { placeholder, _argTypes } = commonArgTypes();
const argTypes: ArgTypes = {
  ...commonArgTypes(),
};

export default {
  title: 'InternationalPhoneNumberField',
  component: FieldModelerComponent,
  argTypes: argTypes,
  render: (args, context) => ({
    applicationConfig: {
      providers: [
        {
          provide: ARGS,
          useValue: (() => {
            const props = convertArgsToProps(args);
            return {
              field: new InternationalPhoneNumberField({
                ...field_options(args),
                ...matFormFieldOptions(args),
                value: '0792807794',
              }),
              ...props,
            };
          })(),
        },
      ],
    },
    props: {
      ...args,
    },
  }),
} as Meta<FieldModelerComponent>;
export const Default: StoryObj<IInternationalPhoneNumberFieldOptions> = {};
export const WithValidation: StoryObj<IInternationalPhoneNumberFieldOptions> = {
  argTypes: {
    ...argTypes,
    ...requiredArgType,
  },
};
