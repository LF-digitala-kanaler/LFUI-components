import { select } from '../../js/components/select.js'

export function selectExample(context) {
  if (!context) {
    return
  }

  context.addEventListener('change', (event) => console.log('change!', [...event.target.selectedOptions].map((option) => option.value)))

  for (const el of context.querySelectorAll('.select')) {
    select(el)
  }
}
