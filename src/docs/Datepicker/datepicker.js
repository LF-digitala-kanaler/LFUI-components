import { DEFAULTS, datepicker } from '../../js/components/datepicker.js'

const datepickerExample = () => {
  const standard = document.getElementById('date-standard')
  if (standard) datepicker(standard)

  const validated = document.getElementById('date-validated')
  if (validated) {
    const validatedGroup = validated.closest('.form-group')
    const validatedDuetEl = datepicker(validated)
    validatedDuetEl.addEventListener('duetChange', function ({ details }) {
      validatedGroup.classList.add('has-valid')
    })
  }

  const weekdays = document.getElementById('date-weekdays')
  if (weekdays) {
    const weekdaysDuetEl = datepicker(weekdays)
    weekdaysDuetEl.isDateDisabled = function (date) {
      return date.getDay() % 6 === 0
    }
  }

  const minmax = document.getElementById('date-minmax')
  if (minmax) datepicker(minmax)

  const disabled = document.getElementById('date-disabled')
  if (disabled) datepicker(disabled)

  const finnish = document.getElementById('date-finnish')
  if (finnish) {
    datepicker(finnish, {
      ...DEFAULTS,
      localization: {
        buttonLabel: 'Valitse päivämäärä',
        placeholder: 'pp.kk.vvvv',
        selectedDateMessage: 'Valittu päivämäärä on',
        prevMonthLabel: 'Edellinen kuukausi',
        nextMonthLabel: 'Seuraava kuukausi',
        monthSelectLabel: 'Kuukausi',
        yearSelectLabel: 'Vuosi',
        closeLabel: 'Sulje ikkuna',
        calendarHeading: 'Valitse päivämäärä',
        dayNames: [
          'Sunnuntai',
          'Maanantai',
          'Tiistai',
          'Keskiviikko',
          'Torstai',
          'Perjantai',
          'Lauantai'
        ],
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
        ],
        locale: 'fi-FI'
      }
    })
  }
}

export { datepickerExample }
