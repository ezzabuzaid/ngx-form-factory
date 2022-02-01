import { ArgTypes } from "@storybook/angular";
import { EFieldType } from "ngx-form-factory";

export const typeControl: () => ArgTypes = () => ({
    type: {
        name: 'type',
        options: Object.values(EFieldType).filter(it => typeof it === 'string'),
        control: { type: "select" },
        table: {
            disable: true,
        },
    }
});
