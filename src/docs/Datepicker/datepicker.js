import '../../js/components/timepicker.js'
import { datepicker } from '../../js/components/datepicker.js'

const datepickerExample = () => {
  const standard = document.getElementById('date-standard')
  datepicker(standard)

  const validated = document.getElementById('date-validated')
  const validatedGroup = validated.closest('.form-group')
  const validatedDuetEl = datepicker(validated)
  validatedDuetEl.addEventListener('duetChange', function ({ details }) {
    validatedGroup.classList.add('has-valid')
  })

  const weekdays = document.getElementById('date-weekdays')
  const weekdaysDuetEl = datepicker(weekdays)
  weekdaysDuetEl.isDateDisabled = function (date) {
    return date.getDay() % 6 === 0
  }

  const disabled = document.getElementById('date-disabled')
  datepicker(disabled)
}

const timepickerExample = () => {
  const dateOk = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])/
  $('#timepicker-input').datetimepicker({
    format: 'LT',
    locale: 'sv',
    allowInputToggle: true,
    icons: {
      up: 'next',
      down: 'prev'
    }
  })
  $('#timepicker-input').on('dp.show', function () {
    $('#timepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true')
    $('#timepicker button').addClass('active')
  })

  $('#timepicker-input').on('dp.hide', function () {
    $('#timepicker button').removeClass('active')
  })
  $('#timepicker-input').on('dp.hide', function () {
    $('#timepicker button').removeClass('active')
    const value = $('#timepicker-input').val()
    if (dateOk.test(value)) {
      $(this).find('input').addClass('form-control-valid')
      $(this).parent().addClass('has-valid')
    } else {
      $(this).parent().addClass('has-danger')
    }
  })
}

export { timepickerExample, datepickerExample }
