import LineTabs from './LineTabs.html?raw'
import ContainedTabs from './ContainedTabs.html?raw'

export default {
  title: 'Navigations/Tabs',
  parameters: { backgrounds: { default: 'gray' } }
}

export const lineTabs = () => LineTabs
export const containedTabs = () => ContainedTabs
