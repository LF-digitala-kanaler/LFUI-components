/**
 * MARKDOWN:
 * <ul id="uniqID" role="listbox">
 *  <li role="option" aria-selected="true">Select city</li>
 *  <li role="option">Stockholm</li>
 *  <li role="option">Göteborg</li>
 *  <li role="option">Malmö</li>
 * </ul>
 */

const preventDefaultOnKeys = ['Enter', ' ', 'Escape', 'Tab', 'ArrowDown', 'ArrowUp', 'Home', 'End']

export class A11yDropdown {
  constructor(element, options = element.dataset) {
    this.element = element
    this.isOpen = false
    this.controledBy = document.querySelector(`[aria-controls="${this.id}"]`)

    element.addEventListener('keydown', (event) => this.keydown(event))
  }

  /**
   * Set focus on item.
   * @param {String | Element } position ...
   */
  moveFocus(target) {
    const element = this.element

    if (typeof target === 'object') {
      if (
        target.classList.contains('select-option') &&
        !target.classList.contains('select-option--focus')
      ) {
        this.element.querySelector('.select-option--focus').classList.remove('select-option--focus')
        target.classList.add('select-option--focus')
      }
    }

    if (target === 'selected') {
      element.querySelector('.select-option--selected').classList.add('select-option--focus')
    }

    if (target === 'next') {
      const focusedItem = element.querySelector('.select-option--focus')
      if (!focusedItem.nextElementSibling) {
        element.firstElementChild.classList.add('select-option--focus')
      } else {
        focusedItem.nextElementSibling.classList.add('select-option--focus')
      }

      focusedItem.classList.remove('select-option--focus')
    }
    if (target === 'prev') {
      const focusedItem = element.querySelector('.select-option--focus')
      if (!focusedItem.previousElementSibling) {
        element.lastElementChild.classList.add('select-option--focus')
      } else {
        focusedItem.previousElementSibling.classList.add('select-option--focus')
      }
      focusedItem.classList.remove('select-option--focus')
    }
    if (target === 'first') {
      const focusedItem = element.querySelector('.select-option--focus')
      element.firstElementChild.classList.add('select-option--focus')
      focusedItem.classList.remove('select-option--focus')
    }
    if (target === 'last') {
      const focusedItem = element.querySelector('.select-option--focus')
      element.lastElementChild.classList.add('select-option--focus')
      focusedItem.classList.remove('select-option--focus')
    }

    setTimeout(function () {
      element.setAttribute(
        'aria-activedescendant',
        element.querySelector('.select-option--focus').id
      )

      // For webkit (announces selected on all options though...)
      // element.querySelector('[aria-selected="true"]').setAttribute('aria-selected','false');
      // element.querySelector('.select-option--focus').setAttribute('aria-selected','false');

      // Set focus on option.. works better for webkit
      element.querySelector('.select-option--focus').focus()
    }, 0)
  }

  /**
   * Toggle visibillity of the dropdown.
   */
  toggle() {
    return this.isOpen ? this.close() : this.open()
  }

  open() {
    const element = this.element

    if (this.controledBy) {
      this.controledBy.setAttribute('tabindex', '-1')
      this.controledBy.setAttribute('aria-expanded', 'true') // maybe not needed in dropdown but should be in select.
    }

    element.removeAttribute('hidden')
    this.moveFocus('selected')
    this.isOpen = true

    console.log('open select')

    // if (window.innerHeight - toggle.getBoundingClientRect().bottom < toggle.scrollHeight) {
    //   element.classList.add('axs-select__list--top')
    // }
    // This is part of select component.

    this.clickOutsideEventListener = document.addEventListener('click', ({ target }) => {
      // TODO: We probably need a toggler element as option for this to work.
      //   if (target !== this.controledBy && target !== element && !element.contains(target)) {
      //     this.close()
      //   }
    })

    this.hoverFocusEventListener = element.addEventListener('mouseover', ({ target }) => {
      if (target.classList.contains('select-option') || target.closest('.select-option')) {
        const item = target.classList.contains('select-option')
          ? target
          : target.closest('.select-option')
        this.moveFocus(item)
      }
    })
  }

