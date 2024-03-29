import Dropdown from 'bootstrap5/js/src/dropdown'
import { h, Ref } from '../utils'

const initialized = new WeakSet()

/**
 * @typedef {object} SelectOptions
 * @property {string} [allLabel] Label for "All" option
 * @property {boolean} [groupToggle] Enable group toggling
 * @property {string | RegExp} [smallPattern] RegExp pattern for small text
 */

/**
 * Decorate select element with custom dropdown
 * @param {Node} element Element to be decorated
 * @param {SelectOptions} opts Options
 */
export function select(el, opts = el.dataset) {
  const config = getConfig(opts)
  const select = el.querySelector('.select-options')
  const label = el.querySelector('.select-label')
  const id = Math.random().toString(36).substr(2, 9)

  // Don't bother with disabled or missing elements
  if (!label || !select || select.disabled || initialized.has(el)) {
    return
  }

  let preventClose = false
  const initiallySelected = [...select.selectedOptions]
  let placeholder = select.querySelector('option[value=""][disabled]')
  const initiallyValid = initiallySelected.filter((child) => !isPlaceholder(child))

  setValidState(select, initiallyValid.length)

  // Set up internal lookup mechanisms
  const buttons = new WeakMap()
  const groups = new WeakMap()
  const selectAll = new Ref()
  const status = new Ref()

  // The button which open the custom select list
  const toggle = h(
    'button',
    {
      type: 'button',
      title: label.textContent,
      class: 'select-toggle dropdown-toggle',
      'data-bs-toggle': 'dropdown',
      'aria-expanded': 'false',
      'aria-controls': `list-${id}`
    },
    [
      h(
        'span',
        {
          'data-count': initiallyValid.length || '',
          class: 'select-status',
          role: 'status',
          ref: status
        },
        initiallyValid.length
          ? concatLabels(initiallyValid, config.smallPattern)
          : placeholder
          ? resolveLabel(placeholder.label, config.smallPattern)
          : ''
      )
    ]
  )

  function renderItems() {
    return [
      // Toggle all button
      select.multiple && config.allLabel
        ? h(
            'button',
            {
              ref: selectAll,
              type: 'button',
              class: 'select-option multiple dropdown-item',
              onclick(event) {
                const selected = !allAreSelected(select)
                for (const option of select.options) {
                  if (!option.disabled) option.selected = selected
                }
                select.dispatchEvent(new window.Event('change', { bubbles: true }))
                event.preventDefault()
              }
            },
            config.allLabel
          )
        : null,
      // Proxies for the option/optgroup elements
      ...[...select.children].map(function eachChild(child, index) {
        if (child.nodeName === 'OPTGROUP') {
          const label = resolveLabel(child.label, config.smallPattern)
          let children = [...child.children].map(eachChild)
          const wrapper = new Ref()
          const button = new Ref()
          let expanded = true

          // Wrap children in a dropdown menu
          if (config.groupToggle) {
            const group = h(
              'fieldset',
              {
                'data-bs-target': `#list-${id}`,
                id: `group-${index}-list-${id}`,
                class: 'select-list dropdown-menu',
                'aria-labelledby': `group-${index}-trigger-${id}`
              },
              children
            )

            // Add to internal lookup table)
            for (const option of child.children) {
              groups.set(option, button)
            }

            // Wrap children
            children = [group]
          }

          return h(
            config.groupToggle ? 'div' : 'fieldset',
            {
              ref: wrapper,
              class: `select-group ${config.groupToggle ? 'show' : ''}`
            },
            [
              config.groupToggle
                ? h(
                    'button',
                    {
                      ref: button,
                      type: 'button',
                      id: `group-${index}-trigger-${id}`,
                      class: `select-option ${
                        select.multiple ? 'multiple' : ''
                      } toggle dropdown-item`,
                      'aria-expanded': 'true',
                      'aria-controls': `group-${index}-list-${id}`,
                      onclick() {
                        expanded = !expanded
                        this.setAttribute('aria-expanded', expanded ? 'true' : 'false')
                        wrapper.current.classList.toggle('show', expanded)

                        // Disable automatic closing on click
                        preventClose = true

                        // Ugly hack to prevent Bootstrap dropdown from including
                        // hidden items in key navigation
                        for (const option of child.children) {
                          const button = buttons.get(option)
                          button.current.classList.toggle('disabled', !expanded)
                        }

                        // Update dropdown position
                        dropdown.update()
                      }
                    },
                    label
                  )
                : h('legend', { class: 'select-legend' }, label),
              ...children
            ]
          )
        }

        // Don't include the typical leading placeholder option
        // E.g. <option value="" disabled selected>Choose something</option>
        if (isPlaceholder(child, index)) return null

        const { label, disabled, selected } = child

        // Add to internal element reverse lookup table
        const button = new Ref()
        buttons.set(child, button)

        return h(
          'button',
          {
            disabled,
            ref: button,
            type: 'button',
            class: `select-option dropdown-item ${select.multiple ? 'multiple' : ''} ${
              selected ? 'selected' : ''
            }`,
            onclick(event) {
              child.selected = select.multiple ? !child.selected : true
              select.dispatchEvent(new window.Event('change', { bubbles: true }))
            }
          },
          resolveLabel(label, config.smallPattern, disabled ? '' : undefined)
        )
      })
    ]
  }

  // The list of options
  const list = h(
    'div',
    {
      id: `list-${id}`,
      'aria-labelledby': `label-${id}`,
      class: 'select-list dropdown-menu',
      onclick() {
        // Disable automatic closing on click
        preventClose = preventClose || select.multiple
      }
    },
    renderItems()
  )

  // Prevent automatic close on click
  el.addEventListener('hide.bs.dropdown', function (event) {
    if (preventClose) {
      preventClose = false
      event.preventDefault()
    }
  })

  // Update status and labels on change
  select.addEventListener('change', function () {
    selectAll.current?.classList.toggle('selected', allAreSelected(select))

    const states = new Map()

    // Update proxy buttons
    for (const option of select.options) {
      if (option.disabled) continue
      const ref = buttons.get(option)
      ref?.current.classList.toggle('selected', option.selected)

      // Calculate group status
      if (groups.has(option)) {
        const button = groups.get(option)
        let current = states.get(button)

        if (option.selected) {
          if (!current) current = 'selected'
          else if (current === 'unselected') current = 'indeterminate'
        } else if (current === 'selected') {
          current = 'indeterminate'
        } else if (!current) {
          current = 'unselected'
        }

        states.set(button, current)
      }
    }

    // Update group status
    for (const [button, state] of states) {
      button.current.classList.toggle('selected', state === 'selected')
      button.current.classList.toggle('indeterminate', state === 'indeterminate')
    }

    const selected = [...select.selectedOptions].filter((option) => !isPlaceholder(option))
    const { current: statusNode } = status

    setValidState(select, selected.length)

    // Update status counter
    statusNode.dataset.count = selected.length || ''

    // Update status label
    const items = selected.length ? selected : placeholder ? [placeholder] : []
    const [first, ...rest] = statusNode.childNodes
    const next = items.length ? concatLabels(items, config.smallPattern) : ['']
    for (const child of rest) child.remove()
    first.replaceWith(...next)
  })

  // Update DOM
  el.classList.add('initialized')
  label.id = `label-${id}`
  select.after(toggle, list)

  const dropdown = new Dropdown(toggle)

  // Cache element to prevent double initialization
  initialized.add(el)

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList' || mutation.type === 'carachterData') {
        const frag = document.createDocumentFragment()
        frag.append(...renderItems().filter((item) => item))
        list.innerHTML = ''
        list.append(frag)
        placeholder = placeholder = select.querySelector('option[value=""][disabled]')
        select.dispatchEvent(new window.Event('change'))
      }
    }
  }

  // Create an observer instance linked to the callback function
  const observer = new window.MutationObserver(callback)

  // Start observing the target node for configured mutations
  observer.observe(select, {
    attributes: false,
    childList: true,
    subtree: true,
    characterData: true
  })
}

