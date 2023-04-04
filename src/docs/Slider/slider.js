import { interval } from '../../js/components/interval'
import { each } from '../../js/utils'

const sliderExample = (context) => {
  if (!context) { return }

  const intervalInput = context.querySelector('#interval')
  if (intervalInput) {
    const low = context.querySelector('#interval-low')
    const hight = context.querySelector('#interval-high')

    interval(intervalInput)

    intervalInput.addEventListener('input', function () {
      low.value = intervalInput.valueLow
      hight.value = intervalInput.valueHigh
    })
  }

  each(
    '.lf-slider',
    function (input) {
      if (input === intervalInput) return
      input.addEventListener('input', function () {
        const percent = Math.ceil(
          ((input.value - input.min) / (input.max - input.min)) * 100
        )

        input.style.setProperty('--progress', percent)

        const output = document.getElementById(
          input.getAttribute('aria-controls')
        )

        if (output) {
          output.value = input.value
        }
      })
    },
    context
  )
}

export { sliderExample }
