import PriceBox from "./pricebox.html";
import PriceBoxBottom from "./smallDevices.html";
import { useEffect } from "@storybook/client-api";
import {priceBoxExample} from "./pricebox"

export default { title: 'Price box' }; 

export const priceBox = () => `${PriceBox}`;

export const priceBoxBottom = () => {
  useEffect(() => {
   priceBoxExample()
  }, []);
  return PriceBoxBottom
  
};



