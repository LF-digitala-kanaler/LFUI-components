import Panel from "./panel.html";
import {panelExample} from "./panel"
import { useEffect } from "@storybook/client-api";

export default { title: 'Panel' }; 

export const panel = () => {
  useEffect(() => {
   panelExample()
  }, []);
  return Panel
  
};