import PopoverTooltip from "./popoverTooltip.html";
import {popoverTooltipExample} from "./popovertooltip";
import { useEffect } from "@storybook/client-api";

export default { title: 'Popover Tooltip' }; 

export const popoverTooltip = () => {
  useEffect(() => {
   popoverTooltipExample()
  }, []);
  return PopoverTooltip
};

