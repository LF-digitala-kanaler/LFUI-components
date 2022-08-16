import { useEffect } from '@storybook/client-api'
import Datepicker from './datepicker.html'
import Timepicker from './timepicker.html'
import { datepickerExample } from './datepicker'

export default {
  title: 'Datepicker'
}

export const datepicker = () => {
  useEffect(datepickerExample, [])
  return Datepicker
}

export const timepicker = () => `${Timepicker}`
