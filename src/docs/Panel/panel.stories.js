import AlwaysOpen from './alwaysOpen.html?raw'
import CollapseExpand from './collapseExpand.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { panelExample } from './panel'
import { html, uid } from '../../js/utils'

export default {
  title: 'Panel',
  parameters: { backgrounds: { default: 'gray' } }
}

export const alwaysOpen = () => AlwaysOpen

export const collapseExpand = () => {
  const [id] = useState(uid)
  useEffect(() => {
    panelExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${CollapseExpand}</div>
  `
}
