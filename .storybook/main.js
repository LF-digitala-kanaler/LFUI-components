const path = require('path');

module.exports = {
stories: ['../src/**/*.stories.[tj]s'],
addons: [
  '@storybook/addon-a11y',
  '@storybook/addon-backgrounds',
  '@storybook/addon-viewport',
  '@storybook/addon-docs'
],

webpackFinal: async (config, { configType }) => {
  // override svg so icons will work in prod
    console.log(configType)
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    });
  
  config.module.rules.push(
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
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
}};
