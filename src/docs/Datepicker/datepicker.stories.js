import Datepicker from './datepicker.html?raw'
import Timepicker from './timepicker.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { datepickerExample } from './datepicker'
import { html, uid } from '../../js/utils'

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
