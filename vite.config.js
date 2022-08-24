import { resolve } from 'path'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
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
