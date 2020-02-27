 
const datepickerExample = () => {
  $('#datepicker').datetimepicker({
    locale: 'sv',
    format: 'YYYY-MM-DD',
    allowInputToggle: true
  });
  $('.datepicker').on('dp.show', function(){
    $('#datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
    $('.datepicker button').addClass('active');
  });

  $('.datepicker').on('dp.hide', function(){
    $('.datepicker button').removeClass('active');
  });
}

const timepickerExample = () => {
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
}

const disabledDatesExample = () => {
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
}
export { datepickerExample , timepickerExample, disabledDatesExample};