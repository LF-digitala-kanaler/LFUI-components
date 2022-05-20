import '../js/index.js'

import '../scss/DOCS.scss'

import { datepickerExample, timepickerExample } from './Datepicker/datepicker'
import { lineChartExample, lineChartVerticalLine } from './LineChart/lineChart'
import { barChartExample } from './BarChart/barChart'
import { calloutExample } from './Callout/callout'
import { donutChartExample } from './DonutChart/donutChart'
import { dropdownExample } from './Dropdown/dropdown'
import { mapChartExample } from './MapChart/mapChart'
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
import { xyPlotExample } from './xyPlot/xyPlot'

// run your functions
export function initialize() {
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
  lineChartVerticalLine()
  lineChartExample()
  donutChartExample()
  xyPlotExample()
  barChartExample()
  mapChartExample()
  navbarExample()
  valueboxExample()
  popoverTooltipExample()
}
