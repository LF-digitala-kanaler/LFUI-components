import { LOCALIZATION, monthpicker } from '../../js/components/monthpicker.jsx'

const monthpickerExample = () => {
  const standard = document.getElementById('date-month')
  if (standard) monthpicker(standard)
}

export { monthpickerExample }
