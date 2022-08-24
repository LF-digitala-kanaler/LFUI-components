import Present from './present.html?raw'
import Compare from './comparative.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { tableExample } from './table'
import { html, uid } from '../../js/utils'

export default { title: 'Tables' }

export const present = () => {
  const [id] = useState(uid)
  useEffect(() => {
    tableExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Present}</div>
  `
}

export const compare = () => Compare
