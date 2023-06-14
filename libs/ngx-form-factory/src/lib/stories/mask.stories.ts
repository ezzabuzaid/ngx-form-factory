import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { MaskField } from "../fields";
import { commonArgTypes, matInputArgType } from "./utils/common_arg_types";
import { ARGS, FieldModelerComponent, convertArgsToProps } from "./utils/field_modeler_component";
import field_options, { matFormFieldOptions } from "./utils/field_options";
import { typeControl } from "./utils/type_control";
import { maxLengthArgType, minLengthArgType, patternArgType, requiredArgType } from "./utils/validation_arg_types";


const argTypes: ArgTypes = {
  ...commonArgTypes(),
...matInputArgType
};

export default {
  title: "MaskField",
  component:FieldModelerComponent,
  argTypes: argTypes,
} as Meta;

const Story: Story = (args:any, context) => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
    ],
    providers: [
      {
        provide: ARGS,
        useValue: (() => {
          const props = convertArgsToProps(args);
          return {
            field: new MaskField({
              mask: {

              },
              ...field_options(args),
              ...matFormFieldOptions(args),
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
  ...typeControl()
}

// Default.args = {
//   type: EFieldType.TEXT
// }

WithValidation.argTypes = {
  ...argTypes,
  ...typeControl(),
  ...requiredArgType,
  ...maxLengthArgType,
  ...minLengthArgType,
  ...patternArgType
};
