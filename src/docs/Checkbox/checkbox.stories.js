import Checkbox from "./checkbox.html";
import CheckboxCards from "./checkboxCards.html";
import { useEffect } from "@storybook/client-api";
import {checkboxExample} from "./checkbox"


export default { title: 'Checkbox' }; 

export const checkbox = () => `${Checkbox}`;

export const checkboxCard = () => {
  useEffect(() => {
    checkboxExample()
  }, []);
  return CheckboxCards
};