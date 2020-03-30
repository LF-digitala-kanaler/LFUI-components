
const datepickerExample = () => {
  $('#datepicker').datetimepicker({
    locale: 'sv',
    format: 'YYYY-MM-DD',
    allowInputToggle: true
  });
  $('#datepicker').on('dp.show', function(){
    $('#datepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
    $('#datepicker button').addClass('active');
  });

  $('#datepicker').on('dp.hide', function(){
    $('#datepicker button').removeClass('active');
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
    $('#timepicker').on('dp.show', function(){
      $('#timepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
      $('#timepicker button').addClass('active');
    });

    $('#timepicker').on('dp.hide', function(){
      $('#timepicker button').removeClass('active');
    });
}

const disabledDatesExample = () => {
  $('#datetimepicker-disabled').datetimepicker({
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
    $('#datetimepicker-disabled').on('dp.show', function(){
      $('#datetimepicker-disabled .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
      $('#datetimepicker-disabled button').addClass('active');
    });

    $('#datetimepicker-disabled').on('dp.hide', function(){
      $('#datetimepicker-disabled button').removeClass('active');
    });
}

export  {disabledDatesExample,timepickerExample,datepickerExample}