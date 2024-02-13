import CalloutExampleMarkup from './callout.html?raw';

import { useEffect, useState } from '@storybook/client-api';
import { calloutExample } from './callout';
import { html, uid } from '../../js/utils';

export default {
	title: 'Page content/Callout',
	parameters: {
		backgrounds: { default: 'gray' },
		badges: ['stable'],
	},
};

function Template({ title, text }) {
	const id = uid();

	useEffect(() => {
		calloutExample(document.getElementById(id));
	}, []);

	return `
  <aside id="${id}" class="callout">
    <div class="callout-figure">
      <svg data-draw="" width="27px" height="27px" viewBox="0 0 27 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <polyline id="Path-2656" fill="none" stroke-width="4" stroke="#E30613" points="3 27 3 3 27 3"></polyline>
      </svg>
    </div>
    <h3 class="callout-title">${title}</h3>
    <p class="callout-text">
      ${text}
    </p>
  </aside>
  `;
}

export const Callout = Template.bind({});
Callout.args = {
	title: 'The more you know…',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc augue, porta eu molestie id, rhoncus eu risus. Etiam rhoncus vitae libero vulputate ornare. Praesent urna mauris, egestas sed lacinia vitae, tincidunt id turpis.',
};

export const calloutExamples = () => {
	const [id] = useState(uid);
	useEffect(() => {
		calloutExample(document.getElementById(id));
	}, []);
	return html`
		<div id="${id}">${CalloutExampleMarkup}</div>
	`;
};
