import White from "./white.html";
import Blue from "./blue.html";
import {navbarExample} from "./navbar";
import { useEffect } from "@storybook/client-api";

export default { title: 'Navbar' }; 

export const white = () => {
  useEffect(() => {
   navbarExample()
  }, []);
  return White
};

export const blue = () => {
  useEffect(() => {
   navbarExample()
  }, []);
  return Blue
};