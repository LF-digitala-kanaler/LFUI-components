import markup from './dropdown.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { a11yDropdownExample } from './dropdown'
import { html, uid } from '../../js/utils'

export default { title: 'Dropdown' }

export const single = () => {
  const [id] = useState(uid)
  useEffect(() => a11yDropdownExample(document.getElementById(id)), [])
  return `
    <div id="${id}">${markup}</div>
  `
}
