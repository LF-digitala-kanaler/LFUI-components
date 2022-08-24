import Alerting from './alerting.html?raw'
import LandingPage from './landingPage.html?raw'
import Navigational from './navigational.html?raw'

export default {
  title: 'Shortcut',
  parameters: { backgrounds: { default: 'gray' } }
}

export const landingPage = () => LandingPage
export const alerting = () => Alerting
export const navigational = () => Navigational
