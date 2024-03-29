import url from 'postcss-url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import autoprefixer from 'autoprefixer'
import preact from '@preact/preset-vite'

export default defineConfig({
  assetsInclude: ['**/*.css'],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  },
  plugins: [
    preact(),
    copy({
      hook: 'writeBundle',
      targets: [
        {
          src: './node_modules/@lansforsakringar/fonts/*.woff2',
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
