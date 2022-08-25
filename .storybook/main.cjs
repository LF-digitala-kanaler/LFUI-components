const { mergeConfig } = require('vite')

module.exports = {
  logLevel: 'debug',
  stories: ['../src/docs/**/*.stories.js'],
  staticDirs: [
    {
      from: '../node_modules/@lf-digitala-kanaler/lfui-icons/dist',
      to: 'lf-icons'
    },
    {
      from: '../node_modules/@lf-digitala-kanaler/fonts',
      to: 'fonts'
    }
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport'
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  managerWebpack: async (config, options) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = '/LFUI-components/'
    }
    return config
  },
  async viteFinal(config, { configType }) {
    if (process.env.NODE_ENV === 'production') {
      return mergeConfig(config, {
        base: '/LFUI-components/'
      })
    }
    return config
  }
}
