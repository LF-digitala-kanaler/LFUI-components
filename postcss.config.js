import url from 'postcss-url'
import autoprefixer from 'autoprefixer'

export default function config(props) {
  const plugins = [
    // Vite in lib mode will render `base` in place of relative assets.
    // Related issue:  https://github.com/vitejs/vite/issues/4454
    url({
      filter: '**/*.woff2',
      url({ url }) {
        return url.replace(/^base\//, './')
      }
    }),
    autoprefixer
  ]

  return { plugins }
}
