import Desktop from './desktop.html?raw'
import Responsive from './responsive.html?raw'
import { useEffect } from '@storybook/client-api'
import { priceBoxExample } from './pricebox'

export default { title: 'Price box' }

export const desktop = () => Desktop

export const responsive = () => {
  useEffect(() => {
    priceBoxExample()
  }, [])
  return Responsive
}
