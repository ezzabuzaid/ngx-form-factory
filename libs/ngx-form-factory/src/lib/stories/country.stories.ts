import { ArgTypes, Meta, StoryObj } from '@storybook/angular';

import { EFieldType, Field } from '../fields';
import { commonArgTypes } from './utils/common_arg_types';
import {
  ARGS,
  convertArgsToProps,
  FieldModelerComponent,
} from './utils/field_modeler_component';
import field_options, { matSelectOptions } from './utils/field_options';
import { requiredArgType } from './utils/validation_arg_types';

const argTypes: ArgTypes = {
  ...commonArgTypes(),
};

export default {
  title: 'CountryField',
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
              field: new Field({
                ...field_options(args),
                ...matSelectOptions(args),
                type: EFieldType.COUNTRY,
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

export const Default: StoryObj<FieldModelerComponent> = {
  args: {},
};
export const WithValidation: StoryObj<FieldModelerComponent> = {
  argTypes: {
    ...argTypes,
    ...requiredArgType,
  },
};
