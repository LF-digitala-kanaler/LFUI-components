import { defineCustomElements } from '@duetds/date-picker/dist/loader'

defineCustomElements(window)

export const DEFAULTS = {
  firstDayOfWeek: 1,
  localization: {
    buttonLabel: 'Välj datum',
    placeholder: 'dd-mm-yyyy',
    selectedDateMessage: 'Valt datum',
    prevMonthLabel: 'Föregående månad',
    nextMonthLabel: 'Nästa månad',
    monthSelectLabel: 'månad',
    yearSelectLabel: 'år',
    closeLabel: 'Stäng',
    calendarHeading: 'Välj ett datum',
    dayNames: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
    monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
  }
}

/**
 * Initialize datepicker element
 * @param {HTMLInputElement} input The date input element
 * @param {object} [opts] Duet datepicker options
 * @returns {Element}
 */
export function datepicker (input, opts = input.dataset) {
  const customEl = document.createElement('duet-date-picker')

  if (input.id) customEl.setAttribute('identifier', input.id)

  for (const { name, value } of input.attributes) {
    if (name === 'type' || name === 'class') continue
    customEl.setAttribute(name, value)
  }

  const trigger = document.querySelector(`[aria-controls=${input.id}]`)
  if (trigger) {
    let isOpen = false

    customEl.classList.add('is-grouped')

    customEl.addEventListener('duetOpen', function onopen () {
      isOpen = true
      trigger.classList.add('active')
    })

    customEl.addEventListener('duetClose', function onclose () {
      isOpen = false
      trigger.classList.remove('active')
    })

    trigger.addEventListener('click', function () {
      if (isOpen) customEl.hide(false).then(() => trigger.focus())
      else customEl.show()
    })
  }

  Object.assign(customEl, DEFAULTS, opts)
  input.replaceWith(customEl)

  return customEl
}
