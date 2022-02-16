import Multiple from './multiple.html'
import Single from './single.html'
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
