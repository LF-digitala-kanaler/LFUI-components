import Danger from "./danger.html";
import Warning from "./warning.html";
import Success from "./success.html";
import WithButton from "./with-button.html";
import WithCloseButton from "./with-close-button.html";

export default { title: 'Alert' }; // Component title

export const danger = () => `${Danger}`;
export const warning = () => `${Warning}`;
export const success = () => `${Success}`;
export const withButton = () => `${WithButton}`;
export const withCloseButton = () => `${WithCloseButton}`;
