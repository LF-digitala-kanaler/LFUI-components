import { each } from '../../js/utils'

const paginationExample = (context) => {
  each(
    '.pagination:not(.pagination-static) a',
    (el) => {
      el.addEventListener('click', function (event) {
        each('.pagination:not(.pagination-static) .page-item', (item) =>
          item.classList.remove('active')
        )
        this.parentElement.classList.add('active')
        event.preventDefault()
      })
    },
    context
  )
}

export { paginationExample }
