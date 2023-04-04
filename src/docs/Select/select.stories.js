import Multiple from './multiple.html?raw'
import Single from './single.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { selectExample } from './select'
import { html, uid } from '../../js/utils'

export default { title: 'Forms/Select' }

export const single = () => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Single}</div>
  `
}

export const multiple = () => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Multiple}</div>
  `
}
