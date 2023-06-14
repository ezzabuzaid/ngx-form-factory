module.exports = {
  stories: ['../**/(country|text|phone_number).stories.ts'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    options: {},
    name: '@storybook/angular',
  },
};
