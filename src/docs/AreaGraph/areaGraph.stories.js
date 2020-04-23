

import AreaGraph from "./areaGraph.html";


import {areaGraphExample} from "./areaGraph"
import { useEffect } from "@storybook/client-api";

export default { title: 'Area Graph' }; 

export const areaGraph = () => {
  useEffect(() => {
   areaGraphExample()
  }, []);
  return AreaGraph
  
};
