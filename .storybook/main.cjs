const inject = require('@rollup/plugin-inject')
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
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        inject({
          $: 'jquery',
          jQuery: 'jquery',
          exclude: '**/*.scss'
        })
      ]
    })
  }
}
