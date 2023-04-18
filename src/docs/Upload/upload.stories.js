import Upload from './upload.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { uploadExample } from './upload'
import { html, uid } from '../../js/utils'

export default { title: 'Forms/Upload' }

export const upload = () => {
  const [id] = useState(uid)
  useEffect(() => {
    uploadExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Upload}</div>
  `
}
