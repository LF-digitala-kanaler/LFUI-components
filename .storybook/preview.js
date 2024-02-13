import '../src/scss/index.scss';
import '../src/js/index.js';
import './iframes.scss';
import './blocks/blocks.scss';

export const parameters = {
	backgrounds: {
		default: 'white',
		values: [
			{ name: 'white', value: '#ffffff' },
			{ name: 'gray', value: '#F3F3F3' },
			{ name: 'light blue', value: '#E5EFF7' },
		],
	},
};

const backgroundClass = {
	gray: 'bg-body-bg',
	white: '',
	'light blue': '',
};

function getThemeColor(theme) {
	const color = parameters.backgrounds.values.find(({ name }) => name === theme);

	return color;
}

function getThemeName(color) {
	if (!color) return undefined;

	const returning = parameters.backgrounds.values.find(({ value }) => value === color.value);
	return returning;
}

const withThemeProvider = (Story, context) => {
	const theme =
		getThemeName(context.globals.backgrounds)?.name || context.parameters.backgrounds.default;
	const backgroundColor = getThemeColor(theme);

	document.body.style.backgroundColor = backgroundColor;

	return `
  <div class="${backgroundClass[backgroundColor.name]} p-2" data-bs-theme="on-${
		backgroundColor.name
	}">
   ${Story(context)}
   </div>
  `;
};

export const decorators = [withThemeProvider];
