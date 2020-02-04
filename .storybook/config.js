
import '../src/scss/LFUI.scss';

import '../node_modules/eonasdan-bootstrap-datetimepicker'
import '../src/js/index.js';
import theme from './theme';
import { addDecorator, configure, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';


addDecorator(withA11y)

addParameters({
  backgrounds: [
    { name: 'White', value: '#ffffff', default: true },
    { name: 'Gray', value: '#222222' },
  ],
  options: {
    theme: theme,
  },
});
configure(require.context('../src', true, /\.stories\.js$/), module);