/**
 * @param {SelectOptions} options
 * @returns {SelectOptions}
 */
function getConfig(options) {
  let { smallPattern, allLabel, groupToggle } = options

  if (smallPattern && !(smallPattern instanceof RegExp)) {
    smallPattern = new RegExp(smallPattern)
  }

  if (typeof groupToggle !== 'undefined') {
    groupToggle = groupToggle !== false
  }

  return { smallPattern, allLabel, groupToggle }
}

/**
 * @param {Element} element
 * @param {boolean} valid
 * @returns
 */
function setValidState(element, valid) {
  const group = element.closest('.form-group')
  if (group) {
    group.classList.toggle('has-valid', valid)
  }
}

/**
 * @param {Node} option
 * @returns {boolean}
 */
function isPlaceholder(option) {
  const { value, disabled, hidden } = option
  return !value && disabled && hidden
}

/**
 * @param {Node} select
 * @returns {boolean}
 */
function allAreSelected(select) {
  return select.selectedOptions.length === select.options.length
}

/**
 * @param {Node[]} labels
 * @param {RegExp} regexp
 * @returns {(string | Node)[]}
 */
function concatLabels(labels, regexp) {
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
function resolveLabel(label, regexp, className = 'text-muted') {
  const match = label.match(regexp)
  if (!match) return [label]
  return [label.replace(regexp, ''), h('small', { class: className }, match[1] || match[0])]
}
