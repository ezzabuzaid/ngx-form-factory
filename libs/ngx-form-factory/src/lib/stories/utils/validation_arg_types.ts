import { ArgTypes } from '@storybook/angular';

export const requiredArgType: ArgTypes = {
  hideRequiredMarker: {
    name: 'hide required marker',
    type: 'boolean',
    defaultValue: false,
    description:
      'If the required validator is used, an asterisk will be shown. this behaviour can be controlled by changing hideRequiredMarker',
    table: {
      category: 'validators',
      subcategory: 'required',
    },
  },
  required: {
    name: 'required',
    defaultValue: false,
    type: 'boolean',
    table: {
      category: 'validators',
      subcategory: 'required',
    },
  },
  'errorsMessages.required': {
    name: 'required validation message',
    // defaultValue: "This field is required!",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'required',
    },
  },
};

export const maxLengthArgType: ArgTypes = {
  maxLength: {
    name: 'max length',
    type: { required: false, name: 'number' },
    table: {
      category: 'validators',
      subcategory: 'maxLength',
    },
  },
  'errorsMessages.maxLength': {
    name: 'max length validation message',
    // defaultValue: "you've exceeded max length",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'maxLength',
    },
  },
};

export const minLengthArgType: ArgTypes = {
  minLength: {
    name: 'min length',
    type: { required: false, name: 'number' },
    table: {
      category: 'validators',
      subcategory: 'minLength',
    },
  },
  'errorsMessages.minLength': {
    name: 'min length validation message',
    // defaultValue: "you've to exceed min length",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'minLength',
    },
  },
};

export const minArgType: ArgTypes = {
  min: {
    name: 'min',
    type: { required: false, name: 'number' },
    table: {
      category: 'validators',
      subcategory: 'min',
    },
  },
  'errorsMessages.min': {
    name: 'min validation message',
    // defaultValue: "you've to exceed min",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'min',
    },
  },
};

export const maxArgType: ArgTypes = {
  max: {
    name: 'max',
    type: { required: false, name: 'number' },
    table: {
      category: 'validators',
      subcategory: 'max',
    },
  },
  'errorsMessages.max': {
    name: 'max validation message',
    // defaultValue: "you've exceeded max",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'max',
    },
  },
};

export const minTimeArgType: ArgTypes = {
  minTime: {
    name: 'min',
    type: { required: false, name: 'string' },
    table: {
      category: 'validators',
      subcategory: 'min',
    },
  },
  'errorsMessages.min': {
    name: 'min validation message',
    // defaultValue: "you've to exceed min",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'min',
    },
  },
};

export const maxTimeArgType: ArgTypes = {
  maxTime: {
    name: 'max',
    type: { required: false, name: 'string' },
    table: {
      category: 'validators',
      subcategory: 'max',
    },
  },
  'errorsMessages.max': {
    name: 'max validation message',
    // defaultValue: "you've exceeded max",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'max',
    },
  },
};

export const emailArgType: ArgTypes = {
  email: {
    name: 'email',
    defaultValue: false,
    type: 'boolean',
    table: {
      category: 'validators',
      subcategory: 'email',
    },
  },
  'errorsMessages.email': {
    name: 'email validation message',
    // defaultValue: "email is not correct!",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'email',
    },
  },
};

export const patternArgType: ArgTypes = {
  pattern: {
    name: 'pattern',
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'pattern',
    },
  },
  'errorsMessages.pattern': {
    name: 'email validation message',
    // defaultValue: "input doesn't match the pattern",
    type: 'string',
    table: {
      category: 'validators',
      subcategory: 'pattern',
    },
  },
};
