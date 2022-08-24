import CheckboxCards from './checkboxCards.html?raw'
import Checkbox from './styledCheckbox.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { checkboxCardExample, intermediateCheckboxExample } from './checkbox'
import { html, uid } from '../../js/utils'

export default { title: 'Checkbox' }

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
