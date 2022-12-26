import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { EFieldType, TimeField } from "../fields";
import { FormFactoryModule } from "../ngx-form-factory.module";
import { commonArgTypes, matInputArgType } from "./common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent } from "./field_modeler_component";
import field_options from "./field_options";
import { maxTimeArgType, minTimeArgType, requiredArgType } from "./validation_arg_types";


const argTypes: ArgTypes = {
  ...commonArgTypes(),
  ...matInputArgType

};

export default {
  title: "TimeField",
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
          const props = convertArgsToProps(args);
          return {
            field: new TimeField({
              ...field_options(args),
              type: EFieldType.TIME,
              min: args['minTime'],
              max: args['maxTime'],
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
