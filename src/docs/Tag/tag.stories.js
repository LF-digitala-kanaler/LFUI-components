export default {
	title: 'System display/Tag',
	parameters: {
		badges: ['stable'],
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'info', 'success', 'warning', 'danger'],
			mapping: {
				default: '',
			},
		},
	},
};

function Template({ text, large, variant, closable }) {
	const modifiers = [];

	if (large) {
		modifiers.push('tag-lg');
	}

	if (variant) {
		modifiers.push(`tag-${variant}`);
	}

	const closeButton = closable
		? '<button type="button" class="btn-close" aria-label="Close"></button>'
		: '';

	return `
    <div class="mt-05 tag ${modifiers.join(' ')}">
      ${text}
      ${closeButton}
    </div>
  `;
}

export const Default = Template.bind({});
Default.args = {
	text: 'Awating signature',
	variant: 'default',
	closable: false,
	large: false,
};

export const Variants = () => `
  ${Template({ text: 'Awaiting signature' })}
  ${Template({ text: 'Not signed', variant: 'info' })}
  ${Template({ text: 'Signed and ready', variant: 'success' })}
  ${Template({ text: 'Please note...', variant: 'warning' })}
  ${Template({ text: 'Contains errors', variant: 'danger' })}
`;

export const WithRemoveAction = () => `
  <div class="tag mt-05">
    Awaiting signature
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-info mt-05">
    Not signed
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-success mt-05">
    Signed and ready
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-warning mt-05">
    Please note…
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-danger mt-05">
    Contains errors
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
`;

export const Larger = () => `
  <div class="tag tag-lg mt-05">Awaiting signature</div>
  <div class="tag tag-lg tag-info mt-05">Not signed</div>
  <div class="tag tag-lg tag-success mt-05">Signed and ready</div>
  <div class="tag tag-lg tag-warning mt-05">Please note…</div>
  <div class="tag tag-lg tag-danger mt-05">Contains errors</div>
`;

export const LargeWithRemoveAction = () => `
  <div class="tag tag-lg mt-05">
    Awaiting signature
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-info mt-05">
    Not signed
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-success mt-05">
    Signed and ready
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-warning mt-05">
    Please note…
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <div class="tag tag-lg tag-danger mt-05">
    Contains errors
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
`;
