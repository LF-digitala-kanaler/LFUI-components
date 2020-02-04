import React from 'react';
import { useEffect } from "@storybook/client-api";

export default {
  title: 'Datepicker'
};

export const normal = () => {
  useEffect(() => {
   $('.datepicker').datetimepicker({
    inline: true,
    locale: 'sv',
    format: 'YYYY-MM-DD'
  });
  }, []);
  
  
  return (
    <div>
      <p>test</p>
      <div class="datepicker" id="datetimepicker1" placeholder="ÅÅÅÅ-MM-DD"></div>
    </div>
  )
};




