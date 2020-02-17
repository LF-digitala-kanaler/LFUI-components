import React from 'react';
import { useEffect } from "@storybook/client-api";
import Datepicker from "./datepicker.html";
import Timepicker from "./timepicker.html";
import DisabledDates from "./disabledDates.html";

export default {
  title: 'Datepicker'
};

export const datepicker = () => {
  useEffect(() => {
    $('#datepicker').datetimepicker({
      locale: 'sv',
      format: 'YYYY-MM-DD'
    });
    $('.datepicker').on('dp.show', function(){
      $('#datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
      $('.datepicker button').addClass('active');
    });

    $('.datepicker').on('dp.hide', function(){
      $('.datepicker button').removeClass('active');
    });
  }, []);
  return Datepicker
  
};

export const timepicker = () => {
  useEffect(() => {
    $('#timepicker').datetimepicker({
      format: 'LT',
      locale: 'sv',
      allowInputToggle: true,
      icons: {
        up: 'next',
        down: 'prev',
      }
    });
    $('.datepicker').on('dp.show', function(){
      $('#datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
      $('.datepicker button').addClass('active');
    });

    $('.datepicker').on('dp.hide', function(){
      $('.datepicker button').removeClass('active');
    });
  }, []);
  return Timepicker
  
};


export const disabledDates = () => {
  useEffect(() => {
    $('#datetimepicker-disabled-input').datetimepicker({
      format: 'YYYY-MM-DD',
      locale: 'sv',
      allowInputToggle: true,
      defaultDate: '2017/06/02',
      disabledDates: [
        '2017/06/04',
        '2017/06/05',
        '2017/06/06'
      ]
    });
    $('.datepicker').on('dp.show', function(){
      $('#datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
      $('.datepicker button').addClass('active');
    });

    $('.datepicker').on('dp.hide', function(){
      $('.datepicker button').removeClass('active');
    });
  }, []);
  return DisabledDates
  
};



