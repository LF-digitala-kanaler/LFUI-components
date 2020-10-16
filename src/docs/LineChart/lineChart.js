
import chartColors from '../../data/chartColors';
import chartUtils from  './utils.js';


const lineChartExample = () => {
  
  
  let color = chartColors.getColorScale(0) // get default color scale
  
  var config = {
    type: 'line',
    data: {
      datasets: [{
        borderColor: color[0],
        borderWidth: 2,
        lineTension: 0,
        data: chartUtils.generateData(),
        fill: false,
      }]
    },
    options: {
      animation: {
        duration: 0
      },
      elements: {
        point:{
            radius: 0
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales:{
        xAxes: [{
          type: 'time',
          time: {
            stepSize: 1,
            displayFormats: {
              month: 'D MMM',
            }
          },

          gridLines: {
            drawOnChartArea: false
          },
          ticks: {
            source: 'data',
            autoSkip: true,
            maxRotation: 0,
            maxTicksLimit: 6,
            autoSkipPadding: 40
          },
          
        }],
        yAxes: [{
          gridLines: {
            drawTicks: false,
            color: '#F3F3F3',
            zeroLineColor: '#F3F3F3'
          },
          ticks: {
            mirror: true,
            padding: -5,
            callback: function (value, index, values) {
              return (value + ' kr');
            }
          },
          scaleLabel: {
            display: true,
          },
          position: 'right'
        }],
      },
      responsive: true,
    }
  };
  
  let ctx = document.getElementById("lineChart").getContext("2d");
  let lineChart = new Chart(ctx, config);
  
  document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend',chartUtils.generateLegend(color[0], 'test'));

  document.getElementById('addDataset').addEventListener('click', function() {
    console.log(config.data.datasets.length)
    
      document.getElementById('js-chartLegends').innerHTML = '';
   
    var newDataset = {
      data: chartUtils.generateData(),
      borderWidth: 2,
      lineTension: 0,
      fill: false
    };
    config.data.datasets.push(newDataset);
  lineChart.update();
    color = chartColors.getColorScale(config.data.datasets.length)
    for (var index=0; index < config.data.datasets.length; ++index) {
      
      
      document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend', chartUtils.generateLegend(color[index], 'test'));
    }
  
  config.data.datasets.map((item,i) =>  item.borderColor = color[i]);

  
});


}
export {lineChartExample}