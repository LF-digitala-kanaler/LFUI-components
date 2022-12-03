import '../js/index.js'
import '../scss/docs.scss'

import { calloutExample } from './Callout/callout.js'
import { datepickerExample } from './Datepicker/datepicker.js'
import { monthpickerExample } from './Datepicker/monthpicker.jsx'
import { paginationExample } from './Pagination/pagination.js'
import { panelExample } from './Panel/panel.js'
import { popoverTooltipExample } from './PopoverTooltip/popovertooltip.js'
import { radioButtonsExample } from './RadioButtons/radioButtons.js'
import { selectExample } from './Select/select.js'
import { sliderExample } from './Slider/slider.js'
import { tableExample } from './Tables/table.js'
import { timelineExample } from './Timeline/timeline.js'
import { uploadExample } from './Upload/upload.js'
import { valueboxExample } from './ValueBox/valuebox.js'

// run your functions
export function initialize(context) {
  calloutExample(context)
  datepickerExample(context)
  monthpickerExample(context)
  paginationExample(context)
  panelExample(context)
  popoverTooltipExample(context)
  radioButtonsExample(context)
  selectExample(context)
  sliderExample(context)
  tableExample(context)
  timelineExample(context)
  uploadExample(context)
  valueboxExample(context)
}
