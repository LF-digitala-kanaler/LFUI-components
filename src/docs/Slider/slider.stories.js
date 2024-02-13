import Value from './value.html?raw';
import Intervall from './intervall.html?raw';
import { interval } from '../../js/components/interval';

import { useEffect, useState } from '@storybook/client-api';
import { html, uid } from '../../js/utils';
import { sliderExample } from './slider';

export default {
	title: 'Forms/Slider',
	parameters: {
		backgrounds: { default: 'white' },
		badges: ['stable'],
	},
	argTypes: {},
};

function initSlider(input) {
	input.addEventListener('input', function () {
		const percent = Math.ceil(((input.value - input.min) / (input.max - input.min)) * 100);

		input.style.setProperty('--progress', percent);
	});
}

function Template({ value = 0, labels, distributionLabel }) {
	const id = uid();

	useEffect(() => initSlider(document.getElementById(id)), [value, labels, distributionLabel]);

	return `
  <div class="row">
    <div class="col-12 mt-1 px-0">
  ${labels ? '<div class="slider-wrapper">' : ''}
  ${labels ? '<div class="slider-label-left">0 %</div>' : ''}
  ${distributionLabel ? '<div class="distribution-label slider-label-left">0 %</div>' : ''}
  <input
    id="${id}"
    type="range"
    name="lf-slider"
    class="lf-slider"
    list="tickmarks"
    value="${value}"
    min="0"
    max="100"
    style="--progress: ${value}"
    aria-controls="lf-slider-value-1"
  />
  ${labels ? '<div class="slider-label-right">100 %</div>' : ''}
  ${distributionLabel ? '<div class="distribution-label slider-label-right">100 %</div>' : ''}
  ${labels ? '</div>' : ''}
  </div>
  </div>
`;
}

function IntervalTemplate() {
	const id = uid();

	useEffect(() => interval(document.getElementById(id)), []);

	return `
  <div class="pos-relative">
    <input
      type="range"
      id="${id}"
      name="lf-interval"
      class="lf-slider"
      value="25,75"
      min="0"
      max="100" />
  </div>
  `;
}

export const Default = Template.bind({});
Default.args = {
	value: 50,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
	value: 50,
	labels: true,
};

export const WithDistributionLabel = Template.bind({});
WithDistributionLabel.args = {
	value: 50,
	distributionLabel: true,
};

export const Interval = IntervalTemplate.bind({});
Interval.args = {};

export const value = () => {
	const [id] = useState(uid);
	useEffect(() => {
		sliderExample(document.getElementById(id));
	}, []);
	return html`
  < div id = "${id}" > ${Value}</div >
    `;
};

export const intervall = () => {
	const [id] = useState(uid);
	useEffect(() => {
		sliderExample(document.getElementById(id));
	}, []);
	return html`
    < div id = "${id}" > ${Intervall}</div >
      `;
};
