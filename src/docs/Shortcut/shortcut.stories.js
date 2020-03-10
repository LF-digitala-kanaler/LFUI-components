import Default from "./default.html";
import Modifier from "./modifier.html";
import TwoLines from "./twoLines.html";
import WithIcon from "./withIcon.html";



export default { 
  title: 'Shortcut',
  
}; // Component title

/**
 * Use `Danger` to highlight key info with a predefined status.
 */

export const normal = () => `${Default}`;
export const modifier = () => `${Modifier}`;
export const twoLines = () => `${TwoLines}`;
export const withIcon = () => `${WithIcon}`;
