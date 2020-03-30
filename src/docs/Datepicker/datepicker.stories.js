import React from 'react';
import { useEffect } from "@storybook/client-api";
import Datepicker from "./datepicker.html";
import Timepicker from "./timepicker.html";
import {datepickerExample, timepickerExample, disabledDatesExample} from "./datepicker"

export default {
  title: 'Datepicker'
};

export const datepicker = () => {
  useEffect(() => {
   datepickerExample()
   disabledDatesExample()
  }, []);
  return Datepicker
  
};

export const timepicker = () => {
  useEffect(() => {
    timepickerExample()
  }, []);
  return Timepicker
  
};






