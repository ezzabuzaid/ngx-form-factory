import { Meta, StoryObj } from '@storybook/angular';

import { EFieldType, Field, Form, IBaseFieldOptions } from '../fields';
import {
  ARGS,
  convertArgsToProps,
  FieldModelerComponent,
  FormModelerComponent,
} from './utils/field_modeler_component';

export default {
  title: 'NestedField',
  component: FormModelerComponent,
  render: (args, context) => ({
    applicationConfig: {
      providers: [
        {
          provide: ARGS,
          useValue: (() => {
            const props = convertArgsToProps(args);
            return {
              form: new Form({
                input: new Field({
                  label: 'Input',
                  section: 'input',
                }),
                operator: new Field({
                  label: 'Operator',
                  section: 'input',
                }),
                data: new Form({
                  kind: new Field({
                    label: 'kind',
                  }),
                  value: new Field({
                    label: 'value',
                  }),
                  inverse: new Field({ type: EFieldType.HIDDEN }),
                  type: new Field({ type: EFieldType.HIDDEN }),
                  defaultValue: new Field({ type: EFieldType.HIDDEN }),
                  required: new Field({ type: EFieldType.HIDDEN }),
                }),
                ...props,
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

export const Default: StoryObj<IBaseFieldOptions<any>> = {};
