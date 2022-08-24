import { each } from '../../js/utils'

const checkboxCardExample = (context) => {
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
  context.querySelector('#checkbox-intermediate').indeterminate = true
}

export { checkboxCardExample, intermediateCheckboxExample }
