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
  }
}
