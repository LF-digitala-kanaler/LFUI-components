import OneLined from './oneLined.html?raw'
import SeveralLines from './severalLines.html?raw'

import { inputFieldExample } from './inputField'
import { useEffect } from '@storybook/client-api'

export default { title: 'Input Field' }

export const oneLined = () => {
  useEffect(() => {
    inputFieldExample()
  }, [])
  return OneLined
}
export const severalLines = () => {
  useEffect(() => {
    inputFieldExample()
  }, [])
  return SeveralLines
}
