import { each } from '../../js/utils'

const checkboxCardExample = (context) => {
  if (!context) {
    return
  }
  each(
    '.checkbox-card',
    function (el) {
      el.addEventListener('change', function () {
        if (!this.classList.contains('active')) {
          this.classList.add('active')
        } else {
          this.classList.remove('active')
        }
      })
    },
    context
  )
}

const intermediateCheckboxExample = (context) => {
  if (!context) {
    return
  }
  const input = context.querySelector('#checkbox-intermediate')
  if (input) input.indeterminate = true
}

export { checkboxCardExample, intermediateCheckboxExample }
