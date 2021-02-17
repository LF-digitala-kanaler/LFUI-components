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
  
  config.module.rules.push(
    
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
