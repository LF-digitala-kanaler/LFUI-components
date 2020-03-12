const sliderExample = () => {
  $('#lf-slider-1').on('input', function () {
      var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
      $(this).css('background', '-webkit-linear-gradient(left, #005aa0 0%, #005aa0 ' + percent + '%, #d9d9d9 ' + percent + '%)');

      $('#lf-slider-value').val(this.value);
    });

    $('#lf-slider-value').on('input', function () {
      $('#lf-slider-1').val(this.value);

      var percent = Math.ceil(((this.value - $('#lf-slider-1').attr('min')) / ($('#lf-slider-1').attr('max') - $('#lf-slider-1').attr('min'))) * 100);

      $('#lf-slider-1').css('background', '-webkit-linear-gradient(left, #005aa0 0%, #005aa0 ' + percent + '%, #d9d9d9 ' + percent + '%)');
    });


    $('#lf-slider-3').on('input', function () {
      var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
      $(this).css('background', '-webkit-linear-gradient(left, #005aa0 0%, #005aa0 ' + percent + '%, #d9d9d9 ' + percent + '%)');

      $('#lf-slider-value-3').val(this.value);
    });

    $('#lf-slider-value-3').on('input', function () {
      $('#lf-slider-3').val(this.value);

      var percent = Math.ceil(((this.value - $('#lf-slider-3').attr('min')) / ($('#lf-slider-3').attr('max') - $('#lf-slider-3').attr('min'))) * 100);

      $('#lf-slider-3').css('background', '-webkit-linear-gradient(left, #005aa0 0%, #005aa0 ' + percent + '%, #d9d9d9 ' + percent + '%)');
    });

    $('#lf-slider-4').on('input', function () {
      var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
      $(this).css('background', '-webkit-linear-gradient(left, #005aa0 0%, #005aa0 ' + percent + '%, #d9d9d9 ' + percent + '%)');

      $('#lf-slider-value-4').val(this.value);
    });

    
}

export {sliderExample}