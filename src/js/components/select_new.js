import { h, Ref, uid } from '../utils'

const initialized = new WeakSet()

export class Select {
  constructor(element, opts = element.dataset) {
    this.config = getConfig(opts)
    this.select = element.querySelector('.select-options')
    this.label = element.querySelector('.select-label')
    this.id = uid()
    this.selectOpen = false
    this.preventClose = false
    this.clickOutside = undefined
    this.hoverFocus = undefined
    this.multiselectable = this.select.multiple

    this._menuItems = new WeakMap()
    this._groups = new WeakMap()
    this._selectAll = new Ref()
    this._status = new Ref()

    if (!this.label || !this.select || this.select.disabled || initialized.has(element)) {
      return
    }

    this.initiallySelected = [...this.select.selectedOptions]
    this.placeholder = this.initiallySelected.find(isPlaceholder)
    this.initiallyValid = this.initiallySelected.filter((child) => !isPlaceholder(child))
    setValidState(this.select, this.initiallyValid.length)

    this.toggle = this.createToggle()
    this.list = this.createOptionList()

    // Update status and labels on change
    this.select.addEventListener('change', (event) => {
      this.onChangeHandler(event)
    })

    // Update DOM
    element.classList.add('initialized')
    this.label.id = `dropdown-label-${this.id}`
    this.select.after(this.toggle, this.list)

    this.keyString = ''
    this.typingTimer = undefined
    // Cache element to prevent double initialization
    initialized.add(element)
  }

  moveFocusTo(position) {
    const { list } = this
    const focusedItem = list.querySelector('.select-option--focus')

    if (typeof position === 'object') {
      if (!position.classList.contains('select-option--focus')) {
        focusedItem.classList.remove('select-option--focus')
        position.classList.add('select-option--focus')
      }
    }
    if (position === 'selected') {
      const selectedItem = list.querySelector('.select-option--selected') || list.querySelector('.select-option:first-child')
      selectedItem.classList.add('select-option--focus')
    }

    if (position === 'next') {
      if (!focusedItem.nextElementSibling) {
        list.firstElementChild.classList.add('select-option--focus')
      } else {
        focusedItem.nextElementSibling.classList.add('select-option--focus')
      }

      focusedItem.classList.remove('select-option--focus')
    }
    if (position === 'prev') {
      if (!focusedItem.previousElementSibling) {
        list.lastElementChild.classList.add('select-option--focus')
      } else {
        focusedItem.previousElementSibling.classList.add('select-option--focus')
      }
      focusedItem.classList.remove('select-option--focus')
    }
    if (position === 'first') {
      list.firstElementChild.classList.add('select-option--focus')
      focusedItem.classList.remove('select-option--focus')
    }
    if (position === 'last') {
      list.lastElementChild.classList.add('select-option--focus')
      focusedItem.classList.remove('select-option--focus')
    }

    setTimeout(() => {
      list.setAttribute('aria-activedescendant', list.querySelector('.select-option--focus').id)

      // For webkit (announces selected on all options though...)
      // list.querySelector('[aria-selected="true"]').setAttribute('aria-selected','false');
      // list.querySelector('.select-option--focus').setAttribute('aria-selected','false');

      // Set focus on option.. works better for webkit
      this.list.querySelector('.select-option--focus').focus()
    }, 0)
  }

