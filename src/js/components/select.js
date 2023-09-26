import Dropdown from 'bootstrap5/js/src/dropdown'
import { h, Ref } from '../utils'

function focusSelectOption(position, list) {
  if (typeof position === 'object') {
    if (
      position.classList.contains('select-option') &&
      !position.classList.contains('select-option--focus')
    ) {
      list.querySelector('.select-option--focus').classList.remove('select-option--focus')
      position.classList.add('select-option--focus')
    }
  }
  if (position === 'selected') {
    const selectedItem = list.querySelector('.select-option--selected') || list.querySelector('.select-option:first-child')
    selectedItem.classList.add('select-option--focus')
  }

  if (position === 'next') {
    const focusedItem = list.querySelector('.select-option--focus')
    if (!focusedItem.nextElementSibling) {
      list.firstElementChild.classList.add('select-option--focus')
    } else {
      focusedItem.nextElementSibling.classList.add('select-option--focus')
    }

    focusedItem.classList.remove('select-option--focus')
  }
  if (position === 'prev') {
    const focusedItem = list.querySelector('.select-option--focus')
    if (!focusedItem.previousElementSibling) {
      list.lastElementChild.classList.add('select-option--focus')
    } else {
      focusedItem.previousElementSibling.classList.add('select-option--focus')
    }
    focusedItem.classList.remove('select-option--focus')
  }
  if (position === 'first') {
    const focusedItem = list.querySelector('.select-option--focus')
    list.firstElementChild.classList.add('select-option--focus')
    focusedItem.classList.remove('select-option--focus')
  }
  if (position === 'last') {
    const focusedItem = list.querySelector('.select-option--focus')
    list.lastElementChild.classList.add('select-option--focus')
    focusedItem.classList.remove('select-option--focus')
  }

  setTimeout(function() {
    list.setAttribute('aria-activedescendant', list.querySelector('.select-option--focus').id)

    //For webkit (announces selected on all options though...)
    //list.querySelector('[aria-selected="true"]').setAttribute('aria-selected','false');
    //list.querySelector('.select-option--focus').setAttribute('aria-selected','false');

    //Set focus on option.. works better for webkit
    list.querySelector('.select-option--focus').focus()
  }, 0)
}

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
  let selectOpen = false

  function toggleSelect() {
    selectOpen ? closeSelect() : openSelect()
  }

  // Don't bother with disabled or missing elements
  if (!label || !select || select.disabled || initialized.has(el)) {
    return
  }

  let preventClose = false
  const initiallySelected = [...select.selectedOptions]
  const placeholder = initiallySelected.find(isPlaceholder)
  const initiallyValid = initiallySelected.filter((child) => !isPlaceholder(child))
  let clickOutside
  let hoverFocus
  setValidState(select, initiallyValid.length)

  // Set up internal lookup mechanisms
  const buttons = new WeakMap()
  const groups = new WeakMap()
  const selectAll = new Ref()
  const status = new Ref()

  function selectOption(target) {
    const items = list.querySelectorAll('.select-option')

    if (!select.multiple) {
      for (const item of items) {
        item.classList.remove('select-option--selected')
        item.setAttribute('aria-selected', 'false')
        item._selectElement.selected = false
      }
    }

    target.classList.add('select-option--selected')
    target.setAttribute('aria-selected', 'true')
    target._selectElement.selected = select.multiple ? !target._selectElement.selected : true


    if (!select.multiple) {
      closeSelect()
    }

    select.dispatchEvent(new window.Event('change', { bubbles: true }))
  }

  function closeSelect() {
    list.setAttribute('hidden', true)
    list.classList.remove('axs-select__list--top')
    toggle.setAttribute('aria-expanded', 'false')
    const items = list.querySelectorAll('.axs-select__list-item')
    for (const item of items) {
      item.classList.remove('axs-select__list-item--focus')
    }
    selectOpen = false
    document.removeEventListener('click', clickOutside)
    document.removeEventListener('mouseover', hoverFocus)
    setTimeout(function() {
      toggle.setAttribute('tabindex', '0')
    }, 0)
  }

  function openSelect(e) {
    toggle.setAttribute('tabindex', '-1')
    toggle.setAttribute('aria-expanded', 'true')
    list.removeAttribute('hidden')
    focusSelectOption('selected', list)
    selectOpen = true

    if (window.innerHeight - toggle.getBoundingClientRect().bottom < toggle.scrollHeight) {
      list.classList.add('axs-select__list--top')
    }

    document.addEventListener(
      'click',
      (clickOutside = (e) => {
        if (e.target !== toggle && e.target !== list && !list.contains(e.target)) {
          closeSelect()
        }
      })
    )

    list.addEventListener(
      'mouseover',
      (hoverFocus = (e) => {
        if (e.target.classList.contains('select-option') || e.target.closest('.select-option')) {
          const item = e.target.classList.contains('select-option')
            ? e.target
            : e.target.closest('.select-option')
          focusSelectOption(item, list)
        }
      })
    )
  }

  // The button which open the custom select list
  const toggle = h(
    'button',
    {
      type: 'button',
      class: 'select-toggle',
      id: `dropdown-select-${id}`,
      'aria-expanded': 'false',
      'aria-controls': `list-${id}`,
      'aria-labelledby': `dropdown-label-${id} dropdown-select-${id}`,
      'aria-haspopup': 'listbox',
      onclick() {
        toggleSelect()
        setTimeout(function() {
          if (!selectOpen) {
            toggle.focus()
          } else {
            list.focus()
          }
        }, 0)
      },
      onkeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleSelect()
          setTimeout(function() {
            if (!selectOpen) {
              toggle.focus()
            } else {
              list.focus()
            }
          }, 0)
          e.preventDefault()
        }

        if (e.key === 'Escape') {
          closeSelect()
          toggle.focus()
          e.preventDefault()
        }
        if (e.key === 'ArrowDown') {
          openSelect()
          list.focus()
          e.preventDefault()
        }
      }
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

  // The list of options
  const list = h(
    'ul',
    {
      id: `list-${id}`,
      role: 'listbox',
      tabindex: '-1',
      class: 'select-list',
      'aria-labelledby': `dropdown-label-${id}`,
      'aria-multiselectable': select.multiple,
      hidden: true,
      // We want this later.
      // 'aria-activedescendant': select.selectedOptions[0].id,
      onclick() {
        // Disable automatic closing on click
        preventClose = preventClose || select.multiple
      }
    },
    [
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
              select.dispatchEvent(new window.Event('change'))
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
                  'li',
                  {
                    role: 'option',
                    ref: button,
                    // type: 'button',
                    id: `group-${index}-trigger-${id}`,
                    class: `select-option ${select.multiple ? 'multiple' : ''
                      } toggle dropdown-item`,
                    // 'aria-expanded': 'true',
                    // 'aria-controls': `group-${index}-list-${id}`,

                    // TODO: NEED to add keyboard event to handle enter or spacebar to select option.
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

        const listItem = h(
          'li',
          {
            id: `select-option-${index}-${id}`,
            'aria-disabled': disabled,
            ref: button,
            // type: 'button',
            role: 'option',
            'aria-selected': selected,
            tabindex: '-1',
            class: `select-option ${select.multiple ? 'multiple' : ''} ${selected ? 'selected select-option--selected' : ''
              }`
          },
          resolveLabel(label, config.smallPattern, disabled ? '' : undefined)
        )

        // store reference to the option element.
        listItem._selectElement = child
        return listItem
      })
    ]
  )

  list.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      const item = list.querySelector('.select-option--focus')

      if (item.ariaDisabled === 'true') {
        event.stopPropagation()
      } else {
        selectOption(item)
        if (!select.multiple) {
          toggle.focus()
        }
      }

      event.preventDefault()
    }
    if (event.key === 'Escape') {
      closeSelect()
      toggle.focus()
      event.preventDefault()
    }
    if (event.key === 'Tab') {
      closeSelect()
    }
    if (event.key === 'ArrowDown') {
      focusSelectOption('next', list)
      event.preventDefault()
    }
    if (event.key === 'ArrowUp') {
      focusSelectOption('prev', list)
      event.preventDefault()
    }
    if (event.key === 'Home') {
      focusSelectOption('first', list)
      event.preventDefault()
    }
    if (event.key === 'End') {
      focusSelectOption('last', list)
      event.preventDefault()
    }

    // Search functionality
    // if (/^.$/u.test(e.key)) {
    //   keyString += e.key
    //   clearTimeout(typingTimer)
    //   if (keyString) {
    //     let matchedItems = filterSelect(keyString, options)
    //     focusSelectOption(matchedItems[0])
    //     typingTimer = setTimeout(function () {
    //       keyString = ''
    //     }, 250)
    //   }
    // }
  })

  list.addEventListener('click', function(event) {
    if (
      event.target.classList.contains('select-option') ||
      event.target.closest('.select-option')
    ) {
      const item = event.target.classList.contains('select-option')
        ? event.target
        : event.target.closest('.select-option')

      if (item.ariaDisabled === 'false') {
        selectOption(item)
        toggle.focus()
      }
    }
  })

  // Prevent automatic close on click
  el.addEventListener('hide.bs.dropdown', function(event) {
    if (preventClose) {
      preventClose = false
      event.preventDefault()
    }
  })

  // Update status and labels on change
  select.addEventListener('change', function() {
    selectAll.current?.classList.toggle('select-option--selected', allAreSelected(select))
    const states = new Map()

    // Update proxy buttons
    for (const option of select.options) {
      // if (option.disabled) continue
      const ref = buttons.get(option)
      ref?.current.classList.toggle('select-option--selected', option.selected)
      ref?.current.setAttribute('aria-selected', option.selected)
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
      button.current.classList.toggle('select-option--selected', state === 'selected')
      button.current.classList.toggle('select-option--indeterminate', state === 'indeterminate')
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
  label.id = `dropdown-label-${id}`
  select.after(toggle, list)

  const dropdown = new Dropdown(toggle)

  // Cache element to prevent double initialization
  initialized.add(el)
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
  return labels.reduce(function(acc, child) {
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
