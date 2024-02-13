module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
			rules: {
				indent: 'off',
				'space-before-function-paren': 'off',
				'generator-star-spacing': 'off',
				'yield-star-spacing': 'off',
				'no-unexpected-multiline': 'off',
				'multiline-ternary': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['storybook-static', 'static', 'test-results'],
	rules: {},
};
