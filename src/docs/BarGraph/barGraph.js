const barGraphExample = () => {
  var data = [
      {name: '2012', value: 11.5},
      {name: '2013', value: 20},
      {name: '2014', value: 4},
      {name: '2015', value: 4},
      {name: '2016', value: 20},
      {name: '2017', value: 22},
      {name: '2018', value: 13},
      {name: '2019', value: 17},
    ];

    // The chart's dimensions, including margin values for more positioning power,
    // as well as giving the axes space to live.
    var margin = {top: 20, right: 30, bottom: 30, left: 40},
      width = 720 - margin.left - margin.right,
      barHeight = 350 - margin.top - margin.bottom;

    // The range and domain of the data, constraining the space to plot the data to the height (y) and
    // width variables.
    var y = d3.scaleLinear()
      .rangeRound([barHeight, 0])
      .domain([0, d3.max(data, function(d) { return d.value; })]);

    var x = d3.scaleBand()
      .domain(data.map(function(d) { return d.name; }))
      .rangeRound([0, width])
      .padding(0.1);
    
    // The axes are scaled according to our above constraints. We also add some flavor to the y ticks, also
    // stating that there should be 13 of them.
    var xAxis = d3.axisBottom()
      .scale(x)
      .tickSize(0);

    var yAxis = d3.axisLeft()
      .scale(y)
      .tickSizeInner(-(width))
      .tickSizeOuter(0)
      .ticks(5, '%');

    // Bind the dimensions to the .barChart itself
    var chart = d3.select('.barGraph')
      .attr('width', width + margin.left + margin.right)
      .attr('height', barHeight + margin.top + margin.bottom)
      .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (barHeight + margin.top + margin.bottom))
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // The xAxis and yAxis
    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + barHeight + ')')
      .call(xAxis);

    chart.append('g')
     .attr('class', 'y axis')
     .call(yAxis);

    // Lastly, append a rect for each data (d), assign them a class for styling,
    // position them accoridng to x (d.name) and y (d.value) axes. The height of each rect then
    // translates to the corresponding y value. Bandwith is a method to return the computed width of
    // each band.
    chart.selectAll('bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) { return x(d.name); })
      .attr('y', function(d) { return y(d.value); })
      .attr('height', function(d) { return barHeight - y(d.value); })
      .attr('width', x.bandwidth());
}


export  {barGraphExample}