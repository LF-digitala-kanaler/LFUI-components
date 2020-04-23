

import PieChart from "./pieChart.html";


import {pieChartExample} from "./pieChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Pie Chart' }; 

export const pieChart = () => {
  useEffect(() => {
   pieChartExample()
  }, []);
  return PieChart
  
};

