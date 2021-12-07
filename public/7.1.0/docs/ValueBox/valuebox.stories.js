

import Valuebox from "./valuebox.html";
import {valueboxExample} from "./valuebox"
import { useEffect } from "@storybook/client-api";

export default { title: 'Value box' }; 

export const valueBox = () => {
  useEffect(() => {
   valueboxExample()
  }, []);
  return Valuebox
  
};
