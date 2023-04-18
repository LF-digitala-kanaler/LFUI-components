import Responsive from './responsive.html?raw'
import Desktop from './desktop.html?raw'

export default {
  title: 'Page content/Price box',
  parameters: { backgrounds: { default: 'gray' } }
}

export const desktop = () => Desktop
export const responsive = () => Responsive
