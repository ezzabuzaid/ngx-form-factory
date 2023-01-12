import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { EFieldType, Field } from "../fields";
import { NgxFormFactoryModule } from "../ngx-form-factory.module";
import { commonArgTypes, matInputArgType } from "./common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent, FieldModelerComponentModule } from "./field_modeler_component";
import field_options, { matFormFieldOptions } from "./field_options";
import { typeControl } from "./type_control";
import { maxLengthArgType, minLengthArgType, patternArgType, requiredArgType } from "./validation_arg_types";


const argTypes: ArgTypes = {
  ...commonArgTypes(),
...matInputArgType
};

export default {
  title: "TextField",
  component:FieldModelerComponent,
  argTypes: argTypes,
} as Meta;

const Story: Story = (args:any, context) => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      FieldModelerComponentModule,
      NgxFormFactoryModule,
    ],
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

Default.args = {
  type: EFieldType.TEXT
}

WithValidation.argTypes = {
  ...argTypes,
  ...typeControl(),
  ...requiredArgType,
  ...maxLengthArgType,
  ...minLengthArgType,
  ...patternArgType
};
WithValidation.args = {
  type: EFieldType.TEXT
}
