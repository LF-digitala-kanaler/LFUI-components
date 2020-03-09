module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    env: {
      
      test: {
        presets : ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["transform-es2015-modules-commonjs","require-context-hook"]
      },
      development: {
        plugins: ["transform-es2015-modules-commonjs"]
      }
    }
  };
}
