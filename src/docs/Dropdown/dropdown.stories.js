

import Select from "./select.html";
import MultiSelect from "./multiSelect.html";
import {selectExample} from "./dropdown"
import { useEffect } from "@storybook/client-api";

export default { title: 'Dropdown' }; 

export const select = () => {
  useEffect(() => {
   selectExample()
  }, []);
  return Select
  
};

export const multiSelect = () => {
  useEffect(() => {
   selectExample()
  }, []);
  return MultiSelect
  
};