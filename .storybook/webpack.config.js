const path = require('path');
const  moduleImporter = require('sass-module-importer');
const custom = require('../webpack.config.js');
// Export a function. Accept the base config as the only param.
module.exports = async ({
  config,
  mode
}) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  //config.module.rules = config.module.rules.filter(rule => !rule.test.test(".scss"));
  
  // Make whatever fine-grained changes you need
  
  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      }
    }
    if (rule.test.toString() === '/\\.css$/') {
      rule.exclude = path.resolve(__dirname, '../src/');
    }
    
    return rule
  })
  config.module.rules.push(
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
            options: { sourceMap: true }
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
              importer: moduleImporter()
            },
          }
        ],
    },
    {
      test: /\.(svg)$/,
      loaders: ['file-loader'],
      include: path.resolve(__dirname, '../'), 
    },
    {
      test: /\.(js)$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, '../node_modules/eonasdan-bootstrap-datetimepicker'),
      ],
    },
    {
      test: /\.csv$/,
      use: 'dsv-loader'
    },
  );
  
  // Return the altered config
  
  return config;
  
};