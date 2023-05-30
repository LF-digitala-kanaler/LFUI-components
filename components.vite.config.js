import { mergeConfig } from 'vite'
import { resolve } from 'path'

export default mergeConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  },
  build: {
    // minify: false,
    minifyIdentifiers: false,
    lib: {
      entry: [
        resolve(__dirname, 'src/js/components/monthpicker.jsx'),
        resolve(__dirname, 'src/js/components/datepicker.js'),
        resolve(__dirname, 'src/js/components/interval.js'),
        resolve(__dirname, 'src/js/components/select.js'),
        resolve(__dirname, 'src/js/components/alert.js'),
        resolve(__dirname, 'src/js/components/buttons.js'),
        resolve(__dirname, 'src/js/components/collapse.js'),
        resolve(__dirname, 'src/js/components/custom-file.js'),
        resolve(__dirname, 'src/js/components/dropdown.js'),
        resolve(__dirname, 'src/js/components/effects.js'),
        resolve(__dirname, 'src/js/components/focus.js'),
        resolve(__dirname, 'src/js/components/modal.js'),
        resolve(__dirname, 'src/js/components/tables.js'),
        resolve(__dirname, 'src/js/components/tabs.js'),
        resolve(__dirname, 'src/js/components/timeline.js')
      ],
      formats: ['es'],
      fileName(format, name) {
        return `${name}.${format}.js`
      }
    },
    outDir: 'dist/components'
  }
})
