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
    // This is required to not break realtive asset paths in html files
    const loader = require.resolve('html-loader')
    for (const rule of config.module.rules) {
      if (rule.use === loader) {
        delete rule.use
        rule.loader = loader
        rule.options = { ...rule.options, attributes: false}
      }
    }

    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('svg')) {
        const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    })
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
      }
    )

    // Return the altered config
    return config
  }
}
