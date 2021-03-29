import Value from "./value.html";
import Intervall from "./intervall.html";
import {sliderExample} from "./slider"
import { useEffect } from "@storybook/client-api";

export default { title: 'Slider' }; 

export const value = () => {
  useEffect(() => {
   sliderExample()
  }, []);
  return Value
  
};
export const intervall = () => {
  useEffect(() => {
   sliderExample()
  }, []);
  return Intervall
  
};