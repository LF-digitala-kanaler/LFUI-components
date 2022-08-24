import Pagination from './pagination.html?raw'

import { useEffect, useState } from '@storybook/client-api'
import { paginationExample } from './pagination'
import { html, uid } from '../../js/utils'

export default { title: 'Pagination' }

export const pagination = () => {
  const [id] = useState(uid)
  useEffect(() => {
    paginationExample(document.getElementById(id))
  }, [])
  return html`
    <div id="${id}">${Pagination}</div>
  `
}
