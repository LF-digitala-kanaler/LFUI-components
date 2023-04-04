import Vivus from 'vivus'
import { each } from '../../js/utils'

const calloutExample = (context) => {
  if (!context) { return }

  function draw(el, options = {}, callback) {
    const opts = Object.assign(
      {
        animTimingFunction: Vivus.EASE_OUT,
        duration: 100
      },
      options
    )

    return new Vivus(el, opts, callback)
  }

  each(
    '[data-draw]',
    (el) => {
      const options = Object.entries(el.dataset).reduce(function (
        acc,
        [key, value]
      ) {
        if (key.match(/^draw([\w]+)/)) {
          acc[key.replace(/^draw/, '')] = value
        }

        return acc
      },
      {})

      if (Object.hasOwnProperty.call(options, 'on')) {
        delete options.on
        options.start = 'autostart'
        el.addEventListener(options.on, () => draw(el, options))
      } else {
        draw(el, options)
      }
    },
    context
  )
}

export { calloutExample }
