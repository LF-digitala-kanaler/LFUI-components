import { addParameters, addDecorator } from '@storybook/html';
import '../src/scss/LFUI.scss';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../node_modules/eonasdan-bootstrap-datetimepicker'
import '../src/js/index.js';
addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'body-bg', value: '#f3f3f3' },
    { name: 'baby', value: '#badaf3'}
  ],
});

