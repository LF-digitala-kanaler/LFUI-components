import $ from 'jquery'
import 'jquery-ui-bundle'

const sliderExample = (context) => {
  $('#year-slider-range').slider({
    range: true,
    min: 18,
    max: 110,
    values: [35, 50],
    slide: function (event, ui) {
      $('#year-slider-range-from').val(ui.values[0])
      $('#year-slider-range-to').val(ui.values[1])
    }
  })

  $('#year-slider-range-from').change(function () {
    $('#year-slider-range').slider(
      'values',
      0,
      $('#year-slider-range-from').val()
    )
  })

  $('#year-slider-range-to').change(function () {
    $('#year-slider-range').slider(
      'values',
      1,
      $('#year-slider-range-to').val()
    )
  })

  $('#lf-slider-1').on('input', function () {
    const percent = Math.ceil(
      ((this.value - this.min) / (this.max - this.min)) * 100
    )
    this.style.setProperty('--progress', percent)
    $('#lf-slider-value').val(this.value)
  })

  $('#lf-slider-value').on('input', function () {
    $('#lf-slider-1').val(this.value)
    const percent = Math.ceil(
      ((this.value - $('#lf-slider-1').attr('min')) /
        ($('#lf-slider-1').attr('max') - $('#lf-slider-1').attr('min'))) *
        100
    )
    this.style.setProperty('--progress', percent)
  })

  $('#lf-slider-3').on('input', function () {
    const percent = Math.ceil(
      ((this.value - this.min) / (this.max - this.min)) * 100
    )
    this.style.setProperty('--progress', percent)
    $('#lf-slider-value-3').val(this.value)
  })

  $('#lf-slider-value-3').on('input', function () {
    $('#lf-slider-3').val(this.value)
    const percent = Math.ceil(
      ((this.value - $('#lf-slider-3').attr('min')) /
        ($('#lf-slider-3').attr('max') - $('#lf-slider-3').attr('min'))) *
        100
    )
    this.style.setProperty('--progress', percent)
  })

  $('#lf-slider-4').on('input', function () {
    const percent = Math.ceil(
      ((this.value - this.min) / (this.max - this.min)) * 100
    )
    this.style.setProperty('--progress', percent)
    $('#lf-slider-value-4').val(this.value)
  })

  $('#lf-slider-value-4').on('input', function () {
    $('#lf-slider-4').val(this.value)
    const percent = Math.ceil(
      ((this.value - $('#lf-slider-4').attr('min')) /
        ($('#lf-slider-4').attr('max') - $('#lf-slider-4').attr('min'))) *
        100
    )
    this.style.setProperty('--progress', percent)
  })
}

export { sliderExample }
