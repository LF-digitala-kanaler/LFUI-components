import { h, Ref } from '../utils'

/*
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);

*/

/*

  const Selectmenu = new LFmenu({
    multiselectable: false
    items: [
        { value: 'stockholm', label: 'Stockholm' },
        { value: 'göteborg', label: 'Göteborg' },
        { value: 'malmö', label: 'Malmö' },
        { value: 'skåne', label: 'Skåne' , disabled: true},
      ]
    },
    selected: [
      'stockholm'
    ],
  })

  const Menu = new LFmenu({
    multiselectable: false
    items: [
        { label: 'Stockholm', href:'/'},
        { label: 'Göteborg', href:'/' },
        { label: 'Malmö', href:'/' },
        { label: 'Skåne', href:'/' , disabled: true},
      ]
    }
  })

  Selectmenu.addEventListener('open', (event) => {})
  Selectmenu.addEventListener('close', (event) => {})
  Selectmenu.addEventListener('click', (event) => {
    console.log(event.target) // item the user clicked on
    console.log(event.selectedItems) // ['stockholm', 'malmö']
  })
*/

/*

  <lf-menu multiselectable="false">
    <lf-menu-item value="stockholm">
      Stockholm <small>2003 kr</small>
    </lf-menu-item>
    <lf-menu-item selected value="göteborg">
      Göteborg <small>1400 kr</small>
    </lf-menu-item>
    <lf-menu-item value="malmö">
      Malmö <small>4281 kr</small>
    </lf-menu-item>
    <lf-menu-item disabled value="skåne">
      Skåne <small>99 kr</small>
    </lf-menu-item>
  </lf-menu>

  <lf-menu>
    <lf-menu-item href="/">
      Stockholm
    </lf-menu-item>
    <lf-menu-item href="/">
      Göteborg
    </lf-menu-item>
    <lf-menu-item href="/">
      Malmö
    </lf-menu-item>
    <lf-menu-item  href="/" disabled>
      Skåne
    </lf-menu-item>
  </lf-dropdown>

  <lf-menu>
    <lf-menu-item>
      Stockholm
    </lf-menu-item>
    <lf-menu-item>
      Göteborg
    </lf-menu-item>
    <lf-menu-item>
      Malmö
    </lf-menu-item>
    <lf-menu-item disabled>
      Skåne
    </lf-menu-item>
  </lf-dropdown>

  <script>
    menu.addEventlistener('click', (event) => {})
  </script>

*/

export class LFdropdown {
  constructor(element, options = element.dataset) {
    this.id = Math.random().toString(36).substr(2, 9)
    this.config = this.getConfig(options)
    this.element = element
    this.isOpen = false
    this.multiselectable = options.multiselectable
    this.preventClose = this.multiselectable

    // Set up internal lookup mechanisms
    this.buttons = new WeakMap()
    this.groups = new WeakMap()
    this.selectAll = new Ref()
    this.status = new Ref()

    element.addEventListener('keydown', (event) => this.keydown(event))
  }

  /**
   * @param {SelectOptions} options
   * @returns {SelectOptions}
   */
  getConfig(options) {
    let { smallPattern, allLabel, groupToggle } = options

    if (smallPattern && !(smallPattern instanceof RegExp)) {
      smallPattern = new RegExp(smallPattern)
    }

    if (typeof groupToggle !== 'undefined') {
      groupToggle = groupToggle !== false
    }

    return { smallPattern, allLabel, groupToggle }
  }

  allButton() {
    return h(
      'button',
      {
        ref: this.selectAll,
        type: 'button',
        class: 'select-option multiple dropdown-item',
        onclick(event) {
          const selected = !allAreSelected(select)

          this.element.dispatchEvent(new window.Event('allSelected', { allSelected: selected }))
          event.preventDefault()
        }
      },
      config.allLabel
    )
  }

  renderList() {
    const { allLabel, groupToggle } = this.config
    const list = h(
      'ul',
      {
        id: `list-${this.id}`,
        role: 'listbox',
        tabindex: '-1',
        class: 'dropdown-list',
        'aria-labelledby': `dropdown-label-${this.id}`,
        'aria-multiselectable': this.multiselectable,
        hidden: true,
        // We want this later.
        // 'aria-activedescendant': select.selectedOptions[0].id,
        onclick() {
          // Disable automatic closing on click
          this.preventClose = this.preventClose || this.multiselectable
        }
      },
      [
        // Toggle all button
        this.multiselectable && allLabel
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
            if (groupToggle) {
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
              groupToggle ? 'div' : 'fieldset',
              {
                ref: wrapper,
                class: `select-group ${groupToggle ? 'show' : ''}`
              },
              [
                groupToggle
                  ? h(
                      'li',
                      {
                        role: 'option',
                        ref: button,
                        // type: 'button',
                        id: `group-${index}-trigger-${id}`,
                        class: `select-option ${
                          select.multiple ? 'multiple' : ''
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
              class: `select-option ${select.multiple ? 'multiple' : ''} ${
                selected ? 'selected select-option--selected' : ''
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
  }
}
