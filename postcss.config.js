module.exports = config

function config (props) {
  return {
    plugins: [
      require('postcss-base64')({
        pattern: /<svg.*<\/svg>/i,
        prepend: 'data:image/svg+xml;base64,'
      }),
      require('autoprefixer')
    ]
  }
}
