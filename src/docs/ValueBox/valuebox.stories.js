import Valuebox from './valuebox.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { valueboxExample } from './valuebox'
import { html, uid } from '../../js/utils'

export default { title: 'Page content/Value box' }

export const valueBox = () => {
  const [id] = useState(uid)
  useEffect(() => {
    valueboxExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Valuebox}</div>
  `
}
