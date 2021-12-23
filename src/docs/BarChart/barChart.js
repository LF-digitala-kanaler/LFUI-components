/* global Chart */

import chartColors from '../../data/chartColors'

const barChartExample = () => {
  if (document.getElementById('barChart') === null) return
  const ctx = document.getElementById('barChart').getContext('2d')

  const data = [
    { x: '2015', y: 1 },
    { x: '2016', y: -2 },
    { x: '2017', y: 5 },
    { x: '2018', y: -7 },
    { x: '2019', y: 10 },
    { x: '2020', y: 8 }
  ]
  const colors = data.map((value) => value.y < 0 ? chartColors.getNegativeColor() : chartColors.getPositiveColor())

  /* eslint-disable no-new */
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map((value) => value.x),
      datasets: [{
        borderWidth: 0,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        data: data.map((value) => value.y)
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#005AA0',
        cornerRadius: 0,
        bodyFontColor: '#FFF',
        position: 'nearest',
        xPadding: 16,
        yPadding: 16,
        displayColors: false,
        callbacks: {
          title: function () {
            return ''
          },
          label: function (tooltipItem) {
            return (tooltipItem.yLabel.toFixed(1) + '').replace('.', ',') + ' %'
          }
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            color: '#F3F3F3'
          }
        }],
        yAxes: [{
          gridLines: {
            drawTicks: false,
            color: '#F3F3F3',
            zeroLineColor: '#F3F3F3',
            zeroLineWidth: 2
          },
          ticks: {
            padding: 12
          }
        }]
      }
    }
  })
}

export { barChartExample }
