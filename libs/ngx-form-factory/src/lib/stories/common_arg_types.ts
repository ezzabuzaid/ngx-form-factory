import { ArgTypes } from '@storybook/angular';

export const commonArgTypes: () => ArgTypes = () => ({
  label: {
    name: 'label',
    defaultValue: 'Field label',
    type: { required: false, name: 'string' },
  },
  placeholder: {
    name: 'placeholder',
    defaultValue: 'Field placeholder',
    type: { required: false, name: 'string' },
  },
  value: {
    name: 'initial value',
    type: 'string',
  },
  appearance: {
    name: 'appearance',
    options: ['fill', 'outline'],
    control: { type: 'select' },
    description: '[Read More](https://shorturl.at/bjmF3)',
  },
  floatLabel: {
    name: 'float label',
    options: ['always', 'never', 'auto'],
    control: { type: 'select' },
    description: '[Read More](https://shorturl.at/bkH28)',
  },
  hint: {
    name: 'hint',
    type: 'string',
    description: '[Read More](https://shorturl.at/mnyCU)',
  },
  class: {
    name: 'class',
    type: 'string',
  },
});

export const matInputArgType: ArgTypes = {
  autocomplete: {
    name: 'autocomplete',
    type: 'string',
    description:
      'a list of valid autocomplete properties can be found [here](https://shorturl.at/ehFR9)',
  },
  readonly: {
    name: 'readonly',
    type: 'boolean',
  },
};
