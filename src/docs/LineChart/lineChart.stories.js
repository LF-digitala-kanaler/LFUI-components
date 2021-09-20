import { lineChartExample, lineChartVerticalLine } from "./lineChart"

import LineChart from "./lineChart.html";
import { useEffect } from "@storybook/client-api";

export default { title: 'Line Chart' };

export const lineChart = () => {
  useEffect(() => {
    lineChartVerticalLine()
    lineChartExample()
  }, []);
  return LineChart

};
