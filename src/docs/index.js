import '../js/index.js'

import '../scss/DOCS.scss'

import { datepickerExample, timepickerExample } from './Datepicker/datepicker'
import { calloutExample } from './Callout/callout'
import { dropdownExample } from './Dropdown/dropdown'
import { navbarExample } from './Navbar/navbar'
import { panelExample } from './Panel/panel'
import { popoverTooltipExample } from './PopoverTooltip/popovertooltip'
import { priceBoxExample } from './PriceBox/pricebox'
import { selectExample } from './Select/select'
import { sliderExample } from './Slider/slider'
import { tableExample } from './Tables/table'
import { timelineExample } from './Timeline/timeline'
import { uploadExample } from './Upload/upload'
import { valueboxExample } from './ValueBox/valuebox'

// run your functions
export function initialize () {
  timepickerExample()
  datepickerExample()
  tableExample()
  dropdownExample()
  calloutExample()
  priceBoxExample()
  selectExample()
  sliderExample()
  panelExample()
  uploadExample()
  timelineExample()
  navbarExample()
  valueboxExample()
  popoverTooltipExample()
}
