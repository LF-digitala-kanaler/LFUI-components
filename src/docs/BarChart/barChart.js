import chartColors from '../../data/chartColors';

const barChartExample = () => {
  const ctx = document.getElementById('barChart').getContext('2d');
  const data = [
    {x: '2015', y: 1}, 
    {x: '2016', y: -2},
    {x: '2017', y: 5},
    {x: '2018', y: -7},
    {x: '2019', y: 10},
    {x: '2020', y: 8}
  ]
  const colors = data.map((value) => value.y < 0 ? chartColors.getNegativeColor() : chartColors.getPositiveColor());

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map((value) => value.x),
      datasets: [{
        borderWidth: 0,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        data: data.map((value) => value.y),
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales:{
        xAxes: [{
            display: false //this will remove all the x-axis grid lines
        }],
        yAxes: [{
          gridLines: {
            drawTicks: false,
            color: '#F3F3F3',
            zeroLineColor: '#F3F3F3'

          },
        }],
      }
      
    }

  });
}

export  {barChartExample}