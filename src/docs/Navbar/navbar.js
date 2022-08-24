import { each } from '../../js/utils'

const navbarExample = (context) => {
  each(
    '.navbar-toggle',
    (el) => {
      el.addEventListener('click', function (event) {
        this.parentElement?.classList.toggle('open')
        this.setAttribute(
          'aria-expanded',
          this.parentElement?.classList.contains('open') ? 'false' : 'true'
        )
        event.preventDefault()
      })
    },
    context
  )

  each(
    '.navbar .nav-link',
    (el) => {
      el.addEventListener('click', function (event) {
        this.closest('.navbar')
          ?.querySelectorAll('.nav-item')
          .forEach((item) => item.classList.remove('active'))
        this.parentElement.classList.add('active')
        event.preventDefault()
      })
    },
    context
  )
}

export { navbarExample }
