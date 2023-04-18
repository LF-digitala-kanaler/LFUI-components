import { each } from '../../js/utils'

const popoverTooltipExample = (context) => {
  if (!context) {
    return
  }

  each(
    '.popover-tooltip-trigger',
    (el) => {
      el.addEventListener('focus', onchange)
      el.addEventListener('blur', onchange)

      function onchange() {
        document
          .getElementById(this.getAttribute('aria-controls'))
          .parentElement.classList.toggle('open')
      }
    },
    context
  )

  each(
    'label.popover-tooltip-trigger',
    (el) => {
      el.addEventListener('click', preventDefault)
      el.addEventListener('touch', preventDefault)
    },
    context
  )

  function preventDefault(e) {
    e.preventDefault()
  }
}

export { popoverTooltipExample }
