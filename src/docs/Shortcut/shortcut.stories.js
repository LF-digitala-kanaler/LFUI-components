import LandingPage from './landingPage.html?raw'
import Navigational from './navigational.html?raw'

export default {
  title: 'Shortcut',
  parameters: { backgrounds: { default: 'gray' } }
}

export const landingPage = () => LandingPage
export const navigational = () => Navigational
