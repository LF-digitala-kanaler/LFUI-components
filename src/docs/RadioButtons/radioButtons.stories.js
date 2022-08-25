import StyledRadioButtons from './styledRadioButtons.html?raw'
import ButtonGroup from './buttonGroup.html?raw'
import RadioCards from './radioCards.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { radioButtonsExample } from './radioButtons'
import { html, uid } from '../../js/utils'

export default { title: 'Radio Buttons' }

export const styledRadioButtons = () => StyledRadioButtons

export const buttonGroup = () => {
  const [id] = useState(uid)
  useEffect(() => {
    radioButtonsExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${ButtonGroup}</div>
  `
}

export const radioCards = () => {
  const [id] = useState(uid)
  useEffect(() => {
    radioButtonsExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${RadioCards}</div>
  `
}
