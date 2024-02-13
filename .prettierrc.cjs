module.exports = {
	printWidth: 100,
	htmlWhitespaceSensitivity: 'ignore',
	singleQuote: true,
	overrides: [
		{
			files: ['**/*.css', '**/*.scss', '**/*.html'],
			options: {
				singleQuote: false,
			},
		},
	],
};
