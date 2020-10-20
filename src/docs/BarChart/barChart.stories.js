<<<<<<< HEAD



import BarChart from "./barChart.html";


=======
import BarChart from "./barChart.html";
>>>>>>> 6de80059b674032e9831189f932f230dddd07bec
import {barChartExample} from "./barChart"
import { useEffect } from "@storybook/client-api";

export default { title: 'Bar chart' }; 

export const barChart = () => {
  useEffect(() => {
    barChartExample()
  }, []);
  return BarChart
  
};
