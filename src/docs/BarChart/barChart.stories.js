


import BarChart from "./barChart.html";


import {barChartExample} from "./barChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Bar Chart' }; 

export const barChart = () => {
  useEffect(() => {
   barChartExample()
  }, []);
  return BarChart
  
};
