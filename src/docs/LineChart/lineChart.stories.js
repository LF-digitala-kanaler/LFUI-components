

import LineChart from "./lineChart.html";
import {lineChartExample} from "./lineChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Line Chart' }; 

export const lineChart = () => {
  useEffect(() => {
   lineChartExample()
  }, []);
  return LineChart
  
};

