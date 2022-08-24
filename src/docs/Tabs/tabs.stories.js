import InPage from './InPageNavigation.html?raw'
import PageLevel from './PageLevelNavigation.html?raw'

export default {
  title: 'Tabs',
  parameters: { backgrounds: { default: 'gray' } }
}

export const inPage = () => InPage
export const pageLevel = () => PageLevel
