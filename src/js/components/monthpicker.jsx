// @ts-check

import { useId, useRef, useState, useEffect } from 'preact/hooks'
import register from 'preact-custom-element'
import { render } from 'preact'

import '@duetds/date-picker/dist/collection/components/duet-date-picker/duet-date-picker.css'

const FOCUSABLE =
  ':where(button, [href], input, select, textarea, [tabindex]):not([tabindex="-1"])'

/**
 * @typedef {object} Localization
 * @property {string} placeholder
 * @property {string} prevMonthLabel
 * @property {string} nextMonthLabel
 * @property {string} yearSelectLabel
 * @property {string} closeLabel
 * @property {string} calendarHeading
 * @property {string[]} monthNames
 * @property {string[]} monthNamesShort
 * @property {string} locale
 */

/** @type {Localization} */
export const LOCALIZATION = {
  placeholder: 'yyyy-mm',
  prevMonthLabel: 'Föregående månad',
  nextMonthLabel: 'Nästa månad',
  yearSelectLabel: 'år',
  closeLabel: 'Stäng',
  calendarHeading: 'Välj en månad',
  monthNames: [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maj',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec'
  ],
  locale: 'sv-SE'
}

/**
 * Initialize monthpicker element
 * @param {HTMLInputElement} input The date input element
 * @param {Localization} localization
 * @returns {HTMLDivElement}
 */
export function monthpicker(input, localization) {
  const div = document.createElement('div')
  div.classList.add('duet-month-picker')

  let open = false
  const update = (props) => render(<MonthPicker {...props} />, div)
  const close = () => {
    open = false
    update({ ...props, open })
  }
  const props = {
    localization,
    onchange: close,
    onfocus: close,
    onclose: close,
    onkeydown(event) {
      if (event.key === 'Escape') close()
    }
  }

  for (const { name, value } of input.attributes) {
    props[name] = value
  }

  const triggers = [...document.querySelectorAll(`[aria-controls=${input.id}]`)]

  for (const trigger of triggers) {
    trigger.addEventListener('click', function () {
      open = !open
      update({ ...props, open })
      trigger.classList.toggle('active', open)
    })
  }

  document.addEventListener('click', function onclick(event) {
    if (!open) return
    if (!div.isConnected) {
      document.removeEventListener('click', onclick)
      return
    }

    /** @type {HTMLElement|null} */
    let el = /** @type {HTMLElement} */ (event.target)
    while (el) {
      if (el === div || triggers.includes(el)) return
      el = /** @type {HTMLElement?} */ (el.parentNode)
    }

    open = false

    for (const trigger of triggers) {
      trigger.classList.remove('active')
    }

    update({ ...props, open })
  })

  update(props)

  input.replaceWith(div)

  return div
}

/**
 * @param {import('preact').RenderableProps<{ localization?: Localization, [key: string]: any }>} props
 * @returns {import('preact').VNode}
 */
