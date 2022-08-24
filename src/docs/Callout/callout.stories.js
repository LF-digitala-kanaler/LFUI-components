import Callout from './callout.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { calloutExample } from './callout'
import { html, uid } from '../../js/utils'

export default { title: 'Callout' }

export const callout = () => {
  const [id] = useState(uid)
  useEffect(() => {
    calloutExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Callout}</div>
  `
}
