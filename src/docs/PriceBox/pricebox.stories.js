import ResponsiveTop from './responsive-top.html?raw'
import ResponsiveBottom from './responsive-bottom.html?raw'
import Desktop from './desktop.html?raw'

export default {
  title: 'Page content/Price box',
  parameters: { backgrounds: { default: 'gray' } }
}

export const desktop = () => Desktop
export const responsiveTop = () => ResponsiveTop
export const responsiveBottom = () => ResponsiveBottom
