import Timeline from './timeline.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { timelineExample } from './timeline'
import { html, uid } from '../../js/utils'

export default {
  title: 'Page content/Timeline',
  parameters: { backgrounds: { default: 'gray' } }
}

export const timeline = () => {
  const [id] = useState(uid)
  useEffect(() => {
    timelineExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Timeline}</div>
  `
}
