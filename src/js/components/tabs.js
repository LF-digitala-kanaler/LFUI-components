import 'bootstrap/js/src/tab'
import { delegate } from '../utils'

document.addEventListener(
  'click',
  delegate('[data-tabs="overflow"] > .nav a', function onClick(event) {
    this.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'nearest'
    })
  })
)
