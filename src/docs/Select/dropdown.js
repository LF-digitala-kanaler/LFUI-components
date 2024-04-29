import { A11yDropdown, LfDropdown, LfDropdownOption } from '../../js/components/a11yDropdown'

export function a11yDropdownExample(context) {
  if (!context) {
    return
  }

  for (const el of context.querySelectorAll('.a11ydropdown')) {
    const dropdown = new A11yDropdown(el)
    dropdown.open()
    document.body.addEventListener('dropdown.change', (event) => console.log('change event', event))
  }

  window.customElements.define('lf-dropdown-option', LfDropdownOption)
  window.customElements.define('lf-dropdown', LfDropdown)
}
