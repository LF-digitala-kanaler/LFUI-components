import OneLined from "./oneLined.html";
import SeveralLines from "./severalLines.html";

import {inputFieldExample} from "./inputField";
import { useEffect } from "@storybook/client-api";

export default { title: 'Input Field' }; 

export const oneLined = () => {
  useEffect(() => {
    inputFieldExample()
  }, []);
  return OneLined
  
};
export const severalLines = () => {
  useEffect(() => {
    inputFieldExample()
  }, []);
  return SeveralLines
  
};
