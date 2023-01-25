import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { EFieldType, Field } from "../fields";
import { NgxFormFactoryModule } from "../ngx-form-factory.module";
import { commonArgTypes } from "./utils/common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent } from "./utils/field_modeler_component";
import field_options, { matSelectOptions } from "./utils/field_options";
import { requiredArgType } from "./utils/validation_arg_types";


 const argTypes: ArgTypes = {
    ...commonArgTypes()
};

export default {
    title: "CountryField",
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
                          ...matSelectOptions(args),
                          type:EFieldType.COUNTRY
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
