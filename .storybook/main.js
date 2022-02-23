module.exports = {
  logLevel: 'debug',
  stories: ['../src/**/*.stories.[tj]s'],
  staticDirs: [{
    from: '../node_modules/@lf-digitala-kanaler/lfui-icons/dist',
    to: 'lf-icons'
  }],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-docs'
  ],

  webpackFinal: async (config, { configType }) => {
    // Inject options into html-loader to disable attribute resolution
    // This is required to not break relative asset (icons) paths in html files
    const htmlLoader = require.resolve('html-loader')
    for (const rule of config.module.rules) {
      if (rule.use === htmlLoader) {
        delete rule.use
        rule.loader = htmlLoader
        rule.options = { ...rule.options, attributes: false}
      }

      if (rule.test) {
        const regex = rule.test.toString().replace(/\//g, '')
        if (regex.includes('svg')) {
          rule.test = new RegExp(regex.replace(/svg\|?/, ''))
        }
        if (/woff2?/.test(regex)) {
          rule.test = new RegExp(regex.replace(/woff2?\|?/g, ''))
        }
      }
    }

    config.module.rules.push(
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
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
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'fonts',
              esModule: false // Needed to make path rebase work
            }
          }
        ]
      }
    )

    // Return the altered config
    return config
  }
}
