import { each } from '../../js/utils'

const radioButtonsExample = (context, selector) => {
  each(
    selector,
    function (el, index, list) {
      el.addEventListener('change', function (event) {
        for (const item of list) {
          const input = item.matches('input')
            ? item
            : item.querySelector('input')
          if (input.name !== event.target.name) continue
          item.classList.toggle('active', item === el)
        }
      })
    },
    context
  )
}

export { radioButtonsExample }
