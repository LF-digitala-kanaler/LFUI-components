import { useEffect } from '@storybook/client-api'
import Datepicker from './datepicker.html?raw'
import Timepicker from './timepicker.html?raw'
import { datepickerExample } from './datepicker'

export default {
  title: 'Datepicker'
}

export const datepicker = () => {
  useEffect(datepickerExample, [])
  return Datepicker
}

export const timepicker = () => Timepicker
