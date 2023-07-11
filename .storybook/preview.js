import '../src/scss/index.scss'
import '../src/js/index.js'
import './iframes.scss'
import './blocks/blocks.scss'

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'grey', value: '#F3F3F3' },
      { name: 'light blue', value: '#E5EFF7' }
    ]
  },
  badgesConfig: {
    beta: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#018786',
        color: '#018786',
      },
      title: 'Beta',
    },
    stable: {
      styles: {
        backgroundColor: '#DCF2EA',
        borderColor: '#317159',
        color: '#317159',
      },
      title: 'Beta',
    },
    deprecated: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#6200EE',
        color: '#6200EE',
      },
      title: 'Deprecated',
    },
  },
}
