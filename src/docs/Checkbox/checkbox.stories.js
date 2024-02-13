import CheckboxCards from './checkboxCards.html?raw'
import Checkbox from './styledCheckbox.html?raw'

import { html, uid } from '../../js/utils'
import { useEffect, useState } from '@storybook/client-api'
import {
  checkboxCardExample,
  intermediateCheckboxExample
} from './checkbox'

export default {
  title: 'Forms/Checkboxes/Checkbox',
  parameters: {
    backgrounds: { default: 'gray' },
    badges: ['stable']
  },
  argTypes: {
  }
}

function checkboxTemplate({ label, disabled, checked, indeterminate }) {
  const [id] = useState(uid)
  useEffect(() => {
    const input = document.getElementById(id)
    if (indeterminate && input) {
      input.indeterminate = true
    }
  })

  return `
    <div class="custom-control custom-checkbox mr-1">
      <input
        type="checkbox"
        class="custom-control-input"
        id="${id}"
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
    >
      <label class="custom-control-label" for="${id}">${label}</label>
    </div>
  `
}

export const CheckboxDefault = checkboxTemplate.bind({})
CheckboxDefault.args = {
  label: 'Checkbox',
  checked: false,
  disabled: false,
  indeterminate: false
}

export const Disabled = checkboxTemplate.bind({})
Disabled.args = {
  label: 'Disabled checkbox',
  disabled: true,
}

export const Checked = checkboxTemplate.bind({})
Checked.args = {
  label: 'Checked checkbox',
  checked: true,
}

export const Indeterminate = checkboxTemplate.bind({})
Indeterminate.args = {
  label: 'Indeterminate checkbox',
  indeterminate: true
}

export const checkbox = () => {
  const [id] = useState(uid)
  useEffect(() => intermediateCheckboxExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Checkbox}</div>
  `
}

export const checkboxCard = () => {
  const [id] = useState(uid)
  useEffect(() => checkboxCardExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${CheckboxCards}</div>
  `
}
