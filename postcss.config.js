module.exports = {
  plugins: [
    require('postcss-base64')({
      pattern: /<svg.*<\/svg>/i,
      prepend: 'data:image/svg+xml;base64,'
    }),
    require('postcss-flexbugs-fixes')({}),
  ]
};
