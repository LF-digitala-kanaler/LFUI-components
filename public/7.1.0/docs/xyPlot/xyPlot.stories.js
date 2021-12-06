import XyPlot from "./xyPlot.html";
import {xyPlotExample} from "./xyPlot"
import { useEffect } from "@storybook/client-api";

export default { title: 'XY Plot' }; 

export const xyPlot = () => {
  useEffect(() => {
    xyPlotExample()
  }, []);
  return XyPlot
  
};
