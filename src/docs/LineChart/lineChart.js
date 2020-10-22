
import chartColors from '../../data/chartColors';
import chartUtils from  './utils.js';


const lineChartExample = () => {
  
  let color = chartColors.getColorScale(0) // get default color scale
  let legendColor = chartColors.getColorScale(0);
  var config = {
    type: 'line',
   
    data: {
      datasets: [{
        borderColor: color[0],
        borderWidth: 2,
        lineTension: 0,
        data: chartUtils.generateData(),
        fill: false,
      }],
      
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
      legendCallback: function (chart) {  
       
        var text = [];
        for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li data-index="index-'+i+'" class="chart-legend-item chart-legend-item-clickable" onclick="updateDataset(event, ' + '\'' + i + '\'' + ')"><div class="chart-legend-box"  style="background-color:' + legendColor[i] + '"></div>'+ "Länsförsäkringar Dummy fond " + (i+1) +'</li>');
        }
        return text.join("");   
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
  window.lineChart = new Chart(ctx, config);
  document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend', lineChart.generateLegend());
  let init = false;
  window.updateDataset = function(event, datasetIndex) {
      
      var index = parseInt(datasetIndex);
      var ci = event.view.lineChart;
      var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;  
      var anyOthersAlreadyHidden = false;
      var allOthersHidden = true;
      
      ci.data.datasets.forEach(function(e, i) {
        var meta = ci.getDatasetMeta(i);
        
        if (i !== index) {
          if (meta.hidden) {
            anyOthersAlreadyHidden = true;
          } else {
            allOthersHidden = false;
          }
        }
      });
  
      if(!init) {
        ci.data.datasets.forEach(function(e, i) {
          var meta = ci.getDatasetMeta(i);

          if (i !== index) {
            meta.hidden = true
            legendColor = legendColor.map((item,ix) => {
              if(ix !== index) {
                return item = chartColors.getDisabledColor()
              }else {
                return item
              }
            })
          }
        });
       init = true;
     
      }else{
        
        if(alreadyHidden) {
            legendColor[index] = ci.getDatasetMeta(index).hidden === null ?  chartColors.getDisabledColor() : color[index]
            ci.getDatasetMeta(index).hidden = null;
          
        }else {

            ci.data.datasets.forEach(function(e, i) {
              
              if (i !== index) {
                
                if (!anyOthersAlreadyHidden && !allOthersHidden) {
                  
                  ci.getDatasetMeta(index).hidden = true;
                  legendColor[index] = chartColors.getDisabledColor();
                
                }
                else if(anyOthersAlreadyHidden && !allOthersHidden){
                  legendColor[index] = chartColors.getDisabledColor();
                  ci.getDatasetMeta(index).hidden = true;
                }
               
              }
            });
        }
      }
      document.getElementById('js-chartLegends').innerHTML = '';
      document.getElementById('js-chartLegends').innerHTML = lineChart.generateLegend();
      ci.update();
  };
  
  document.getElementById('addDataset').addEventListener('click', function() {
    
    var newDataset = {
      borderWidth: 2,
      lineTension: 0,
      fill: false,
      data: chartUtils.generateData()
    };

    config.data.datasets.push(newDataset);
    
    color = chartColors.getColorScale(config.data.datasets.length)
    legendColor = chartColors.getColorScale(config.data.datasets.length)
    init = false;
    document.getElementById('js-chartLegends').innerHTML = '';
    document.getElementById('js-chartLegends').innerHTML = lineChart.generateLegend();
    
    config.data.datasets.map((item,i) =>  item.borderColor = color[i]);

    lineChart.update();
    
});

}
export {lineChartExample}
