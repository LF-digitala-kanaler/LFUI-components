const base64 = require('postcss-base64')
const autoprefixer = require('autoprefixer')
const increaseSpecificity = require('postcss-increase-specificity')

module.exports = config

function config (props) {
  const plugins = [
    base64({
      pattern: /<svg.*<\/svg>/i,
      prepend: 'data:image/svg+xml;base64,'
    }),
    autoprefixer
  ]

  if (/DOCS\.scss$/.test(props.file)) {
    plugins.push(
      increaseSpecificity({
        repeat: 1,
        stackableRoot: '.lfui-theme'
      })
    )
  }

  return { plugins }
}