  onChangeHandler() {
    this._selectAll.current?.classList.toggle(
      'select-option--selected',
      allAreSelected(this.select)
    )

    const states = new Map()

    // Update proxy buttons
    for (const option of this.select.options) {
      // if (option.disabled) continue
      const ref = this._menuItems.get(option)
      ref?.current.classList.toggle('select-option--selected', option.selected)
      ref?.current.setAttribute('aria-selected', option.selected)
      // Calculate group status
      if (this._groups.has(option)) {
        const button = this._groups.get(option)
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

    const selected = [...this.select.selectedOptions].filter((option) => !isPlaceholder(option))
    const { current: statusNode } = this._status

    setValidState(this.select, selected.length)

    // Update status counter
    statusNode.dataset.count = selected.length || ''

    // Update status label
    const items = selected.length ? selected : this.placeholder ? [this.placeholder] : []
    const [first, ...rest] = statusNode.childNodes

    const next = items.length ? concatLabels(items, this.config.smallPattern) : ['']

    for (const child of rest) child.remove()
    first.replaceWith(...next)
  }

  onClickHandler({ target }) {
    if (
      target.classList.contains('select-option') ||
      target.closest('.select-option')
    ) {
      const item = target.classList.contains('select-option')
        ? target
        : target.closest('.select-option')

      if (item.ariaDisabled === 'false') {
        this.selectOption(item)
        this.toggle.focus()
      }
    }
  }

  onKeydownHandler(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      const item = this.list.querySelector('.select-option--focus')

      if (item.ariaDisabled === 'true') {
        event.stopPropagation()
      } else {
        this.selectOption(item)
        if (!this.multiselectable) {
          this.toggle.focus()
        }
      }

      event.preventDefault()
    }

    if (event.key === 'Escape') {
      this.closeSelect()
      this.toggle.focus()
      event.preventDefault()
    }
    if (event.key === 'Tab') {
      this.closeSelect()
    }
    if (event.key === 'ArrowDown') {
      this.moveFocusTo('next')
      event.preventDefault()
    }
    if (event.key === 'ArrowUp') {
      this.moveFocusTo('prev')
      event.preventDefault()
    }
    if (event.key === 'Home') {
      this.moveFocusTo('first')
      event.preventDefault()
    }
    if (event.key === 'End') {
      this.moveFocusTo('last')
      event.preventDefault()
    }

    // Search functionality
    if (/^.$/u.test(e.key)) {
      keyString += e.key
      clearTimeout(typingTimer)
      if (keyString) {
        let matchedItems = filterSelect(keyString, options)
        moveFocusTo(matchedItems[0])
        typingTimer = setTimeout(function() {
          keyString = ''
        }, 250)
      }
    }
  }

  createToggle() {
    const { id } = this
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
        onclick: () => {
          this.toggleSelect()
          setTimeout(() => {
            if (!this.selectOpen) {
              this.toggle.focus()
            } else {
              this.list.focus()
            }
          }, 0)
        },
        onkeydown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            this.toggleSelect()
            setTimeout(() => {
              if (!this.selectOpen) {
                this.toggle.focus()
              } else {
                this.list.focus()
              }
            }, 0)
            e.preventDefault()
          }

          if (e.key === 'Escape') {
            this.closeSelect()
            this.toggle.focus()
            e.preventDefault()
          }
          if (e.key === 'ArrowDown') {
            this.openSelect()
            this.list.focus()
            e.preventDefault()
          }
        }
      },
      [
        h(
          'span',
          {
            'data-count': this.initiallyValid.length || '',
            class: 'select-status',
            role: 'status',
            ref: this._status
          },
          this.initiallyValid.length
            ? concatLabels(this.initiallyValid, this.config.smallPattern)
            : this.placeholder
              ? resolveLabel(this.placeholder.label, this.config.smallPattern)
              : ''
        )
      ]
    )

    return toggle
  }

  toggleAll() {
    const selected = !allAreSelected(this.select)
    for (const option of this.select.options) {
      if (!option.disabled) option.selected = selected
    }
    this.select.dispatchEvent(new window.Event('change'))
  }

  createOptionList() {
    const { id, select, config, _selectAll, _menuItems, _groups } = this
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
        onclick: () => {
          // Disable automatic closing on click
          this.preventClose = this.preventClose || select.multiple
        }
      },
      [
        // Toggle all button
        select.multiple && config.allLabel
          ? h(
            'li',
            {
              ref: _selectAll,
              role: 'option',
              id: `select-all-option-${id}`,
              class: 'select-option multiple dropdown-item',
              'aria-selected': !allAreSelected(select),
              tabindex: '-1',
              onclick: (event) => {
                this.toggleAll()
                event.preventDefault()
              },
              onkeydown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  this.toggleAll()
                  event.preventDefault()
                }
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
                _groups.set(option, button)
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
                        this.preventClose = true

                        // Ugly hack to prevent Bootstrap dropdown from including
                        // hidden items in key navigation
                        for (const option of child.children) {
                          const button = _menuItems.get(option)
                          button.current.classList.toggle('disabled', !expanded)
                        }

                        // Update dropdown position
                        // dropdown.update()
                        //
                        // TODO: we need to update the position maybe
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
          _menuItems.set(child, button)

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

    list.addEventListener('keydown', (event) => this.onKeydownHandler(event))
    list.addEventListener('click', (event) => this.onClickHandler(event))

    return list
  }

  toggleSelect() {
    this.selectOpen ? this.closeSelect() : this.openSelect()
  }

  closeSelect() {
    this.list.setAttribute('hidden', true)
    this.list.classList.remove('select-list--top')
    this.toggle.setAttribute('aria-expanded', 'false')

    const items = this.list.querySelectorAll('.select-option')
    for (const item of items) {
      item.classList.remove('select-option--focus')
    }

    this.selectOpen = false

    document.removeEventListener('click', this.onClickOutsideHandler)
    document.removeEventListener('mouseover', this.onMouseoverHandler)

    setTimeout(() => {
      this.toggle.setAttribute('tabindex', '0')
    }, 0)
  }

  openSelect() {
    const { toggle, list } = this

    this.toggle.setAttribute('tabindex', '-1')
    this.toggle.setAttribute('aria-expanded', 'true')
    this.list.removeAttribute('hidden')
    this.moveFocusTo('selected')
    this.selectOpen = true

    const listBottomPosition = list.getBoundingClientRect().bottom
    if (window.innerHeight - listBottomPosition < toggle.scrollHeight) {
      list.classList.add('select-list--top')
    }

    document.addEventListener(
      'click',
      (this.clickOutside = ({ target }) => {
        if (target !== this.toggle && target !== this.list && !this.list.contains(target)) {
          this.closeSelect()
        }
      })
    )

    this.list.addEventListener(
      'mouseover',
      (this.hoverFocus = ({ target }) => {
        const containOption = target.classList.contains('select-option')
        if (containOption || target.closest('.select-option')) {
          const item = containOption
            ? target
            : target.closest('.select-option')
          this.moveFocusTo(item)
        }
      })
    )
  }

  selectOption(target) {
    const items = this.list.querySelectorAll('.select-option')

    if (!this.multiselectable) {
      for (const item of items) {
        item.classList.remove('select-option--selected')
        item.setAttribute('aria-selected', 'false')
        item._selectElement.selected = false
      }
    }

    target.classList.add('select-option--selected')
    target.setAttribute('aria-selected', 'true')

    if (target._selectElement) {
      target._selectElement.selected = this.multiselectable ? !target._selectElement.selected : true
    }


    if (!this.multiselectable) {
      this.closeSelect()
    }

    this.select.dispatchEvent(new window.Event('change', { bubbles: true }))
  }
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
