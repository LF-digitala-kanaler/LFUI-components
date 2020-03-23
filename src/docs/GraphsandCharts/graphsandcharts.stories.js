

import Map from "./map.html";
import Line from "./line.html";
import Bar from "./bar.html";

import {mapExample, lineExample, barExample} from "./graphsandcharts"
import { useEffect } from "@storybook/client-api";

export default { title: 'Graphs and Charts' }; 

export const map = () => {
  useEffect(() => {
   mapExample()
  }, []);
  return Map
  
};
export const line = () => {
  useEffect(() => {
   lineExample();  
  }, []);
  return Line
  
};

export const bar = () => {
  useEffect(() => {
   barExample();  
  }, []);
  return Bar
  
};
