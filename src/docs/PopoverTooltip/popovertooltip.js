import { each } from '../../js/utils'

/*
  - Have aria-expanded on the trigger.
  - Clicking on the trigger will open the tooltip and keep it open.
  - Possible to tab into tooltip, for example to links.
  - Tooltip will close when:
    - Clicking outside of the tooltip.
    - Pressing ESC.
    - Clicking on the trigger.
  - We have do the remove and append dance that you see in the code to
    get screen readers to read out the content of the tooltip as we want it.
*/

/* DEV NOTES
  =========================================================================================

  [13 mars 2024]
  We pause development of the a11y improvements until we discussed with UX the current
  behaviours regarding hover and focus state opening the tooltip.
*/

class PopoverTooltip {
  constructor(el) {
    this.container = el
    this.trigger = el.querySelector('.popover-tooltip-trigger')
    this.tooltip = el.querySelector('.popover-tooltip')
    this.wrapper = el.querySelector('.popover-wrapper')
    let clickOutsideEvent

    // We initially close the tooltip to get the aria-label and yank the tooltip content from the DOM
    this.close()

    el.addEventListener('focusin', () => this.open())
    el.addEventListener('mouseleave', () => this.close())
    el.addEventListener('mouseenter', () => this.open())
    el.addEventListener('focusout', (event) => {
      console.log('focus out', event)
      if (!this.isOpen() || !event.relatedTarget) {
        return
      }

      console.log('closest', event.relatedTarget.closest('.popover-tooltip-container'))
      if (!event.relatedTarget.closest('.popover-tooltip-container')) {
        this.close()
      }
    })

    this.trigger.addEventListener('click', () => {
      const container = this.container
      if (container.classList.contains('open')) {
        this.close(true)
      } else {
        this.open(true)
        clickOutsideEvent = document.addEventListener('click', ({ target }) => {
          if (!target.closest('.popover-tooltip-container')) {
            this.close(true)
            document.removeEventListener('click', clickOutsideEvent)
          }
        })
      }
    })
  }

  open(stayOpen) {
    if (stayOpen) {
      this.container.classList.add('open')
    }
    this.trigger.setAttribute('aria-expanded', true)
    this.tooltip.append(this.wrapper)
  }

  isOpen() {
    return !!this.trigger.getAttribute('aria-expanded')
  }

  close(hardClose) {
    if (hardClose) {
      this.container.classList.remove('open')
    }
    if (!this.container.classList.contains('open')) {
      this.trigger.setAttribute('aria-expanded', false)
      this.wrapper.remove()
    }
  }
}

const popoverTooltipExample = (context) => {
  if (!context) {
    return
  }

  window.addEventListener('keydown', (event) => {
    if (event.key.toLocaleLowerCase() === 'escape') {
      document
        .querySelectorAll('.popover-tooltip-container')
        .forEach((element) => element.classList.remove('open'))

      document
        .querySelectorAll('.popover-tooltip-trigger')
        .forEach((element) => element.setAttribute('aria-expanded', false))
    }
  })

  each('.popover-tooltip-container', (el) => new PopoverTooltip(el))

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