  close() {
    const element = this.element
    element.setAttribute('hidden', true)
    element.classList.remove('axs-select__list--top')

    if (this.controledBy) {
      //  ---- TODO: Dispatch event to be able to set focus on select toggle
      this.controledBy.setAttribute('aria-expanded', 'false')
    }

    const items = element.querySelectorAll('.axs-select__list-item')

    for (const item of items) {
      item.classList.remove('axs-select__list-item--focus')
    }

    this.isOpen = false
    document.removeEventListener('click', this.clickOutsideEventListener)
    document.removeEventListener('mouseover', this.hoverFocusEventListener)

    setTimeout(function () {
      if (this.controledBy) {
        //  ---- TODO: Dispatch event to be able to set focus on select toggle
        this.controledBy.setAttribute('tabindex', '0')
      }
    }, 0)
  }

  /**
   * Handle key navigation when the dropdown has focus.
   */
  keydown(event) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        this.moveFocus(this.element.querySelector('.select-option--focus'))

        console.log('Selected item', this.element.querySelector('.select-option--focus'))
        this.element.dispatchEvent(
          new window.CustomEvent('dropdown.change', {
            bubbles: true,
            detail: { selected: this.element.querySelector('.select-option--focus') }
          })
        )

        if (this.controledBy) {
          this.controledBy.focus()
        }
        // ---- TODO: Dispatch event to be able to set focus on select toggle
        break

      case 'Escape':
        this.close()
        if (this.controledBy) {
          this.controledBy.focus()
        }
        //   toggle.focus() ---- TODO: Dispatch event to be able to set focus on select toggle
        break

      case 'Tab':
        this.close()
        break

      case 'ArrowDown':
        this.moveFocus('next')
        break

      case 'ArrowUp':
        this.moveFocus('prev')
        break

      case 'Home':
        this.moveFocus('first')
        break

      case 'End':
        this.moveFocus('last')
        break
    }

    if (preventDefaultOnKeys.includes(event.key)) {
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
  }
}

export class LfDropdown extends HTMLElement {
  static get observedAttributes() {
    return ['open']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attribute changed', name, newValue)
    switch (name) {
      case 'open':
        this.isOpen = newValue
        if (newValue) {
          this.open()
        } else {
          this.close()
        }
        break
    }
  }

  connectedCallback() {
    this.querySelectorAll('lf-dropdown-option').forEach((option, index) => {
      console.log('item', option)
      option.id = `${this.id}-${index}`
    })

    this.role = 'listbox'
    this.setAttribute('tabindex', '-1')

    this.addEventListener('click', () => console.log('click'))
    this.addEventListener('keydown', (event) => this.keydown(event))

    this.isOpen = this.getAttribute('open')
    this.controledBy = document.querySelector(`[aria-controls="${this.id}"]`)
  }

  /**
   * Set focus on item.
   * @param {String | Element } position ...
   */
  moveFocus(target) {
    const element = this

    if (typeof target === 'object') {
      if (
        target.classList.contains('select-option') &&
        !target.classList.contains('select-option--focus')
      ) {
        element.querySelector('.select-option--focus').classList.remove('select-option--focus')
        target.classList.add('select-option--focus')
      }
    }

    if (target === 'selected') {
      console.log(element.querySelector('.select-option--selected'), element)
      element.querySelector('.select-option--selected').classList.add('select-option--focus')
    }

    if (target === 'next') {
      const focusedItem = element.querySelector('.select-option--focus')
      if (!focusedItem.nextElementSibling) {
        element.firstElementChild.classList.add('select-option--focus')
      } else {
        focusedItem.nextElementSibling.classList.add('select-option--focus')
      }

      focusedItem.classList.remove('select-option--focus')
    }
    if (target === 'prev') {
      const focusedItem = element.querySelector('.select-option--focus')
      if (!focusedItem.previousElementSibling) {
        element.lastElementChild.classList.add('select-option--focus')
      } else {
        focusedItem.previousElementSibling.classList.add('select-option--focus')
      }
      focusedItem.classList.remove('select-option--focus')
    }
    if (target === 'first') {
      const focusedItem = element.querySelector('.select-option--focus')
      element.firstElementChild.classList.add('select-option--focus')
      focusedItem.classList.remove('select-option--focus')
    }
    if (target === 'last') {
      const focusedItem = element.querySelector('.select-option--focus')
      element.lastElementChild.classList.add('select-option--focus')
      focusedItem.classList.remove('select-option--focus')
    }

    setTimeout(function () {
      element.setAttribute(
        'aria-activedescendant',
        element.querySelector('.select-option--focus').id
      )

      // For webkit (announces selected on all options though...)
      // element.querySelector('[aria-selected="true"]').setAttribute('aria-selected','false');
      // element.querySelector('.select-option--focus').setAttribute('aria-selected','false');

      // Set focus on option.. works better for webkit
      element.querySelector('.select-option--focus').focus()
    }, 0)
  }

