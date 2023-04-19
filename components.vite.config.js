import { mergeConfig } from 'vite'
import { resolve } from 'path'

export default mergeConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/js/components/monthpicker.jsx'),
        resolve(__dirname, 'src/js/components/datepicker.js'),
        resolve(__dirname, 'src/js/components/interval.js'),
        resolve(__dirname, 'src/js/components/select.js')
      ],
      formats: ['es'],
      fileName(format, name) {
        return `${name}.${format}.js`
      }
    },
    outDir: 'dist/components'
  }
})
