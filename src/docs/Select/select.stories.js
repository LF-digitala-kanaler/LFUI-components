import Multiple from './multiple.html?raw'
import Single from './single.html?raw'
import { selectExample } from './select'
import { useEffect } from '@storybook/client-api'

export default { title: 'Select' }

export const single = () => {
  useEffect(selectExample, [])
  return Single
}

export const multiple = () => {
  useEffect(selectExample, [])
  return Multiple
}
