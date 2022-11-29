import Datepicker from './datepicker.html?raw'
import Timepicker from './timepicker.html?raw'
import Monthpicker from './monthpicker.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { monthpickerExample } from './monthpicker.js'
import { datepickerExample } from './datepicker.js'
import { html, uid } from '../../js/utils.js'

export default {
  title: 'Datepicker'
}

export const datepicker = () => {
  const [id] = useState(uid)
  useEffect(() => datepickerExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Datepicker}</div>
  `
}

export const timepicker = () => Timepicker

export const monthpicker = () => {
  const [id] = useState(uid)
  useEffect(() => monthpickerExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Monthpicker}</div>
  `
}