export function MonthPicker(props) {
  const {
    localization = LOCALIZATION,
    open,
    onBlur,
    onblur,
    onChange,
    onchange,
    onClose,
    onclose,
    ...attrs
  } = props

  const id = useId()
  const initial = useRef(true)

  /** @type {import('preact').Ref<HTMLDivElement>} */
  const root = useRef(null)

  /** @type {import('preact').Ref<HTMLInputElement>} */
  const input = useRef(null)

  /** @type {import('preact').Ref<HTMLSelectElement>} */
  const select = useRef(null)

  /** @type {import('preact').Ref<HTMLButtonElement>} */
  const focused = useRef(null)

  const now = new Date()
  const fallback = { year: now.getFullYear(), month: now.getMonth() + 1 }

  const isOpen = toBool(open)
  const [value, _setValue] = useState(parse(attrs.value))
  const [selected, setSelected] = useState(value || fallback)
  const min = parse(attrs.min) || {
    year: now.getFullYear() - 10,
    month: 1
  }
  const max = parse(attrs.max) || {
    year: now.getFullYear() + 10,
    month: 12
  }

  const setValue = (value) => {
    _setValue(value)

    const str = value ? stringify(value) : null
    if (typeof onChange === 'function') onChange({ value: str })
    if (typeof onchange === 'function') onchange({ value: str })
  }

  const addSelectedMonths = (value) => {
    let { year, month } = selected
    month += value

    if (month < 1) {
      const diff = (month - 1) / 12
      year = Math.max(min.year, Math.floor(year + diff))
      month = 12 + month
      if (year === min.year) month = Math.max(min.month, month)
    } else if (month > 12) {
      const diff = month / 12
      year = Math.min(max.year, Math.floor(year + diff))
      month = month - 12
      if (year === max.year) month = Math.max(max.month, month)
    } else if (year === min.year || year === max.year) {
      month = Math.max(min.month, Math.min(max.month, month))
    }

    setSelected({ year, month })
  }

  // Contain focus within the month picker
  const onkeydown = (event) => {
    if (event.key !== 'Tab' || !isOpen) return
    /** @type {NodeListOf<HTMLElement> | []} */
    const nodes = root.current?.querySelectorAll(FOCUSABLE) || []
    const elements = [...nodes].filter((el) => el !== input.current)
    const index = elements.indexOf(event.target)
    if (!index && event.shiftKey) {
      elements[elements.length - 1].focus()
      event.preventDefault()
    } else if (index === elements.length - 1 && !event.shiftKey) {
      elements[0].focus()
      event.preventDefault()
    }
  }

  // Move focus on month change
  useEffect(() => focused.current?.focus(), [selected.month])

  // Update internal state when value changes
  useEffect(() => {
    // Bypass proxy to not trigger onchange
    if (!initial.current) _setValue(parse(attrs.value))
  }, [attrs.value])

  // Manage focus when open/close
  useEffect(
    function () {
      if (initial.current && !attrs.autofocus) return
      if (isOpen) {
        select.current?.focus()
      } else {
        input.current?.focus()
        setSelected(value || fallback)
      }
    },
    [isOpen]
  )

  useEffect(function () {
    initial.current = false
  }, [])

  return (
    <div className="duet-date" ref={root} onKeyDown={onkeydown}>
      <div className="duet-date__input-wrapper">
        <input
          {...attrs}
          ref={input}
          value={value ? stringify(value) : ''}
          onBlur={(event) => {
            // @ts-ignore
            const value = parse(event.target.value)

            if (value) {
              const { year, month } = value
              if (
                min.year > year ||
                (min.year === year && min.month > month) ||
                max.year < year ||
                (max.year === year && max.month < month)
              ) {
                setValue(null)
              } else {
                setValue(value)
              }
            } else {
              setValue(null)
            }

            if (typeof onBlur === 'function') onBlur(event)
            if (typeof onblur === 'function') onblur(event)
          }}
          className="duet-date__input"
          placeholder={localization.placeholder}
          aria-autocomplete="none"
          autocomplete="off"
          type="text"
        />
      </div>
      <div
        className={`duet-date__dialog ${isOpen ? 'is-active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden="false"
        aria-labelledby={`DuetDateLabel-${id}`}>
        <div className="duet-date__dialog-content">
          <div className="duet-date__mobile">
            <label className="duet-date__mobile-heading">
              {localization.calendarHeading}
            </label>
            <button
              className="duet-date__close"
              type="button"
              onClick={(event) => {
                if (typeof onClose === 'function') onClose()
                if (typeof onclose === 'function') onclose()
                event.preventDefault()
              }}>
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
              </svg>
              <span className="duet-date__vhidden">
                {localization.closeLabel}
              </span>
            </button>
          </div>
          <div className="duet-date__header">
            <div>
              <h2
                id={`DuetDateLabel-${id}`}
                className="duet-date__vhidden"
                aria-live="polite"
                aria-atomic="true">
                {selected.year}
              </h2>
              <label for={`DuetDateYear-${id}`} className="duet-date__vhidden">
                {localization.yearSelectLabel}
              </label>
              <div className="duet-date__select">
                <select
                  ref={select}
                  name="year"
                  id={`DuetDateYear-${id}`}
                  className="duet-date__select--year"
                  onChange={(event) =>
                    // @ts-ignore
                    setSelected({ ...selected, year: +event.target.value })
                  }>
                  {Array(max.year - min.year + 1)
                    .fill(null)
                    .map((_, i) => (
                      <option
                        key={`year-${i}`}
                        selected={selected.year === min.year + i}>
                        {min.year + i}
                      </option>
                    ))}
                </select>
                <div className="duet-date__select-label" aria-hidden="true">
                  <span>{selected.year}</span>
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24">
                    <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="duet-date__nav">
              <button
                className="duet-date__prev"
                type="button"
                disabled={min.year === selected.year}
                onClick={(e) =>
                  setSelected({ ...selected, year: selected.year - 1 })
                }>
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24">
                  <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"></path>
                </svg>
                <span className="duet-date__vhidden">
                  {localization.prevMonthLabel}
                </span>
              </button>
              <button
                className="duet-date__next"
                type="button"
                disabled={max.year === selected.year}
                onClick={(e) =>
                  setSelected({ ...selected, year: selected.year + 1 })
                }>
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24">
                  <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path>
                </svg>
                <span className="duet-date__vhidden">
                  {localization.nextMonthLabel}
                </span>
              </button>
            </div>
          </div>
          <table
            className="duet-date__table"
            aria-labelledby={`DuetDateLabel-${id}`}>
            <tbody>
              {Array(4)
                .fill(null)
                .map((_, row) => (
                  <tr key={`row-${row}`} className="duet-date__row">
                    {Array(3)
                      .fill(null)
                      .map((_, col) => {
                        const month = row * 3 + col + 1
                        const isSelected = month === selected.month
                        return (
                          <td key={`month-${col}`} className="duet-date__cell">
                            <button
                              className="duet-date__day is-month"
                              value={stringify({ ...selected, month })}
                              ref={isSelected ? focused : null}
                              tabIndex={isSelected ? 0 : -1}
                              type="button"
                              aria-pressed={
                                value?.year === selected.year &&
                                value?.month === month
                                  ? 'true'
                                  : 'false'
                              }
                              onClick={(e) => setValue({ ...selected, month })}
                              onKeyDown={(event) => {
                                const { key } = event
                                if (key === 'Enter') {
                                  setValue(selected)
                                } else {
                                  const add = getMonthForKey(
                                    key,
                                    selected.month
                                  )
                                  if (add != null) addSelectedMonths(add)
                                }
                              }}>
                              <span aria-hidden="true">
                                {localization.monthNames[row * 3 + col]}
                              </span>
                              <span class="duet-date__vhidden">
                                {localization.monthNames[row * 3 + col]}{' '}
                                {selected.year}
                              </span>
                            </button>
                          </td>
                        )
                      })}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/**
 * @param {string} key
 * @param {number} current
 * @returns {number?}
 */
function getMonthForKey(key, current) {
  switch (key) {
    case 'Down':
    case 'ArrowDown':
      return 3
    case 'Up':
    case 'ArrowUp':
      return -3
    case 'Left':
    case 'ArrowLeft':
      return -1
    case 'Right':
    case 'ArrowRight':
      return 1
    case 'Home':
      return current * -1 + 1
    case 'End':
      return 12 - current
    case 'PageUp':
      return -12
    case 'PageDown':
      return 12
  }
  return null
}

/** @type {function(string | void): { year: number, month: number }?} */
function parse(str) {
  const values = str?.split('-').map(Number)
  if (values?.length !== 2 || values.some(isNaN)) return null
  const [year, month] = values
  return { year, month }
}

/** @type {function(any): boolean} */
function toBool(value) {
  return value != null && value !== '' && JSON.parse(value) !== false
}

/** @type {function({ year: number, month: number }): string} */
function stringify({ year, month }) {
  return `${year}-${('0' + month).slice(-2)}`
}

register(
  MonthPicker,
  'duet-month-picker',
  [
    'value',
    'open',
    'onChange',
    'onchange',
    'onBlur',
    'onblur',
    'onFocus',
    'onfocus',
    'onClose',
    'onclose'
  ],
  { shadow: false }
)
