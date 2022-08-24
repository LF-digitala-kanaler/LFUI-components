import PopoverTooltip from './popoverTooltip.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { popoverTooltipExample } from './popovertooltip'
import { html, uid } from '../../js/utils'

export default { title: 'Popover Tooltip' }

export const popoverTooltip = () => {
  const [id] = useState(uid)
  useEffect(() => {
    popoverTooltipExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${PopoverTooltip}</div>
  `
}
