module.exports = {
  plugins: [
    require('postcss-base64')({
      pattern: /<svg.*<\/svg>/i,
      prepend: 'data:image/svg+xml;base64,'
    }),
    require('postcss-flexbugs-fixes')({}),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 8',
        'safari >= 4'
      ]
    })
  ]
};
