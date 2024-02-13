import { useEffect, useState } from '@storybook/client-api';
import { valueboxExample } from './valuebox';
import { uid } from '../../js/utils';

export default {
	title: 'Page content/Value box',
	parameters: {
		badges: ['stable'],
	},
};

export const Default = () => {
	const [id] = useState(uid);
	useEffect(() => {
		valueboxExample(document.getElementById(id));
	}, []);
	return `
  <div class="row" >
    <div class="col-md-4">
      <div class="value-box mb-1" id="${id}">
        <div class="value-box-heading">Spending account</div>
        <svg class="h1 value-box-text" fill="currentcolor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            30 470 kr
          </text>
        </svg>
      </div>
    </div>
  </div>
  `;
};

export const Expandable = () => {
	const [id] = useState(uid);
	useEffect(() => {
		valueboxExample(document.getElementById(id));
	}, []);
	return `
  <div class="row" id="${id}">
    <div class="col-md-4">
      <div class="value-box">
        <button class="value-box-heading collapsed" type="button" data-bs-target="#value-box-info" aria-controls="value-box-info" data-bs-toggle="collapse" aria-expanded="false">
          Account summary<span class="value-box-toggle"></span>
        </button>
        <div class="value-box-collapse collapse" id="value-box-info" aria-expanded="false">
          <div class="value-box-body">
            Forage pitchfork mumblecore, post-ironic bushwick banh mi ramps cronut. Meggings locavore banjo aesthetic, blue bottle you probably haven't heard of them cronut ethical +1 marfa 90's raw denim yuccie occupy DIY.
          </div>
        </div>
        <svg class="h1 value-box-text" fill="currentcolor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            130 470 kr
          </text>
        </svg>
      </div>
    </div>
  </div>
  `;
};