  /**
   * Toggle visibillity of the dropdown.
   */
  toggle() {
    return this.isOpen ? this.close() : this.open()
  }

  open() {
    const element = this

    if (this.controledBy) {
      this.controledBy.setAttribute('tabindex', '-1')
      this.controledBy.setAttribute('aria-expanded', 'true') // maybe not needed in dropdown but should be in select.
    }

    element.removeAttribute('hidden')
    this.moveFocus('selected')
    this.isOpen = true

    console.log('open LF Dropdown')

    // if (window.innerHeight - toggle.getBoundingClientRect().bottom < toggle.scrollHeight) {
    //   element.classList.add('axs-select__list--top')
    // }
    // This is part of select component.

    this.clickOutsideEventListener = document.addEventListener('click', ({ target }) => {
      // TODO: We probably need a toggler element as option for this to work.
      //   if (target !== this.controledBy && target !== element && !element.contains(target)) {
      //     this.close()
      //   }
    })

    this.hoverFocusEventListener = element.addEventListener('mouseover', ({ target }) => {
      if (target.classList.contains('select-option') || target.closest('.select-option')) {
        const item = target.classList.contains('select-option')
          ? target
          : target.closest('.select-option')
        this.moveFocus(item)
      }
    })
  }

  close() {
    const element = this
    element.setAttribute('hidden', true)
    element.classList.remove('axs-select__list--top')

    if (this.controledBy) {
      //  ---- TODO: Dispatch event to be able to set focus on select toggle
      this.controledBy.setAttribute('aria-expanded', 'false')
    }

    const items = element.querySelectorAll('.axs-select__list-item')

    for (const item of items) {
      item.classList.remove('axs-select__list-item--focus')
    }

    this.isOpen = false
    document.removeEventListener('click', this.clickOutsideEventListener)
    document.removeEventListener('mouseover', this.hoverFocusEventListener)

    setTimeout(function () {
      if (this.controledBy) {
        //  ---- TODO: Dispatch event to be able to set focus on select toggle
        this.controledBy.setAttribute('tabindex', '0')
      }
    }, 0)
  }

  /**
   * Handle key navigation when the dropdown has focus.
   */
  keydown(event) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        this.moveFocus(this.querySelector('.select-option--focus'))

        console.log('Selected item', this.querySelector('.select-option--focus'))

        if (this.controledBy) {
          this.controledBy.focus()
        }
        // ---- TODO: Dispatch event to be able to set focus on select toggle
        break

      case 'Escape':
        this.close()
        if (this.controledBy) {
          this.controledBy.focus()
        }
        //   toggle.focus() ---- TODO: Dispatch event to be able to set focus on select toggle
        break

      case 'Tab':
        this.close()
        break

      case 'ArrowDown':
        this.moveFocus('next')
        break

      case 'ArrowUp':
        this.moveFocus('prev')
        break

      case 'Home':
        this.moveFocus('first')
        break

      case 'End':
        this.moveFocus('last')
        break
    }

    if (preventDefaultOnKeys.includes(event.key)) {
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
  }
}

export class LfDropdownOption extends HTMLElement {
  connectedCallback() {
    this.setAttribute('tabindex', '-1')
    this.role = 'option'
    this.classList.add('select-option')
    this.selected = this.getAttribute('selected') !== null
  }

  static get observedAttributes() {
    return ['selected']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attribute changed', name, newValue)
    switch (name) {
      case 'selected':
        this.selected = newValue
        if (newValue) {
          this.classList.add('select-option--selected')
        } else {
          this.classList.remove('select-option--selected')
        }
        break
    }
  }
}
