import chartColors from '../../data/chartColors';


const lineChartExample = () => {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const test = [
    {x: 'Jan', y: 11}, 
    {x: 'Feb', y: 32},
    {x: 'Mar', y: 52},
    {x: 'Apr', y: 18},
    {x: 'Maj', y: 10},
    {x: 'Jun', y: 8},
    
  ]
  const lineColors = chartColors.getColorScale(test.length);

  const datasets = [
    {
    backgroundColor: lineColors,
    fill: false,
    lineTension: 0,
    borderWidth: 2,
    pointRadius: 0,
    data: test.y 
  }
  ]
 
  const options = {
    animation: {
      duration: 0
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales:{
      xAxes: [{
          display: false //this will remove all the x-axis grid lines
      }]
    }
  }
  const data = {
    labels: test.map((value) => value.x),
    datasets: datasets,
  }
  
  new Chart(ctx, {
    type: 'line',
    data,
    options
  })
}
console.log(ctx)
export {lineChartExample}