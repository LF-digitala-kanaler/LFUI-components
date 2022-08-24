import White from './white.html?raw'
import Blue from './blue.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { html, uid } from '../../js/utils'
import { navbarExample } from './navbar'

export default {
  title: 'Navbar',
  parameters: { backgrounds: { default: 'gray' } }
}

export const white = () => {
  const [id] = useState(uid)
  useEffect(() => {
    navbarExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${White}</div>
  `
}

export const blue = () => {
  const [id] = useState(uid)
  useEffect(() => {
    navbarExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Blue}</div>
  `
}
