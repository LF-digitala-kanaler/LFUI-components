import { delegate } from '../utils'
export { default as Tab } from 'bootstrap5/js/src/tab'

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
