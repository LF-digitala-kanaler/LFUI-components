import { each } from '../../js/utils'

const priceBoxExample = (context) => {
  each(
    '.price-box-bottom',
    (el) => {
      el.addEventListener('click', function () {
        this.classList.toggle('active')
      })
    },
    context
  )
}

export { priceBoxExample }
