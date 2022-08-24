import Value from './value.html?raw'
import Intervall from './intervall.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { html, uid } from '../../js/utils'
import { sliderExample } from './slider'

export default { title: 'Slider' }

export const value = () => {
  const [id] = useState(uid)
  useEffect(() => {
    sliderExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Value}</div>
  `
}
export const intervall = () => {
  const [id] = useState(uid)
  useEffect(() => {
    sliderExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Intervall}</div>
  `
}
