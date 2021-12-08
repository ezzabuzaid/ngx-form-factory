const path = require('path')
module.exports = {
  "stories": [
    "../projects/**/*.stories.mdx",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}