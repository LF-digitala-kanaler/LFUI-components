

import MapChart from "./mapChart.html";


import {mapChartExample} from "./mapChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Map chart' }; 

export const mapChart = () => {
  useEffect(() => {
   mapChartExample()
  }, []);
  return MapChart
  
};

