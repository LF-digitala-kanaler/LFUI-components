import { DEFAULTS, monthpicker } from '../../js/components/monthpicker.jsx'

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
      localization: {
        ...DEFAULTS,
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
      }
    })
  }
}

export { monthpickerExample }
