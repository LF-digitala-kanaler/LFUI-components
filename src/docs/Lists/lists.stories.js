import BulletsMarkup from './bullets.html?raw'
import CheckmarksMarkup from './checkmarks.html?raw'
import NumbersMarkup from './numbers.html?raw'
import LinkListsMarkup from './linkLists.html?raw'

export default {
  title: 'Typography & text/Lists',
  parameters: {
    badges: ['stable']
  }
}

export const Numbers = () => NumbersMarkup
export const Checkmarks = () => CheckmarksMarkup
export const Bullets = () => BulletsMarkup
export const LinkLists = () => LinkListsMarkup
