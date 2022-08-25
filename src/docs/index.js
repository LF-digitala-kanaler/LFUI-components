import '../js/index.js'
import '../scss/docs.scss'

import { calloutExample } from './Callout/callout'
import { datepickerExample } from './Datepicker/datepicker'
import { navbarExample } from './Navbar/navbar'
import { paginationExample } from './Pagination/pagination'
import { panelExample } from './Panel/panel'
import { popoverTooltipExample } from './PopoverTooltip/popovertooltip'
import { priceBoxExample } from './PriceBox/pricebox'
import { radioButtonsExample } from './RadioButtons/radioButtons'
import { selectExample } from './Select/select'
import { sliderExample } from './Slider/slider'
import { tableExample } from './Tables/table'
import { timelineExample } from './Timeline/timeline'
import { uploadExample } from './Upload/upload'
import { valueboxExample } from './ValueBox/valuebox'

// run your functions
export function initialize(context) {
  calloutExample(context)
  datepickerExample(context)
  navbarExample(context)
  paginationExample(context)
  panelExample(context)
  popoverTooltipExample(context)
  priceBoxExample(context)
  radioButtonsExample(context)
  selectExample(context)
  sliderExample(context)
  tableExample(context)
  timelineExample(context)
  uploadExample(context)
  valueboxExample(context)
}
