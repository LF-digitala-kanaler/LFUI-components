import { select } from '../../js/components/select.js'

export function selectExample() {
  for (const el of document.querySelectorAll('.select')) {
    select(el)
  }
}
