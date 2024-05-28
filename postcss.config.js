const autoprefixer = require('autoprefixer')
const increaseSpecificity = require('postcss-increase-specificity')

module.exports = config

function config (props) {
  const plugins = [
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
