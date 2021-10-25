import Present from "./present.html";
import Compare from "./comparative.html";
import { useEffect } from "@storybook/client-api";
import { tableExample } from "./table";

export default { title: 'Tables' }; 

export const present = () => {
  useEffect(() => {
    tableExample();
  }, []);
  return Present
  
};

export const compare = () => {
  useEffect(() => {
  
  }, []);
  return Compare
  
};