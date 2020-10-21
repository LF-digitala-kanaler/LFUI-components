import chartColors from '../../data/chartColors';

const xyPlotExample = () => {
  const ctx = document.getElementById('xyPlot').getContext('2d');
  const data = [{
    x: 5.5,
    y: 4
}, {
    x: 3,
    y: 5
},

{
    x: 3,
    y: 5
},
{
    x: 3,
    y: 6.5
},
]
  const datasetColors = chartColors.getColorScale(data.length);
  const yAxisText = 'Avkastning %';
  const xAxisText = 'Risk (standardavvikelse %)';

  var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        borderWidth: 0,
        backgroundColor: datasetColors,
        hoverBackgroundColor: datasetColors,
        radius: 10,
        hoverRadius: 10,
        data: data,
        
      }]
    },
    options: {
      
      animation: {
        duration: 1
      },
      tooltips: {
        enabled: false
      },
      legend: false,
      
      scales: {
        
        yAxes: [{
          
          scaleLabel: {
            display: yAxisText.length,
            labelString: yAxisText
          },
          ticks: {
            
            maxTicksLimit: 6,
            beginAtZero: true,
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
           
            maxTicksLimit: 6,
            beginAtZero: true,
           
          },
          gridLines: {
            color: chartColors.getGridColor(),
            zeroLineColor: chartColors.getGridColor()
          }
        }]
      },
    }
});
}

export {xyPlotExample}