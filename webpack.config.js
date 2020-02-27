
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

// Avoid duplicate imports in our modules
const importer = require('node-sass-import-once');

/* We import files through our node_modules, using @import 'bootstrap/x/_x.scss'.
 * by default, this does not work as our build won't recognize the file path.
 * In a beautiful world, we'd use webpacks tilde '~' import functionality to automatically find the relative path to
 * each dependency imported this way, but that won't work for, i.e ÖS that doesn't use webpack _but_ imports LFUI.scss.
 * Hence we need module importer, which allows us to omit the tilde from our imports in our build.
 */
const  moduleImporter = require('sass-module-importer');
module.exports = {
  entry: {
    lf: './src/index.js',
    docs: './src/docs/index.js'
  },
  performance: { hints: false } ,
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    jquery: {
      amd: 'jquery',
      root: '$',
      commonjs: 'jquery',
      commonjs2: 'jquery'
    }
  },
  plugins: [
    // copy html files to be used in LFUI-website to show examples
    new CopyPlugin([
      { 
        from: 'src/docs/',
        to: 'html/',
        ignore: ['*.js'] // ignore stories 
      },
  
    ]),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    new OptimizeCssAssetsPlugin({
      
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassConfig:
        {
          importer: importer
        },
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      Alert: 'exports-loader?Util!bootstrap/js/dist/alert',
      Button: 'exports-loader?Util!bootstrap/js/dist/button',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Dropdown!bootstrap/js/dist/modal',
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /sv/),

  ], 
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   hmr: process.env.NODE_ENV === 'development',
            // },
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
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
    ]
  }
  
}