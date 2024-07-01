import { uid } from '../../js/utils'

import OneLined from './oneLined.html?raw'
import SeveralLines from './severalLines.html?raw'

export default {
  title: 'Forms/Input Field',
  parameters: {
    backgrounds: { default: 'white' },
    badges: ['stable'],
    layout: 'centered'
  },
  argTypes: {}
}

function Template({
  placeholder,
  pattern,
  required,
  type = 'text',
  prepend,
  append,
  disabled,
  helpTextId = '',
  labelledBy = ''
}) {
  return `
    <div class="form-group">
      ${prepend || append ? '<div class="input-group">' : ''}
      ${
        prepend
          ? `<div class="input-group-prepend">
            <span class="input-group-text">${prepend}</span>
          </div>`
          : ''
      }
      <input
        type="${type}"
        class="form-control"
        id="${uid()}"
        aria-labelledby="${labelledBy}"
        aria-describedby="${helpTextId}"
        ${pattern ? `pattern="${pattern}"` : ''}
        ${placeholder ? `placeholder="${placeholder}"` : ''}
        ${required ? 'required' : ''}
        ${disabled ? 'disabled' : ''}
      >
      ${
        append
          ? `<div class="input-group-append">
            <span class="input-group-text" aria-hidden="true">${append}</span>
          </div>`
          : ''
      }
      ${prepend || append ? '</div>' : ''}
    </div>
  `
}

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  pattern: '',
  placeholder: 'Placeholder text',
  required: false,
  prepend: '',
  append: '',
  disabled: false
}

export const Pattern = Template.bind({})
Pattern.args = {
  pattern: '[0-9]{6,8}-?[0-9]{4}',
  placeholder: 'yyyymmdd-nnnn',
  required: true
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Password'
}

export const Prefix = Template.bind({})
Prefix.args = {
  type: 'text',
  placeholder: 'Username',
  prepend: '@'
}

export const PrefixImage = () => `
  <div class="form-group">
    <div class="input-group">
      <span class="input-group-prepend-reg"></span>
      <input type="text" required="" class="form-control" placeholder="ABC123" aria-describedby="reg1">
    </div>
  </div>
`

export const Suffix = Template.bind({})
Suffix.args = {
  type: 'text',
  append: 'kr'
}

export const oneLined = () => OneLined
export const severalLines = () => SeveralLines

export const SuffixFullExample = () => `
  <div class="form-group">
    <label id="amount-label" for="amount">Belopp<span class="sr-only"> i kronor</span></label>
    <div class="input-group">
        <input
            type="number"
            inputmode="numeric"
            class="form-control"
            id="amount"
            min="0"
            max="9000"
            aria-labelledby="amount-label amount-feedback"
            aria-describedby="amount-help"
            required
        >
        <div class="input-group-append">
            <span class="input-group-text" aria-hidden="true">kr</span>
        </div>
    </div>

    <div id="amount-feedback" aria-live="assertive"></div>
    <small id="amount-help" class="form-text text-muted">Mellan 0 till 9000</small>
  </div>
`
