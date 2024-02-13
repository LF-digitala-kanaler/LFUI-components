export default {
	title: 'System display/Progress Bar',
	parameters: {
		badges: ['stable'],
	},
	argTypes: {
		progress: {
			control: 'range',
		},
	},
};

function Template({ progress = 0 }) {
	return `
    <div class="progress mb-1">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: ${progress}%"
        aria-valuenow="${progress}"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="text-right progress-text mb-1" id="example-caption-1">${progress}%</div>
  `;
}

export const Default = Template.bind({});
Default.args = {
	progress: 25,
};
