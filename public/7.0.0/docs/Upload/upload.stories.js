

import Upload from "./upload.html";
import {uploadExample} from "./upload"
import { useEffect } from "@storybook/client-api";

export default { title: 'Upload' }; 


export const upload = () => {
  useEffect(() => {
   uploadExample();  
  }, []);
  return Upload;
  
};
