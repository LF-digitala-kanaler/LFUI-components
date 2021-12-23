/* global Chart */

import chartColors from '../../data/chartColors'

const xyPlotExample = () => {
  if (document.getElementById('xyPlot') === null) return
  const ctx = document.getElementById('xyPlot').getContext('2d')
  const data = [{
    x: 5.5,
    y: 2
  }, {
    x: 3,
    y: 5
  },

  {
    x: 3,
    y: 6.5
  }
  ]
  const datasetColors = chartColors.getColorScale(data.length)
  const yAxisText = 'Avkastning %'
  const xAxisText = 'Risk (standardavvikelse %)'

  /* eslint-disable-next-line no-new */
  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        borderWidth: 0,
        backgroundColor: datasetColors,
        hoverBackgroundColor: datasetColors,
        radius: 10,
        hoverRadius: 10,
        data: data

      }]
    },
    options: {

      animation: {
        duration: 1
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
            return (tooltipItem.value).replace('.', ',') + ' %'
          }

        }
      },
      legend: false,

      scales: {

        yAxes: [{

          scaleLabel: {
            display: yAxisText.length,
            labelString: yAxisText
          },
          ticks: {
            padding: 8,
            maxTicksLimit: 6,
            beginAtZero: true
          },
          gridLines: {
            color: chartColors.getGridColor(),
            zeroLineColor: chartColors.getGridColor()
          }
        }],

        xAxes: [{

          scaleLabel: {
            display: xAxisText.length,
            labelString: xAxisText
          },
          ticks: {
            padding: 8,
            maxTicksLimit: 6,
            beginAtZero: true

          },
          gridLines: {
            color: chartColors.getGridColor(),
            zeroLineColor: chartColors.getGridColor()
          }
        }]
      }
    }
  })
}

export { xyPlotExample }
