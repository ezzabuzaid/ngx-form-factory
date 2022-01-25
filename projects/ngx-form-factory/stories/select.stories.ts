import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArgTypes, Meta, Story } from "@storybook/angular";
import { FieldFactoryModule, SelectField, SelectOption } from "ngx-form-factory";
import { of } from "rxjs";
import { commonArgTypes } from "./common_arg_types";
import { ARGS, convertArgsToProps, FieldModelerComponent } from "./field_modeler_component";
import field_options from "./field_options";
import { requiredArgType } from "./validation_arg_types";


const { autocomplete, ...restOfArgTypes } = commonArgTypes();
const argTypes: ArgTypes = {
    ...restOfArgTypes,
    options: {
        defaultValue: Array.from({ length: 5 }, (_, index) => `Option ${ index + 1 }`),
        control: { type: 'object' },
    }
};

export default {
    title: "SelectField",
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
                        field: new SelectField({
                            ...field_options(args),
                            options: of(args.options.map(option => new SelectOption(option))),
                            multiple: props.multiple,
                            errors: props.errors,
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
export const Multiple = Story.bind({});
export const WithValidation = Story.bind({});

Default.argTypes = {
};

Multiple.argTypes = {
    multiple: {
        defaultValue: true,
        type: "boolean"
    }
};

WithValidation.argTypes = {
    ...argTypes,
    ...requiredArgType
};
