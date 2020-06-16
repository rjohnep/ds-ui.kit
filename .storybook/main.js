const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve('./src'), 'node_modules'];

    return config;
  }
};
