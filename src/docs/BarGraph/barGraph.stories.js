


import BarGraph from "./barGraph.html";


import {barGraphExample} from "./barGraph"
import { useEffect } from "@storybook/client-api";

export default { title: 'Bar Graph' }; 

export const barGraph = () => {
  useEffect(() => {
   barGraphExample()
  }, []);
  return BarGraph
  
};
