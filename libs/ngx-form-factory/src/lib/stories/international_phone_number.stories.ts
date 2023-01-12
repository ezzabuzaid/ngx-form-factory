import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { InternationalPhoneNumberField } from "../fields/international_phone_number.field";
import { NgxFormFactoryModule } from "../ngx-form-factory.module";
import { commonArgTypes } from "./common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent } from "./field_modeler_component";
import field_options, { matFormFieldOptions } from "./field_options";
import { requiredArgType } from "./validation_arg_types";

const {placeholder, _argTypes} = commonArgTypes()
 const argTypes: ArgTypes = {
    ...commonArgTypes()
};

export default {
    title: "PhonenumberField",
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
                      field: new InternationalPhoneNumberField({
                        ...field_options(args),
                        ...matFormFieldOptions(args),
                        value: '+962792807794'
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

Default.args = {
};

WithValidation.argTypes = {
    ...argTypes,
    ...requiredArgType
};
