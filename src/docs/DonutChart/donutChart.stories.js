

import DonutChart from "./donutChart.html";


import {donutChartExample} from "./donutChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Donut Chart' }; 

export const donutChart = () => {
  useEffect(() => {
   donutChartExample()
  }, []);
  return DonutChart
  
};

