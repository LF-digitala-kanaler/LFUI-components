import Checkbox from './styledCheckbox.html'
import CheckboxCards from './checkboxCards.html'
import { useEffect } from '@storybook/client-api'
import { checkboxCardExample } from './checkbox'

export default { title: 'Checkbox' }

export const checkbox = () => `${Checkbox}`

export const checkboxCard = () => {
  useEffect(() => {
    checkboxCardExample()
  }, [])
  return CheckboxCards
}
