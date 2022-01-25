import { ArgTypes } from "@storybook/angular";

export const commonArgTypes: () => ArgTypes = () => ({
    label: {
        name: "label",
        defaultValue: "Field Label",
        type: { required: true, name: "string" },
    },
    value: {
        name: "initial value",
        type: "string",
    },
    autocomplete: {
        name: "autocomplete",
        type: "string",
        description:
            "a list of valid autocomplete properties can be found [here](https://shorturl.at/ehFR9)",
    },
    appearance: {
        name: "appearance",
        defaultValue: "legacy",
        options: ["legacy", "standard", "fill", "outline"],
        control: { type: "select" },
        description: "[Read More](https://shorturl.at/bjmF3)",
    },
    floatLabel: {
        name: "float label",
        options: ["always", "never", "auto"],
        control: { type: "select" },
        description: "[Read More](https://shorturl.at/bkH28)",
    },
    hint: {
        name: "hint",
        type: "string",
        description: "[Read More](https://shorturl.at/mnyCU)",
    },
});
