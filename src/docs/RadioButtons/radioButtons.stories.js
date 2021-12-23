
import StyledRadioButtons from './styledRadioButtons.html'
import ButtonGroup from './buttonGroup.html'
import RadioCards from './radioCards.html'

import { useEffect } from '@storybook/client-api'
import { radioButtonsExample } from './radioButtons'

export default { title: 'Radio Buttons' }

export const styledRadioButtons = () => `${StyledRadioButtons}`
export const buttonGroup = () => `${ButtonGroup}`

export const radioCards = () => {
  useEffect(() => {
    radioButtonsExample()
  }, [])
  return RadioCards
}
