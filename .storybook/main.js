const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve('./src'), 'node_modules'];

    //override file loader rule
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString().indexOf('svg') !== -1) {
        rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      include: /icons/,
      use: [
        {
          loader: 'svg-sprite-loader',
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeNonInheritableGroupAttrs: true },
              { collapseGroups: true },
              { removeAttrs: { attrs: '(fill|stroke)' } },
            ],
          },
        },
      ],
    });

    return config;
  }
};
