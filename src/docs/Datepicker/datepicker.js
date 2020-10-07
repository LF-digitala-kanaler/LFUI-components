
const datepickerExample = () => {
  var dateOk = new RegExp('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])');
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
  $('#datepicker').on('click', function(){
    console.log(this);
  });
  $('#datepicker').on('dp.hide', function(){
    $('#datepicker button').removeClass('active');
    var value = $('#datepicker-input').val();
    if( dateOk.test(value) ) {
      $(this).find('input').addClass('form-control-valid');
      $(this).parent().addClass('has-valid');
    } else {
      $(this).parent().addClass('has-danger');
    }
  });
}

const timepickerExample = () => {
  var dateOk = new RegExp('^([0-1][0-9]|[2][0-3]):([0-5][0-9])');
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
    $('#timepicker').on('dp.hide', function(){
      $('#timepicker button').removeClass('active');
      var value = $('#timepicker-input').val();
      if( dateOk.test(value) ) {
        $(this).find('input').addClass('form-control-valid');
        $(this).parent().addClass('has-valid');
      } else {
        $(this).parent().addClass('has-danger');
      }
    });
}

const disabledDatesExample = () => {
  var dateOk = new RegExp('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])');
  $('#datetimepicker-disabled').datetimepicker({
      format: 'YYYY-MM-DD',
      locale: 'sv',
      allowInputToggle: true,
      defaultDate: '2020/06/02',
      disabledDates: [
        '2020/06/04',
        '2020/06/05',
        '2020/06/06'
      ]
    });
    $('#datetimepicker-disabled').on('dp.hide', function(){
      $('#datetimepicker-disabled button').removeClass('active');
      var value = $('#datetimepicker-disabled-input').val();
      if( dateOk.test(value) ) {
        $(this).find('input').addClass('form-control-valid');
        $(this).parent().addClass('has-valid');
      } else {
        $(this).parent().addClass('has-danger');
      }
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