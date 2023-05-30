import Multiple from './multiple.html?raw'
import Single from './single.html?raw'
import { useEffect, useState } from '@storybook/client-api'
import { selectExample } from './select'
import { html, uid, storyWrapper } from '../../js/utils'

export default {
  title: 'Forms/Select',
  parameters: { backgrounds: { default: 'white' } }
}

export const single = storyWrapper(() => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Single}</div>
  `
})

export const multiple = storyWrapper(() => {
  const [id] = useState(uid)
  useEffect(() => selectExample(document.getElementById(id)), [])
  return html`
    <div id="${id}">${Multiple}</div>
  `
})
