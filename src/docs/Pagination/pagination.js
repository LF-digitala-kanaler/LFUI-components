import { each } from '../../js/utils'

const paginationExample = (context) => {
  if (!context) { return }
  each(
    '.pagination a',
    (el, index, list) => {
      el.addEventListener('click', function (event) {
        for (const link of list) {
          if (link === el) continue
          link.setAttribute('aria-current', 'false')
          link.parentElement.classList.remove('active')
        }
        el.setAttribute('aria-current', 'true')
        el.parentElement.classList.add('active')
        event.preventDefault()
      })
    },
    context
  )
}

export { paginationExample }
