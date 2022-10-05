const url = require('postcss-url')
const { mergeConfig } = require('vite')
const autoprefixer = require('autoprefixer')
const { dirname, resolve } = require('path')

module.exports = {
  logLevel: 'debug',
  stories: ['../src/docs/**/*.stories.js'],
  staticDirs: [
    {
      from: '../node_modules/@lansforsakringar/icons/dist',
      to: 'lf-icons'
    },
    {
      from: '../node_modules/@lansforsakringar/fonts',
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
    if (process.env.NODE_ENV === 'development') {
      return mergeConfig(config, {
        css: {
          postcss: {
            plugins: [
              // Vite in lib mode will render `base` in place of relative assets
              // so we have to rewrite it to relative to the static dirs
              // Related issue:  https://github.com/vitejs/vite/issues/4454
              url({
                filter: '**/*.woff2',
                url({ url }) {
                  return url.replace(/^base\//, './')
                }
              })
            ]
          }
        }
      })
    }

    return mergeConfig(config, {
      base: '/LFUI-components/',
      css: {
        postcss: {
          plugins: [
            // Vite in lib mode will render `base` in place of relative assets
            // so we have to rewrite it to relative to the static dirs
            // Related issue:  https://github.com/vitejs/vite/issues/4454
            url({
              filter: '**/*.woff2',
              url({ url }) {
                return url.replace(/^base/, '/LFUI-components')
              }
            }),
            autoprefixer
          ]
        }
      }
    })
  }
}
