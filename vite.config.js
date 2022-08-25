import url from 'postcss-url'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import { resolve, dirname } from 'path'
import autoprefixer from 'autoprefixer'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  assetsInclude: ['**/*.css'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      )
    }),
    copy({
      hook: 'writeBundle',
      targets: [
        {
          src: './node_modules/@lf-digitala-kanaler/fonts/*.woff2',
          dest: 'dist/lfui/fonts'
        }
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [
        // Vite in lib mode will render `base` in place of relative assets so we
        // have to rewrite it to relative to the copied files
        // Related issue:  https://github.com/vitejs/vite/issues/4454
        url({
          filter: '**/*.woff2',
          url({ url }) {
            return url.replace(/^base\//, './')
          }
        }),
        autoprefixer
      ]
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'LFUI',
      fileName(format) {
        return `main.${format}.js`
      },
      formats: ['umd', 'es']
    },
    outDir: 'dist/lfui'
  }
})
