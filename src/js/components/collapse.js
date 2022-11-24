import Collapse from 'bootstrap/js/src/collapse'
import { delegate } from '../utils'

const LOADING_CLASS = 'loading'
const EXPANDED_ATTR = 'aria-expanded'

const collapsibles = new WeakMap()

document.addEventListener(
  'click',
  delegate('[data-bs-toggle="collapse:async"]', function (event) {
    const target = document.querySelector(this.dataset.bsTarget)
    if (!target) return

    let collapsible = collapsibles.get(target)

    if (collapsible) {
      const isExpanded = this.getAttribute(EXPANDED_ATTR) === 'true'
      const eventName = isExpanded ? 'hide.bs.collapse' : 'show.bs.collapse'

      target.addEventListener(
        eventName,
        () => this.setAttribute(EXPANDED_ATTR, isExpanded ? 'false' : 'true'),
        { once: true }
      )

      collapsible.toggle()
    } else {
      this.classList.add(LOADING_CLASS)
      this.setAttribute('disabled', '')
      this.addEventListener(
        'done',
        () => {
          target.addEventListener(
            'shown.bs.collapse',
            () => {
              this.classList.remove(LOADING_CLASS)
              this.removeAttribute('disabled')
            },
            { once: true }
          )

          collapsible = new Collapse(target, { show: true })
          collapsibles.set(target, collapsible)

          this.setAttribute(
            EXPANDED_ATTR,
            this.getAttribute(EXPANDED_ATTR) === 'false' ? 'true' : 'false'
          )
        },
        { once: true }
      )

      this.addEventListener(
        'fail',
        () => this.classList.remove(LOADING_CLASS),
        { once: true }
      )
    }
  })
)
