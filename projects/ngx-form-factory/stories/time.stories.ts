import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { EFieldType, FieldFactoryModule, TimeField } from "ngx-form-factory";
import { commonArgTypes } from "./common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent } from "./field_modeler_component";
import field_options from "./field_options";
import { maxTimeArgType, minTimeArgType, requiredArgType } from "./validation_arg_types";

const { autocomplete, ...restOfArgTypes } = commonArgTypes();

const argTypes: ArgTypes = {
  ...restOfArgTypes,
};

export default {
  title: "TimeField",
  component: FieldModelerComponent,
  argTypes: argTypes,
} as Meta;

const Story: Story = (args, context) => ({
  moduleMetadata: {
    declarations: [FieldModelerComponent],
    imports: [BrowserAnimationsModule, FieldFactoryModule, MatCardModule],
    providers: [
      {
        provide: ARGS,
        useValue: (() => {
          const props = convertArgsToProps(args);
          return {
            field: new TimeField({
              ...field_options(args),
              type: EFieldType.TIME,
              min: args.minTime,
              max: args.maxTime,
            }),
            ...props
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
  ...minTimeArgType,
  ...maxTimeArgType
};
