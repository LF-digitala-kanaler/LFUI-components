
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Avoid duplicate imports in our modules
const importer = require('node-sass-import-once');
const increaseSpecificity = require('postcss-increase-specificity');

/* We import files through our node_modules, using @import 'bootstrap/x/_x.scss'.
 * by default, this does not work as our build won't recognize the file path.
 * In a beautiful world, we'd use webpacks tilde '~' import functionality to automatically find the relative path to
 * each dependency imported this way, but that won't work for, i.e ÖS that doesn't use webpack _but_ imports LFUI.scss.
 * Hence we need module importer, which allows us to omit the tilde from our imports in our build.
 */
const  moduleImporter = require('sass-module-importer');
module.exports = {
  entry: {
    '/lfui/lfui': './src/index.js',
    '/docs/docs': './src/docs/index.js'
  },
  performance: { hints: false } ,
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { 
        from: 'src/docs/',
        to: 'docs/html/',
        ignore: ['*.js'] // ignore stories 
      },
      { 
        from: 'src/data/componentsStatus.json',
        to: 'docs/data/'
      },
      { 
        from: 'src/icon/Regular.md',
        to: 'docs/icons/regular.md'
      },
       { 
        from: 'src/icon/Special.md',
        to: 'docs/icons/special.md'
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
        exclude: /DOCS\.scss$/,
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
                importLoaders: 1,
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
        test: /DOCS\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-base64')({
                  pattern: /<svg.*<\/svg>/i,
                  prepend: 'data:image/svg+xml;base64,'
                }),
                increaseSpecificity({repeat:1, stackableRoot: '.lfui-theme' }),
                
              ],
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: moduleImporter(),
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
              name: 'lfui/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
      test: /\.csv$/,
      use: 'dsv-loader'
    },
    ]
  }
  
}