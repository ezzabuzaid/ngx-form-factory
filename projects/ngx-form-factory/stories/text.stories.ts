import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, Story } from "@storybook/angular";
import { Field, FieldFactoryComponent, FieldFactoryModule } from "ngx-form-factory";
export default {
    title: 'TextField',
    component: FieldFactoryComponent,
} as Meta;

const Story: Story = (args, context) => ({
    moduleMetadata: {
        imports: [
            BrowserAnimationsModule,
            FieldFactoryModule
        ]
    },
    props: args
});

export const Default = Story.bind({})

Default.args = {
    field: new Field()
}