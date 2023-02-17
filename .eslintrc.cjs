module.exports = {
  extends: ['standard', 'plugin:storybook/recommended'],
  rules: {
    indent: 'off',
    'space-before-function-paren': 'off',
    'generator-star-spacing': 'off',
    'yield-star-spacing': 'off',
    'no-unexpected-multiline': 'off',
    'multiline-ternary': 'off'
  },
  ignorePatterns: ['dist', 'static', 'node_modules']
};