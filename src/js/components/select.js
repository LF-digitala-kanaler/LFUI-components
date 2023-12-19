import { h, Ref, uid } from '../utils'

const initialized = new WeakSet()

// For backward compatibility
export function select(element, opts = element.dataset) {
  return new Select(element, opts)
}

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

    // Search
    this.keyString = ''
    this.typingTimer = undefined

    this._menuItems = new WeakMap()
    this._groups = new WeakMap()
    this._selectAll = new Ref()
    this._status = new Ref()

    if (!this.label || !this.select || this.select.disabled || initialized.has(element)) {
      return
    }

    this.initiallySelected = [...this.select.selectedOptions]
    this.placeholder = this.select.querySelector('option[value=""][disabled]')
    this.initiallyValid = this.initiallySelected.filter((child) => !isPlaceholder(child))
    setValidState(this.select, this.initiallyValid.length)

    this.toggle = this.createToggle()
    this.list = this.createOptionList()

    this.selectableItems = [...this.list.querySelectorAll('.select-option')]
    this.searchableItems = this.selectableItems.filter((item) => {
      return !item.classList.contains('toggle')
    })
    // Update status and labels on change
    this.select.addEventListener('change', (event) => {
      this.onChangeHandler(event)
    })

    // Update DOM
    element.classList.add('initialized')
    this.label.id = `dropdown-label-${this.id}`
    this.select.after(this.toggle, this.list)
    // Cache element to prevent double initialization
    initialized.add(element)

    this.initMarkupChangeObserver()
  }

  initMarkupChangeObserver() {
    const callback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          const frag = document.createDocumentFragment()
          frag.append(...this.createOptions().filter((item) => item))
          this.list.innerHTML = ''
          this.list.append(frag)
          this.placeholder = this.select.querySelector('option[value=""][disabled]')
          this.selectableItems = [...this.list.querySelectorAll('.select-option')]
          this.searchableItems = this.selectableItems.filter((item) => {
            return !item.classList.contains('toggle')
          })

          this.select.dispatchEvent(new window.Event('change'))
        }
      }
    }

    // Create an observer instance linked to the callback function
    const observer = new window.MutationObserver(callback)

    // Start observing the target node for configured mutations
    observer.observe(this.select, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: true
    })
  }

  resolveSibling(item, position) {
    const itemCount = this.selectableItems.length - 1
    const itemIndex = this.selectableItems.findIndex((i) => i === item)

    if (position === 'next') {
      if (itemIndex === itemCount) {
        return this.selectableItems[0]
      } else {
        return this.selectableItems[itemIndex + 1]
      }
    }

    if (position === 'prev') {
      if (itemIndex === 0) {
        return this.selectableItems[itemCount]
      } else {
        return this.selectableItems[itemIndex - 1]
      }
    }
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
      const selectedItem =
        list.querySelector('.select-option--selected') || list.querySelector('.select-option')
      selectedItem.classList.add('select-option--focus')
    }

    if (position === 'next' || position === 'prev') {
      const newFocusItem = this.resolveSibling(focusedItem, position)

      focusedItem.classList.remove('select-option--focus')
      newFocusItem.classList.add('select-option--focus')
    }

    setTimeout(() => {
      list.setAttribute('aria-activedescendant', list.querySelector('.select-option--focus').id)

      // Set focus on option.. works better for webkit
      this.list.querySelector('.select-option--focus').focus({ visible: true })
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
    const next = items.length
      ? concatLabels(items, this.config.smallPattern, this.multiselectable)
      : ['']

    for (const child of rest) child.remove()
    first.replaceWith(...next)
  }

  onClickHandler({ target }) {
    if (target.classList.contains('select-option') || target.closest('.select-option')) {
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
      } else if (item.classList.contains('toggle')) {
        this.toggleGroup(item)
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
    if (/^.$/u.test(event.key)) {
      this.keyString += event.key
      clearTimeout(this.typingTimer)
      if (this.keyString) {
        const matchedItems = this.search()
        this.moveFocusTo(matchedItems[0])
        this.typingTimer = setTimeout(() => {
          this.keyString = ''
        }, 250)
      }

      event.stopPropagation()
    }
  }

  search() {
    return this.searchableItems.filter((item) => {
      const regex = new RegExp('^' + this.keyString, 'gi')
      return item.textContent.match(regex)
    })
  }

  toggleGroup(item) {
    const group = item.closest('.select-group')

    const expanded = item.getAttribute('aria-expanded') === 'true'
    const options = group.querySelectorAll('.select-list > .select-option')

    if (expanded) {
      group.classList.remove('show')
      options.forEach((option) => option.setAttribute('aria-disabled', true))
    } else {
      group.classList.add('show')
      options.forEach((option) => option.setAttribute('aria-disabled', false))
    }

    this.moveFocusTo(item)
    this.selectableItems = [
      ...this.list.querySelectorAll(
        '.select-group:not(.show) .select-option.toggle, .select-group.show .select-option'
      )
    ]

    item.setAttribute('aria-expanded', !expanded)
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
            ref: this._status
          },
          [h('span')]
            .concat(
              this.initiallyValid.length
                ? concatLabels(this.initiallyValid, this.config.smallPattern, this.multiselectable)
                : this.placeholder
                ? resolveLabel(
                    this.placeholder.label,
                    this.config.smallPatter,
                    this.multiselectable
                  )
                : ''
            )
            .concat([h('span')])
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
    const { id, select } = this
    const list = h(
      'div',
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
      this.createOptions()
    )

    list.addEventListener('keydown', (event) => this.onKeydownHandler(event))
    list.addEventListener('click', (event) => this.onClickHandler(event))

    return list
  }

  createOptions() {
    const { id, select, config, _selectAll } = this

    return [
      // Toggle all button
      select.multiple && config.allLabel
        ? h(
            'span',
            {
              ref: _selectAll,
              role: 'option',
              id: `select-all-option-${id}`,
              class: 'select-option select-all-options multiple',
              'aria-selected': allAreSelected(select),
              tabindex: '-1',
              onclick: (event) => {
                this.toggleAll()
                event.preventDefault()
                event.target.Element.setAttribute('aria-selected'.allAreSelected(select))
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
      ...[...select.children].map((child, index) => this.createListItem(child, index))
    ]
  }

  createListItem(child, index) {
    if (child.nodeName === 'OPTGROUP') {
      return this.createGroup(child, index)
    }

    return this.createOptionItem(child, index)
  }

  createOptionItem(child, index) {
    // Don't include the typical leading placeholder option
    // E.g. <option value="" disabled selected>Choose something</option>
    if (isPlaceholder(child, index)) return null

    const { label, disabled, selected } = child

    // Add to internal element reverse lookup table
    const itemRef = new Ref()
    this._menuItems.set(child, itemRef)

    const listItem = h(
      'span',
      {
        id: `select-option-${index}-${this.id}`,
        'aria-disabled': disabled,
        ref: itemRef,
        // type: 'button',
        role: 'option',
        'aria-selected': selected,
        tabindex: '-1',
        class: `select-option ${this.select.multiple ? 'multiple' : ''} ${
          selected ? 'selected select-option--selected' : ''
        }`
      },
      resolveLabel(label, this.config.smallPattern, disabled ? '' : undefined)
    )

    // store reference to the option element.
    listItem._selectElement = child
    return listItem
  }

  createGroup(child, index) {
    const { config, id } = this
    const label = resolveLabel(child.label, config.smallPattern)
    let children = [...child.children].map((c, i) => this.createListItem(c, i))
    const wrapper = new Ref()
    const button = new Ref()
    let expanded = true

    // Wrap children in a dropdown menu
    if (config.groupToggle) {
      const group = h(
        'div',
        {
          id: `group-${index}-list-${id}`,
          class: 'select-list',
          'aria-labelledby': `group-${index}-trigger-${id}`,
          role: 'listbox'
        },
        children
      )

      // Add to internal lookup table)
      for (const option of child.children) {
        this._groups.set(option, button)
      }

      // Wrap children
      children = [group]
    }

    return h(
      config.groupToggle ? 'div' : 'fieldset',
      {
        ref: wrapper,
        class: `select-group ${config.groupToggle ? 'show' : ''}`,
        role: config.groupToggle ? 'group' : '',
        'aria-labelledby': `group-${index}-trigger-${id}`
      },
      [
        config.groupToggle
          ? h(
              'button',
              {
                // role: 'option',
                type: 'button',
                ref: button,
                id: `group-${index}-trigger-${id}`,
                class: `select-option select-group-toggle ${
                  select.multiple ? 'multiple' : ''
                } toggle`,
                'aria-expanded': expanded,
                tabindex: '-1',
                'aria-controls': `group-${index}-list-${id}`,
                onclick() {
                  expanded = !expanded

                  this.setAttribute('aria-expanded', expanded ? 'true' : 'false')
                  wrapper.current.classList.toggle('show', expanded)

                  // Disable automatic closing on click
                  this.preventClose = true
                }
              },
              label
            )
          : h('legend', { class: 'select-legend' }, label),
        ...children
      ]
    )
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
        const item = target.closest('.select-option')
        if (item) {
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
        if (item.selectElement) {
          item._selectElement.selected = false
        }
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
  const { value, disabled } = option
  return !value && disabled
}

/**
 * @param {Node} select
 * @returns {boolean}
 */
function allAreSelected(select) {
  console.log(
    select.selectedOptions.length,
    select.options.length,
    select.selectedOptions.length === select.options.length
  )
  return select.selectedOptions.length === select.options.length
}

/**
 * @param {Node[]} labels
 * @param {RegExp} regexp
 * @returns {(string | Node)[]}
 */
function concatLabels(labels, regexp, isMulti) {
  const clabel = labels.reduce(function (acc, child) {
    if (acc.length) acc.push(', ')
    acc.push(...resolveLabel(child.label, regexp))
    return acc
  }, [])

  const chooseText = labels.length > 1 ? 'valda' : 'vald'

  return [
    h(
      'span',
      {
        class: 'sr-only'
      },
      isMulti ? `${labels.length} ${chooseText} ` : ''
    ),
    ...clabel,
    h(
      'span',
      {
        class: 'select-count',
        'aria-hidden': true
      },
      isMulti ? labels.length : ''
    )
  ]
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
