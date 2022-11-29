import { render } from 'react-dom'
import { useState } from 'react'

import {
  LOCALIZATION,
  Monthpicker,
  monthpicker
} from '../../js/components/monthpicker.jsx'

const monthpickerExample = () => {
  const standard = document.getElementById('date-month')
  if (standard) monthpicker(standard)

  const minmax = document.getElementById('date-month-minmax')
  if (minmax) monthpicker(minmax)

  const validated = document.getElementById('date-month-validated')
  if (validated) {
    const validatedGroup = validated.closest('.form-group')
    const container = monthpicker(validated)
    container.addEventListener('change', () => {
      validatedGroup.classList.add('has-valid')
    })
  }

  const localized = document.getElementById('date-month-localized')
  if (localized) {
    monthpicker(localized, {
      ...LOCALIZATION,
      buttonLabel: 'Valitse päivämäärä',
      placeholder: 'vvvv-kk',
      prevYearLabel: 'Edellinen vuosi',
      nextYearLabel: 'Ensi vuonna',
      yearSelectLabel: 'Vuosi',
      closeLabel: 'Sulje ikkuna',
      calendarHeading: 'Valitse päivämäärä',
      monthNames: [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäkuu',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu'
      ],
      monthNamesShort: [
        'Tammi',
        'Helmi',
        'Maalis',
        'Huhti',
        'Touko',
        'Kesä',
        'Heinä',
        'Elo',
        'Syys',
        'Loka',
        'Marras',
        'Joulu'
      ]
    })
  }

  const wc = document.querySelector('[aria-controls="date-month-wc"]')
  if (wc) {
    let open = false
    const monthpicker = document.getElementById('date-month-wc')
    const toggle = (next = !open) => {
      monthpicker.open = open = next
      wc.classList.toggle('active', open)
    }
    monthpicker.onclose = () => toggle(false)
    wc.addEventListener('click', () => toggle())
  }

  const container = document.getElementById('date-month-react')
  if (container) {
    render(<App />, container)

    function App() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <div class="duet-month-picker">
            <Monthpicker
              open={open}
              id="date-month-react-input"
              onclose={() => setOpen(false)}
              onClose={() => setOpen(false)}
            />
          </div>
          <span class="input-group-append">
            <button
              class="btn"
              type="button"
              aria-controls="date-month-react-input"
              title="Välj månad"
              onClick={() => setOpen(!open)}>
              <svg class="icon" width="26" height="26">
                <use href="lf-icons/sprite/special/icons.svg#calendar-26"></use>
              </svg>
            </button>
          </span>
        </>
      )
    }
  }
}

export { monthpickerExample }
