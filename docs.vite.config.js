import url from 'postcss-url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import preact from '@preact/preset-vite';
import increaseSpecificity from 'postcss-increase-specificity';

export default defineConfig({
	define: {
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
	},
	plugins: [
		preact(),
		copy({
			hook: 'writeBundle',
			targets: [
				{ src: ['src/docs/**/*', '!**/*.js'], dest: 'dist/docs/html/' },
				{ src: 'src/data/componentsStatus.json', dest: 'dist/docs/data/' },
				{
					src: './node_modules/@lansforsakringar/icons/dist/**/*',
					dest: 'dist/docs/lf-icons/',
				},
				{
					src: './node_modules/@lansforsakringar/fonts/*.woff2',
					dest: 'dist/docs/fonts',
				},
			],
		}),
	],
	css: {
		postcss: {
			plugins: [
				// Vite in lib mode will render `base` in place of relative assets so we
				// have to rewrite it to relative to the copied files
				// Related issue:  https://github.com/vitejs/vite/issues/4454
				url({
					filter: '**/*.woff2',
					url({ url }) {
						return url.replace(/^base\//, './');
					},
				}),
				increaseSpecificity({
					repeat: 1,
					stackableRoot: '.lfui-theme',
				}),
				autoprefixer,
			],
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/docs/index.js'),
			name: 'DOCS',
			fileName(format) {
				return `main.${format}.js`;
			},
			formats: ['umd'],
		},
		outDir: 'dist/docs',
	},
});
