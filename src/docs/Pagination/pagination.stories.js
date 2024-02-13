import Pagination from './pagination.html?raw';

import { useEffect, useState } from '@storybook/client-api';
import { paginationExample } from './pagination';
import { html, uid } from '../../js/utils';

export default {
	title: 'Navigations/Pagination',
	parameters: {
		backgrounds: { default: 'gray' },
		badges: ['stable'],
	},
	argTypes: {},
};

function Template({ flex, flexSmall }) {
	return `
  <nav aria-label="Pagination Navigation">
    <ul class="pagination ${flex ? 'pagination-flex' : ''} ${
		flexSmall ? 'pagination-sm-flex' : ''
	}">
      <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">1</a></li>
      <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 1">2</a></li>
      <li class="page-item active"><a aria-label="Current Page, Page 3" href="#" class="page-link" aria-current="true">3</a></li>
      <li class="page-item"><a href="#" class="page-link" aria-label="Goto Page 4">4</a></li>
    </ul>
  </nav>
  `;
}

function TemplateNoLinks() {
	return `
  <ul class="pagination pagination-static">
    <li class="page-item"><span class="page-link">1</span></li>
    <li class="page-item"><span class="page-link">2</span></li>
    <li class="page-item active"><span class="page-link">3</span></li>
    <li class="page-item"><span class="page-link">4</span></li>
  </ul>
  `;
}

export const Default = Template.bind({});
Default.args = {};

export const Stretchy = Template.bind({});
Stretchy.args = {
	flex: true,
};

export const StretchySmallScreen = Template.bind({});
StretchySmallScreen.args = {
	flexSmall: true,
};

export const NoInteractive = TemplateNoLinks.bind({});
NoInteractive.args = {};

export const Example = () => {
	const [id] = useState(uid);
	useEffect(() => {
		paginationExample(document.getElementById(id));
	}, []);
	return html`
		<div id="${id}">${Pagination}</div>
	`;
};
