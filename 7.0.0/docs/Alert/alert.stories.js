import Danger from "./danger.html";
import Warning from "./warning.html";
import Success from "./success.html";
import Info from "./info.html";

export default { 
  title: 'Alert',
  
}; // Component title


export const danger = () => `${Danger}`;
export const warning = () => `${Warning}`;
export const success = () => `${Success}`;
export const info = () => `${Info}`;
