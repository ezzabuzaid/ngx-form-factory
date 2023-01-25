import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { EFieldType, Field } from "../fields";
import { NgxFormFactoryModule } from "../ngx-form-factory.module";
import { commonArgTypes, matInputArgType } from "./utils/common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent } from "./utils/field_modeler_component";
import field_options from "./utils/field_options";
import { emailArgType, maxLengthArgType, minLengthArgType, patternArgType, requiredArgType } from "./utils/validation_arg_types";


const argTypes: ArgTypes = {
  ...commonArgTypes(),
  ...matInputArgType
};

export default {
  title: "EmailField",
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
          const props = convertArgsToProps(args);
          return {
            field: new Field({
              ...field_options(args),
              type: EFieldType.EMAIL,
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
}
Default.args = {
  type: EFieldType.EMAIL,
  autocomplete:'email'
}
WithValidation.argTypes = {
  ...argTypes,
  ...requiredArgType,
  ...maxLengthArgType,
  ...minLengthArgType,
  ...emailArgType,
  ...patternArgType
};
WithValidation.args = {
  type: EFieldType.EMAIL
}
