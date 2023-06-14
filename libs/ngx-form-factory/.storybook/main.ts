module.exports = {
  stories: ['../**/(country|text|phone_number|nested-forms).stories.ts'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    options: {},
    name: '@storybook/angular',
  },
};
