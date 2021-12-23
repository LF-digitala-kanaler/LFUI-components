import { paginationExample } from './pagination'
import Pagination from './pagination.html'
import { useEffect } from '@storybook/client-api'

export default { title: 'Pagination' }

export const pagination = () => {
  useEffect(() => {
    paginationExample()
  }, [])
  return Pagination
}
