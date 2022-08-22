import Checkbox from './styledCheckbox.html?raw'
import CheckboxCards from './checkboxCards.html?raw'
import { useEffect } from '@storybook/client-api'
import { checkboxCardExample, intermediateCheckboxExample } from './checkbox'

export default { title: 'Checkbox' }

export const checkbox = () => {
  useEffect(intermediateCheckboxExample, [])
  return Checkbox
}

export const checkboxCard = () => {
  useEffect(checkboxCardExample, [])
  return CheckboxCards
}
