import AlwaysOpen from "./alwaysOpen.html";
import CollapseExpand from "./collapseExpand.html";
import {panelExample} from "./panel"
import { useEffect } from "@storybook/client-api";

export default { title: 'Panel' }; 

export const alwaysOpen = () => `${AlwaysOpen}`;

export const collapseExpand = () => {
  useEffect(() => {
   panelExample()
  }, []);
  return CollapseExpand
  
};
