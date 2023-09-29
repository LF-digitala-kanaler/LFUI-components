// import { select } from '../../js/components/select.js'
import { Select } from '../../js/components/select_new.js'

export function selectExample(context) {
  if (!context) {
    return
  }

  context.addEventListener('change', (event) => console.log('change!', [...event.target.selectedOptions].map((option) => option.value)))

  for (const el of context.querySelectorAll('.select')) {
    new Select(el)
  }
}
