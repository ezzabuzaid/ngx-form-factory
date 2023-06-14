import { ArgTypes, Meta, StoryObj } from '@storybook/angular';

import {
  IPhoneNumberFieldOptions,
  PhoneNumberField,
} from '../fields/phone_number.field';
import { commonArgTypes } from './utils/common_arg_types';
import {
  ARGS,
  convertArgsToProps,
  FieldModelerComponent,
} from './utils/field_modeler_component';
import field_options, { matFormFieldOptions } from './utils/field_options';
import { requiredArgType } from './utils/validation_arg_types';

const argTypes: ArgTypes = {
  ...commonArgTypes(),
};

export default {
  title: 'PhoneNumberField',
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
              field: new PhoneNumberField({
                ...field_options(args),
                ...matFormFieldOptions(args),
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

export const Default: StoryObj<IPhoneNumberFieldOptions> = {
  args: {
    value: '0792807794',
  },
};
export const WithValidation: StoryObj<IPhoneNumberFieldOptions> = {
  args: {
    value: '0792807794',
  },
  argTypes: {
    ...argTypes,
    ...requiredArgType,
  },
};
