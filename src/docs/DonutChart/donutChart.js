import chartColors from '../../data/chartColors';
let filter = require('lodash/filter');
let isEmpty = require('lodash/isEmpty');
let remove = require('lodash/remove');

const legends = () => {

}
const donutChartExample = () => {
  const ctx = document.getElementById('donutChart').getContext('2d');
  
  const data = [10, 20, 30];
  const colors = chartColors.getColorScale(data.length);
  const disabledColor = chartColors.getDisabledColor();
  const highlightedArc = [];
  let firstClick = true
  
  const _ = {
    filter: filter,
    isEmpty: isEmpty,
    remove: remove
  };

  const isHighlighted = (index) => {
    return !_.isEmpty(_.filter(highlightedArc, (arc) => {
      return arc === index;
    }));
  }

  const highlight = (evt, elements, index) => {

    let dataset = donutChart.data.datasets[0];
    index = elements[0]._index;
    // om första klick eller denna är inte highlighad
    if(firstClick || !isHighlighted(index)) {
      highlightedArc.push(index);
      firstClick = false;
    }else {

      if(highlightedArc.length > 1) {
        _.remove(highlightedArc, (arc) => {  
            return arc === index;
        });
      }
    }
    
    dataset.backgroundColor = colors.slice();
    dataset.hoverBackgroundColor = colors.slice();
    
    for (let i = 0; i < dataset.backgroundColor.length; i++) {
      console.log(!isHighlighted(i), i, 'sss')
      if (!isHighlighted(i)) {
        dataset.hoverBackgroundColor[i] = disabledColor;
        dataset.backgroundColor[i] = disabledColor;
      }
    }
    donutChart.update()
  }

  const donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        backgroundColor: colors,
        borderWidth: 3,
        hoverBackgroundColor: colors,
        hoverBorderWidth: 0,
        data: data
      }]
    },
    options: {
      animations: {
        duration: 500,
        easing: 'linear'
      },
      cutoutPercentage: 75,
      tooltips: {
        enabled: false
      },
      legend: false,
      legendCallback: function(chart) {
        var text = [];
          for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li data-index="index-'+i+'" class="chart-legend-item chart-legend-item-clickable" onclick="updateDataset(event, ' + '\'' + i + '\'' + ')"><div class="chart-legend-box"  style="background-color:' + colors[i] + '"></div>'+ "Länsförsäkringar Dummy fond " + (i+1) +'</li>');
          }
          return text.join("");   
      },
      onClick: highlight,
      maintainAspectRatio: false,
    }
    
  })
  document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend', donutChart.generateLegend());
}
export {donutChartExample}