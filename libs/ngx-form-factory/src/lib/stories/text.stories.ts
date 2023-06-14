import { ArgTypes, Meta, StoryObj } from '@storybook/angular';

import { EFieldType, Field, IBaseFieldOptions } from '../fields';
import { commonArgTypes, matInputArgType } from './utils/common_arg_types';
import {
  ARGS,
  convertArgsToProps,
  FieldModelerComponent,
} from './utils/field_modeler_component';
import field_options, { matFormFieldOptions } from './utils/field_options';
import { typeControl } from './utils/type_control';
import {
  maxLengthArgType,
  minLengthArgType,
  patternArgType,
  requiredArgType,
} from './utils/validation_arg_types';

const argTypes: ArgTypes = {
  ...commonArgTypes(),
  ...matInputArgType,
};

export default {
  title: 'TextField',
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
                ...matFormFieldOptions(args),
                type: EFieldType.TEXT,
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

export const Default: StoryObj<IBaseFieldOptions<any>> = {
  args: {
    type: EFieldType.TEXT,
  },
  argTypes: {
    ...typeControl(),
  },
};
export const WithValidation: StoryObj<IBaseFieldOptions<any>> = {
  args: {
    type: EFieldType.TEXT,
  },
  argTypes: {
    ...argTypes,
    ...typeControl(),
    ...requiredArgType,
    ...maxLengthArgType,
    ...minLengthArgType,
    ...patternArgType,
  },
};
