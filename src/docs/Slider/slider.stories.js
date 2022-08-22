import Value from './value.html?raw'
import Intervall from './intervall.html?raw'
import { sliderExample } from './slider'
import { useEffect } from '@storybook/client-api'

export default { title: 'Slider' }

export const value = () => {
  useEffect(() => {
    sliderExample()
  }, [])
  return Value
}
export const intervall = () => {
  useEffect(() => {
    sliderExample()
  }, [])
  return Intervall
}
