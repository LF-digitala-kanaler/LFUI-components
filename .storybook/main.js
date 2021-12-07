const path = require('path');
const URL = process.env.SB_URL
module.exports = {

  stories: ['../src/**/*.stories.[tj]s'],
  staticDirs: [{ from: '../src/icons', to: 'icons' }],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-docs'
  ],

  webpackFinal: async (config, { configType }) => {

    // config.module.rules = config.module.rules.map(rule => {
    //   if (rule.test && rule.test.toString().includes('svg')) {
    //     const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
    //     return { ...rule, test: new RegExp(test) }
    //   } else {
    //     return rule
    //   }
    // });
    if (URL) {
      config.output.publicPath = URL
    }
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',

            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],

      }
    );

    // Return the altered config
    return config;
  },
  managerWebpack: async (config) => {
    if (URL) {
      config.output.publicPath = URL
    }
    return config
  },
};
