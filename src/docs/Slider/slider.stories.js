import Slider from "./slider.html";
import {sliderExample} from "./slider"
import { useEffect } from "@storybook/client-api";

export default { title: 'Slider' }; 

export const slider = () => {
  useEffect(() => {
   sliderExample()
  }, []);
  return Slider
  
};