
import Callout from "./callout.html";
import {calloutExample} from "./callout"
import { useEffect } from "@storybook/client-api";
export default { title: 'Callout' }; 

export const callout = () => {
  useEffect(() => {
   calloutExample()
  }, []);
  return Callout
  
};
