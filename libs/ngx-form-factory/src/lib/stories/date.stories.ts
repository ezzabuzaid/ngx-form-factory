import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { DateField } from "../fields";
import { NgxFormFactoryModule } from "../ngx-form-factory.module";

import { commonArgTypes, matInputArgType } from "./utils/common_arg_types";
import { ARGS, FieldModelerComponent, pickAsObject } from "./utils/field_modeler_component";
import field_options from "./utils/field_options";
import { requiredArgType } from "./utils/validation_arg_types";

const argTypes: ArgTypes = {
  ...commonArgTypes(),
  ...pickAsObject(matInputArgType,'readonly'),
  minFilter: {
    name: 'min',
    type: 'string',
    control: { type: 'date' },
    table: {
      category: 'Filter'
    }
  },
  maxFilter: {
    name: 'max',
    type: 'string',
    control: { type: 'date' },
    table: {
      category: 'Filter'
    }
  },
};

export default {
  title: "DateField",
  component: FieldModelerComponent,
  argTypes: argTypes,
} as Meta;

const Story: Story = (args, context) => ({
  moduleMetadata: {
    declarations: [FieldModelerComponent],
    imports: [BrowserAnimationsModule, NgxFormFactoryModule, MatCardModule],
    providers: [
      {
        provide: ARGS,
        useValue: (() => {
          console.log(args)
          return {
            field: new DateField({
              ...field_options(args),
              min: new Date(args['minFilter']),
              max: new Date(args['maxFilter']),
            }),
            ...args
          }
        })()
      }
    ],
  },
  props: args,
});

export const Default = Story.bind({});
export const WithValidation = Story.bind({});

Default.argTypes = {
};

WithValidation.argTypes = {
  ...argTypes,
  ...requiredArgType,
};
