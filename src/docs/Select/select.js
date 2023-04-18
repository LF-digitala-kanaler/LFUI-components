import { select } from '../../js/components/select.js'

export function selectExample(context) {
  if (!context) {
    return
  }

  for (const el of context.querySelectorAll('.select')) {
    select(el)
  }
}
