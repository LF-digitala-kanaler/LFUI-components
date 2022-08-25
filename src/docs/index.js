import '../js/index.js'
import '../scss/docs.scss'

import { datepickerExample } from './Datepicker/datepicker'
import { calloutExample } from './Callout/callout'
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
export function initialize(context) {
  datepickerExample(context)
  tableExample(context)
  calloutExample(context)
  priceBoxExample(context)
  selectExample(context)
  sliderExample(context)
  panelExample(context)
  uploadExample(context)
  timelineExample(context)
  navbarExample(context)
  valueboxExample(context)
  popoverTooltipExample(context)
}
