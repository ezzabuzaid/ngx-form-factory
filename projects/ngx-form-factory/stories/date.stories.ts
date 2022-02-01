import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { DateField, FormFactoryModule } from "ngx-form-factory";
import { commonArgTypes } from "./common_arg_types";
import { ARGS, FieldModelerComponent } from "./field_modeler_component";
import field_options from "./field_options";
import { requiredArgType } from "./validation_arg_types";

const { autocomplete, ...restOfArgTypes } = commonArgTypes();

const argTypes: ArgTypes = {
  ...restOfArgTypes,
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
    imports: [BrowserAnimationsModule, FormFactoryModule, MatCardModule],
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
