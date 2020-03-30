

import SelectOne from "./selectOne.html";
import MultiSelect from "./multiSelect.html";
import {selectExample} from "./dropdown"
import { useEffect } from "@storybook/client-api";

export default { title: 'Dropdown' }; 

export const selectOne = () => {
  useEffect(() => {
   selectExample()
  }, []);
  return SelectOne
  
};

export const multiSelect = () => {
  useEffect(() => {
   selectExample()
  }, []);
  return MultiSelect
  
};