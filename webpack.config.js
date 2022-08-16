const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

/* We import files through our node_modules, using @import 'bootstrap/x/_x.scss'.
 * by default, this does not work as our build won't recognize the file path.
 * In a beautiful world, we'd use webpacks tilde '~' import functionality to automatically find the relative path to
 * each dependency imported this way, but that won't work for, i.e ÖS that doesn't use webpack _but_ imports LFUI.scss.
 * Hence we need module importer, which allows us to omit the tilde from our imports in our build.
 */
module.exports = {
  entry: {
    lfui: {
      import: './src/index.js',
      filename: 'lfui.js',
      library: {
        name: 'LFUI',
        type: 'umd'
      }
    },
    'docs/docs': {
      import: './src/docs/index.js',
      filename: 'docs/docs.js',
      library: {
        name: ['LFUI', 'DOCS'],
        type: 'umd'
      }
    }
  },
  performance: {
    hints: false
  },
  output: {
    asyncChunks: false,
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    jquery: 'jQuery'
  },
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()]
  },
  plugins: [
    // copy html files used in LFDS to show examples
    new CopyPlugin({
      patterns: [
        {
          from: 'src/docs/',
          to: 'docs/html/',
          globOptions: {
            ignore: ['*.js'] // ignore stories,
          }
        },
        {
          from: 'src/data/componentsStatus.json',
          to: 'docs/data/'
        },
        {
          from: './node_modules/@lf-digitala-kanaler/lfui-icons/dist',
          to: 'docs/lf-icons/'
        }
      ]
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      Alert: 'exports-loader?Util!bootstrap/js/dist/alert',
      Button: 'exports-loader?Util!bootstrap/js/dist/button',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Dropdown!bootstrap/js/dist/modal',
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              warnRuleAsWarning: true,
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash].[name][ext][query]'
        }
      },
      {
        test: /\.csv$/,
        use: 'dsv-loader'
      }
    ]
  }
}
