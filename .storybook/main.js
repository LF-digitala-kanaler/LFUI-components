import url from 'postcss-url'
import { mergeConfig } from 'vite'
import autoprefixer from 'autoprefixer'

export default {
  logLevel: 'debug',
  stories: ['../src/docs/**/*.mdx', '../src/docs/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [
    {
      from: '../node_modules/@lansforsakringar/icons/dist',
      to: 'lf-icons'
    },
    {
      from: '../node_modules/@lansforsakringar/fonts',
      to: 'fonts'
    },
    {
      from: '../test-fonts',
      to: 'test-fonts'
    }
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm'
  ],
  managerWebpack: async (config, options) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = '/LFUI-components/'
    }
    return config
  },
  async viteFinal(config, { configType }) {
    if (process.env.NODE_ENV === 'development') {
      return mergeConfig(config, {
        resolve: {
          alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat'
          }
        },
        css: {
          postcss: {
            plugins: [
              // Vite in lib mode will render `base` in place of relative assets
              // so we have to rewrite it to relative to the static dirs
              // Related issue:  https://github.com/vitejs/vite/issues/4454
              // url({
              //   filter: '**/*.woff2',
              //   url({ url }) {
              //     return url.replace(/^base\//, './')
              //   }
              // })
            ]
          }
        }
      })
    }
    return mergeConfig(config, {
      resolve: {
        alias: {
          react: 'preact/compat',
          'react-dom': 'preact/compat'
        }
      },
      base: '/LFUI-components/',
      css: {
        postcss: {
          plugins: [
            // Vite in lib mode will render `base` in place of relative assets
            // so we have to rewrite it to relative to the static dirs
            // Related issue:  https://github.com/vitejs/vite/issues/4454
            // url({
            //   filter: '**/*.woff2',
            //   url({ url }) {
            //     return url.replace(/^base/, '/LFUI-components')
            //   }
            // }),
            autoprefixer
          ]
        }
      }
    })
  },
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  docs: {}
}
