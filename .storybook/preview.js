
import '../src/scss/DOCS.scss';


import 'eonasdan-custom-bootstrap-datetimepicker-with-bootstrap-4';
import '../src/js/index.js';
// addDecorator(withA11y)

export const parameters = {
  backgrounds: {
  default: 'white',
  values: [
    { name: 'white', value: '#ffffff' },
    { name: 'grey', value: '#F3F3F3' },
    {name: 'light blue', value: '#E5EFF7'}
    ],
  }
}