module.exports = {
  logLevel: 'debug',
  stories: ['../src/**/*.stories.[tj]s'],
  staticDirs: [
    {
      from: '../node_modules/@lf-digitala-kanaler/lfui-icons/dist',
      to: 'lf-icons'
    }
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-docs'
  ],
  framework: '@storybook/html',
  core: {
    builder: 'webpack5'
  },
  async webpackFinal(config, { configType, presets }) {
    // Inject options into html-loader to disable attribute resolution
    // This is required to not break relative asset (icons) paths in html files
    const htmlLoader = require.resolve('html-loader')
    for (const rule of config.module.rules) {
      if (rule.use === htmlLoader) {
        delete rule.use
        rule.loader = htmlLoader
        rule.options = { ...rule.options, attributes: false }
      }

      if (rule.test) {
        const regex = rule.test.toString().replace(/\//g, '')
        if (regex.includes('svg')) {
          rule.test = new RegExp(regex.replace(/svg\|?/, ''))
        }
      }
    }

    const { externals } = config
    config.externals = { ...externals, jquery: 'jQuery' }

    config.module.rules.push({
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
    })

    // Return the altered config
    return config
  }
}
