import { resolve } from 'path'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import autoprefixer from 'autoprefixer'
import replace from '@rollup/plugin-replace'
import increaseSpecificity from 'postcss-increase-specificity'

export default defineConfig({
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      )
    }),
    copy({
      hook: 'writeBundle',
      targets: [
        { src: ['src/docs/**/*', '!**/*.js'], dest: 'dist/docs/html/' },
        { src: 'src/data/componentsStatus.json', dest: 'dist/docs/data/' },
        {
          src: './node_modules/@lf-digitala-kanaler/lfui-icons/dist/**/*',
          dest: 'dist/docs/lf-icons/'
        }
      ]
    })
  ],
  css: {
    postcss: {
      plugins: [
        increaseSpecificity({
          repeat: 1,
          stackableRoot: '.lfui-theme'
        }),
        autoprefixer
      ]
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/docs/index.js'),
      name: 'DOCS',
      fileName(format) {
        return `main.${format}.js`
      },
      formats: ['umd']
    },
    outDir: 'dist/docs'
  }
})
