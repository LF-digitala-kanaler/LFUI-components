import 'bootstrap/js/src/dropdown'

const EVENT_PREFIX = /^on/
const refs = new WeakMap()

/**
 * Decorate select element with custom dropdown
 * @param {Node} element Element to be decorated
 * @param {object} opts Options
 * @property {string} [opts.allLabel] Label for "All" option
 * @property {string | RegExp} [opts.smallPattern] RegExp pattern for small text
 */
export function select (el, opts) {
  const config = opts || el.dataset
  const select = el.querySelector('.select-options')
  const label = el.querySelector('.select-label')
  const id = Math.random().toString(36).substr(2, 9)

  // Don't bother with disabled or missing elements
  if (!label) throw new Error('Label missing')
  if (!select) throw new Error('Select missing')
  if (select.disabled) throw new Error('Select is disabled')

  let preventClose = false
  const initiallySelected = [...select.selectedOptions]
  const initiallyValid = initiallySelected.filter((child) => !child.disabled)
  const smallRegexp = config.smallPattern instanceof RegExp
    ? config.smallPattern
    : config.smallPattern ? new RegExp(config.smallPattern) : null

  // Set up internal lookup mechanisms
  const buttons = new WeakMap()
  const selectAll = new Ref()
  const status = new Ref()

  // The button which open the custom select list
  const toggle = h('button', {
    type: 'button',
    title: label.textContent,
    class: 'select-toggle dropdown-toggle',
    'data-toggle': 'dropdown',
    'aria-expanded': 'false',
    'aria-controls': `list-${id}`
  }, [
    h('span', {
      'data-count': initiallyValid.length || '',
      class: 'select-status',
      role: 'status',
      ref: status
    }, initiallySelected.length
      ? concatLabels(initiallySelected, smallRegexp)
      : '')
  ])

  // The list of options
  const list = h('div', {
    id: `list-${id}`,
    'aria-labelledby': `label-${id}`,
    class: `select-list ${select.multiple ? 'multiple' : ''} dropdown-menu`,
    onclick () {
      // Disable automatic closing on click
      preventClose = select.multiple
    }
  }, [
    // Toggle all button
    select.multiple && config.allLabel
      ? h('button', {
          ref: selectAll,
          type: 'button',
          class: 'select-option dropdown-item',
          onclick (event) {
            const selected = !allAreSelected(select)
            for (const option of select.options) {
              if (!option.disabled) option.selected = selected
            }
            select.dispatchEvent(new window.Event('change'))
            event.preventDefault()
          }
        }, config.allLabel)
      : null,
    // Proxies for the option/optgroup elements
    ...[...select.children].map(function eachChild (child, index) {
      if (child.nodeName === 'OPTGROUP') {
        const { label, children } = child
        return h('fieldset', { class: 'select-group' }, [
          h('legend', { class: 'select-legend' }, label),
          ...[...children].map(eachChild)
        ])
      }

      const { label, disabled, selected, value } = child

      // Don't include the typical leading placeholder option
      // E.g. <option value="" disabled selected>Choose something</option>
      if (!index && selected && disabled && !value) return null

      // Add to internal element reverse lookup table
      const ref = new Ref()
      buttons.set(child, ref)

      return h('button', {
        ref,
        disabled,
        type: 'button',
        class: `select-option dropdown-item ${selected ? 'selected' : ''}`,
        onclick (event) {
          child.selected = select.multiple ? !child.selected : true
          select.dispatchEvent(new window.Event('change'))
        }
      }, resolveLabel(label, smallRegexp))
    })
  ])

  // Prevent automatic close on click
  $(el).on('hide.bs.dropdown', function (event) {
    if (preventClose) {
      preventClose = false
      event.preventDefault()
    }
  })

  // Update status and labels on change
  select.addEventListener('change', function () {
    selectAll.current?.classList.toggle('selected', allAreSelected(select))

    // Update proxy buttons
    for (const option of select.options) {
      if (option.disabled) continue
      const ref = buttons.get(option)
      ref?.current.classList.toggle('selected', option.selected)
    }

    const selected = [
      ...select.selectedOptions
    ].filter((option) => !option.disabled)
    const { current: statusNode } = status

    // Update status counter
    statusNode.dataset.count = selected.length || ''

    // Update status label
    const items = selected.length ? selected : initiallySelected
    const [first, ...rest] = statusNode.childNodes
    const next = concatLabels(items.length ? items : [''], smallRegexp)
    for (const child of rest) child.remove()
    first.replaceWith(...next)
  })

  // Update DOM
  el.classList.add('initialized')
  label.id = `label-${id}`
  select.after(toggle, list)
}

/**
 * @param {Node} select
 * @returns {boolean}
 */
function allAreSelected (select) {
  return select.selectedOptions.length === select.options.length
}

/**
 * @param {string[]} labels
 * @param {RegExp} regexp
 * @returns {(string | Node)[]}
 */
function concatLabels (labels, regexp) {
  return labels.reduce(function (acc, child) {
    if (acc.length) acc.push(', ')
    acc.push(...resolveLabel(child.label, regexp))
    return acc
  }, [])
}

/**
 * @param {string} label
 * @param {RegExp} regexp
 * @returns {(string | Node)[]}
 */
function resolveLabel (label, regexp) {
  const match = label.match(regexp)
  if (!match) return [label]
  return [
    label.replace(regexp, ''),
    h('small', { class: 'text-muted' }, match[1] || match[0])
  ]
}

/**
 * Render node
 * @param {string} type Node type
 * @param {object} attrs Node attributes
 * @param {(str | Node)[]} children Node children
 * @returns {Node}
 */
function h (type, attrs = {}, children = []) {
  const el = document.createElement(type)

  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'ref') {
      if (typeof value === 'function') value(el)
      else refs.set(value, el)
    } else if (EVENT_PREFIX.test(key)) {
      el.addEventListener(key.replace(EVENT_PREFIX, ''), value)
    } else if (key in el) {
      el[key] = value
    } else {
      el.setAttribute(key, value)
    }
  }

  if (!Array.isArray(children)) children = [children]
  if (children.length) {
    el.append(...children.filter(Boolean).map(function (child) {
      return child instanceof window.Node
        ? child
        : document.createTextNode(child)
    }))
  }

  return el
}

/**
 * Create a node reference
 */
class Ref {
  /**
   * Currently referenced node
   * @type {Node}
   */
  get current () {
    return refs.get(this)
  }
}
