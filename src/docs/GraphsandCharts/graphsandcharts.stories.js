

import Map from "./map.html";
import {mapExample} from "./graphsandcharts"
import { useEffect } from "@storybook/client-api";

export default { title: 'Graphs and Charts' }; 

export const map = () => {
  useEffect(() => {
   mapExample()
  }, []);
  return Map
  
};
