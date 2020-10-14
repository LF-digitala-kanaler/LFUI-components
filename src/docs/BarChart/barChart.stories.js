


import BarChart from "./barChart.html";


import {barChartExample} from "./barChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Bar chart' }; 

export const barChart = () => {
  useEffect(() => {
    barChartExample()
  }, []);
  return BarChart
  
};
