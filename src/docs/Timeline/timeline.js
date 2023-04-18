import { each } from '../../js/utils'

const EXPANDED_ATTR = 'aria-expanded'

const timelineExample = (context) => {
  if (!context) {
    return
  }

  each(
    '[data-bs-toggle="collapse:timeline"]',
    (el) => {
      const target = context.querySelector(el.dataset.bsTarget)
      const container = el.closest('.timeline-container')

      target.addEventListener('hide.bs.collapse', () => {
        container.classList.remove('is-open')
        el.setAttribute(EXPANDED_ATTR, 'false')
      })

      target.addEventListener('show.bs.collapse', () => {
        container.classList.add('is-open')
        el.setAttribute(EXPANDED_ATTR, 'true')
      })
    },
    context
  )
}

export { timelineExample }
