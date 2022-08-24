import Responsive from './responsive.html?raw'
import Desktop from './desktop.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { priceBoxExample } from './pricebox'
import { html, uid } from '../../js/utils'

export default { title: 'Price box' }

export const desktop = () => Desktop

export const responsive = () => {
  const [id] = useState(uid)
  useEffect(() => {
    priceBoxExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Responsive}</div>
  `
}
