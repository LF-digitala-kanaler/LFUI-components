/**
 * Custom adaption of https://github.com/LeaVerou/multirange
 * @typedef {Object} HTMLIntervalElement
 * @extends {HTMLInputElement}
 * @property {number} valueLow The low value of the interval
 * @property {number} valueHigh The high value of the interval
 * @property {string} value The value of the interval, comma separated
 */

/**
 * Initialize the interval component
 * @param {HTMLInputElement} element
 * @returns {HTMLIntervalElement}
 */
export function interval(input) {
  const descriptor = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  )

  const value = input.getAttribute('value')
  const values = value === null ? [] : value.split(',')
  const min = +(input.min || 0)
  const max = +(input.max || 100)
  const ghost = input.cloneNode()

  input.classList.add('interval')
  input.classList.add('original')
  ghost.classList.add('interval')
  ghost.classList.add('ghost')

  input.value = values[0] || min + (max - min) / 2
  ghost.value = values[1] || min + (max - min) / 2

  input.after(ghost)

  Object.defineProperty(
    input,
    'originalValue',
    descriptor.get
      ? descriptor
      : {
          // Fuck you Safari >:(
          get: function () {
            return this.value
          },
          set: function (v) {
            this.value = v
          }
        }
  )

  Object.defineProperties(input, {
    valueLow: {
      get: function () {
        return Math.min(this.originalValue, ghost.value)
      },
      set: function (v) {
        this.originalValue = v
        update()
      },
      enumerable: true
    },
    valueHigh: {
      get: function () {
        return Math.max(this.originalValue, ghost.value)
      },
      set: function (v) {
        ghost.value = v
        update()
      },
      enumerable: true
    }
  })

  if (descriptor.get) {
    // Again, fuck you Safari
    Object.defineProperty(input, 'value', {
      get: function () {
        return this.valueLow + ',' + this.valueHigh
      },
      set: function (v) {
        const values = v.split(',')
        this.valueLow = values[0]
        this.valueHigh = values[1]
        update()
      },
      enumerable: true
    })
  }

  if (typeof input.oninput === 'function') {
    ghost.oninput = input.oninput.bind(input)
  }

  function update() {
    ghost.style.setProperty(
      '--low',
      100 * ((input.valueLow - min) / (max - min)) + 1 + '%'
    )
    ghost.style.setProperty(
      '--high',
      100 * ((input.valueHigh - min) / (max - min)) - 1 + '%'
    )
  }

  ghost.addEventListener('mousedown', function passClick(evt) {
    // Find the horizontal position that was clicked
    const clickValue = min + ((max - min) * evt.offsetX) / this.offsetWidth
    const middleValue = (input.valueHigh + input.valueLow) / 2
    if (input.valueLow === ghost.value && clickValue > middleValue) {
      // Click is closer to input element and we swap thumbs
      input.value = ghost.value
    }
  })

  input.addEventListener('input', update)
  ghost.addEventListener('input', function () {
    update()
    input.dispatchEvent(new Event('input'))
  })

  update()

  return input
}
