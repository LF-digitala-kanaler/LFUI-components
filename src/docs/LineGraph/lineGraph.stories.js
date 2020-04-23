

import LineGraph from "./lineGraph.html";


import {lineGraphExample} from "./lineGraph"
import { useEffect } from "@storybook/client-api";

export default { title: 'Line chart' }; 

export const lineGraph = () => {
  useEffect(() => {
   lineGraphExample()
  }, []);
  return LineGraph
  
};

