// import * as topojson from 'topojson';
// var countriesCsv = require('./countries.csv');
// var d3;

// // Thing is, we load d3 from its cdn in our index.html. This because we really really don't
// // want it in our node_modules.
// if(window.d3) {
//   d3 = window.d3;
// }

// const mapExample = () => {
//   var countryData = [
//     {
//       'shares': 25,
//       'countries': 'Sweden',
//       'countryCodes': ['752'],
//       'color': 1
//     },
//     {
//       'shares': 42,
//       'countries': 'Western Europe',
//       'countryCodes': ['040', '056', '250', '276', '438', '442', '492', '528', '756'],
//       'color': 2
//     },
//     {
//       'shares': 38,
//       'countries': 'Northern Europe',
//       'countryCodes': ['248', '208', '233', '234', '233', '246', '831', '352', '372', '833', '832', '428', '440', '578', '744', '826'],
//       'color': 3
//     },
//     {
//       'shares': 45,
//       'countries': 'North America',
//       'countryCodes': ['840', '124', '484'],
//       'color': 4
//     },
//     {
//       'shares': 12,
//       'countries': 'Turkey',
//       'countryCodes': ['792'],
//       'color': 5
//     }
//   ];

//   var colorScale = d3.scaleOrdinal()
//     .range(['#032f55', '#00427a', '#005b9c', '#468abd', '#74b3d6', '#b9d7e7', '#7e0a0d', '#ad1015', '#d9222a', '#e05656', '#ea9093', '#f7d1d3', '#4d4d4d', '#747578', '#a9aaa9']);

//   var width = 680;
//   var height = 675;

//   // We choose Mercator projection here
//   var projection = d3.geoMercator()
//       .scale(110)
//       .translate([(width / 2) + 120, (height / 2)])
//       .precision(.1);

//   var path = d3.geoPath()
//       .projection(projection);

//   var graticule = d3.geoGraticule();

//   // draw the map
//   var svg = d3.select('#map')
//       .attr('width', '100%')
//       .attr('height', height)
//       .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
//       .attr('preserveAspectRatio','xMinYMin');

//   svg.append('defs').append('path')
//       .datum({type: 'Sphere'})
//       .attr('id', 'sphere')
//       .attr('d', path);

//   svg.append('use')
//       .attr('class', 'stroke')
//       .attr('xlink:href', '#sphere');

//   svg.append('use')
//       .attr('class', 'fill')
//       .attr('xlink:href', '#sphere')
//       .style('fill', 'none');

//   svg.append('path')
//       .datum(graticule)
//       .attr('class', 'graticule')
//       .attr('d', path);

//   // Mouseover text
//   var mouseOver = svg.append('g')
//     .attr('class', 'mouse-over-effects');

//   mouseOver.append('g')
//     .append('text')
//     .attr('x', 12)
//     .attr('dy', '.35em')
//     .attr('transform', 'translate(0,35)')
//     .attr('class', 'mouseRectText')
//     .style('stroke-width', '2px')
//     .style('fill', '#005c9d');

//   // Load world typography
//   d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json', function(error, world) {
//     if (error) throw error;

//     // center projection on sweden lat long
//     projection.center([59.33258, 18.0649]);
//     //convert with topojson
//     var countries = topojson.feature(world, world.objects.countries);

//     // Add country code from topojson to class,
//     // Add country name from countries.csv as id when country code === id
//     svg.selectAll('.country')
//         .data(countries.features)
//       .enter().insert('path', '.graticule')
//         .attr('class', function(d) { return 'country code' + d.id; })
//         .attr('id', function(d) {
//           for(let j = 0; j < countriesCsv.length; j++) {
//             if (d.id === countriesCsv[j].countryCode) {
//               return countriesCsv[j].name;
//             }
//           }
//         })
//         .attr('d', path)
//         .style('fill', function(d, i) {
//           return '#d9d9d9';
//         });

//     // Remove antarctica
//     d3.select('.code010').remove();

//     // Color the countries in the arrays
//     d3.selectAll('.country')
//       .filter(function(d, i) {
//         for(var j = 0; j < countryData.length; j++) {
//           if(countryData[j].countryCodes.includes(d.id)) {
//             return d.id;
//           }
//         }
//         return false;
//       })
//       .style('fill', function(d, i) {
//         for(var j = 0; j < countryData.length; j++) {
//           if(countryData[j].countryCodes.includes(d.id)) {
//             return colorScale([countryData[j].color]);
//           }
//         }
//       })
//       .classed('active', true);;

//     // mouseover and mouseout
//     d3.selectAll('.country')
//       .on('mouseover', function() {
//         var mouse = d3.mouse(this);
//         // "hover" highlight
//         if(!d3.select(this).attr('class').includes('active')) {
//           d3.select(this)
//             .style('fill', '#e8e8e8');
//         }

//         // Text
//         d3.select('#map .mouseRectText')
//           .style('opacity', '1')
//           .attr('transform', 'translate(' + mouse[0] + ', ' + mouse[1] +')')
//           .text(() => {
//             return d3.select(this).attr('id');
//           });
//       })
//       .on('mouseout', function() {
//         if(!d3.select(this).attr('class').includes('active')) {
//           d3.select(this)
//             .style('fill', '#d7d8d6');
//         }
//         d3.select('#map .mouseRectText')
//           .style('opacity', '0');
//       });

//     // Legend
//     svg.append('g')
//       .attr('class', 'legend')
//       .attr('transform', 'translate(0, ' + (height - 150) + ')');

//     d3.select('#map .legend')
//       .select(null)
//       .data(countryData)
//       .enter()
//       .each(function(d, i) {
//         d3.select('#map .legend')
//           .append('rect')
//           .attr('x', 20)
//           .attr('y', function() {
//             return 25 * (i + 1) - 14; })
//           .attr('height', '16px')
//           .attr('width', '16px')
//           .style('fill', function() {
//             return colorScale(countryData[i].color);
//           });

//         d3.select('#map .legend')
//           .append('text')
//           .attr('x', '45')
//           .attr('y', function() { return (25 * (i + 1)); })
//           .attr('class', 'legendText')
//           .style('stroke', '2px')
//           .attr('fill', '#000000')
//           .text(function() {
//             return d.countries + ' ' + d.shares + ' %';
//           });
//       });
//   });

//   d3.select(self.frameElement).style('height', height + 'px');
// }

// const lineExample = () => {
   
//     var data = [
//       {date: '20150901', value: 8200.38},
//       {date: '20151002', value: 12400.48},
//       {date: '20151103', value: 13700.62},
//       {date: '20151204', value: 14900.86},
//       {date: '20160105', value: 19900.55},
//       {date: '20160206', value: 31800.63},
//       {date: '20160307', value: 32900.32},
//       {date: '20160408', value: 31400.31},
//       {date: '20160509', value: 34300.68},
//       {date: '20160610', value: 35600.23},
//       {date: '20160711', value: 22800.44},
//       {date: '20160812', value: 22600.20},
//       {date: '20160913', value: 22200.77},
//       {date: '20161014', value: 20500.23},
//       {date: '20161115', value: 28000.13},
//       {date: '20161216', value: 24300.70},
//       {date: '20170117', value: 24300.34},
//       {date: '20170218', value: 34500.44},
//       {date: '20170319', value: 23400.98},
//       {date: '20170420', value: 16600.70},
//       {date: '20170521', value: 13000.28},
//       {date: '20170622', value: 9900.00},
//       {date: '20170723', value: 8900.70},
//       {date: '20170824', value: 6700.00},
//       {date: '20170925', value: 5300.98},
//       {date: '20171026', value: 5800.13}
//     ];

//     var margin = {top: 20, right: 30, bottom: 30, left: 40},
//       width = 680 - margin.left - margin.right,
//       height = 350 - margin.top - margin.bottom;

//     // Parse the date / time
//     var parseDate = d3.timeParse('%Y%m%d');

//     data.forEach(function(d) {
//       d.date = parseDate(d.date);
//     });

//     var y = d3.scaleLinear()
//       .rangeRound([height, 0])
//       .domain([0, d3.max(data, function(d) { return d.value + 10000; })]);

//     var x = d3.scaleTime()
//       .range([0, width])
//       .domain(d3.extent(data, function(d) { return d.date; }));

//     var xAxis = d3.axisBottom()
//       .scale(x)
//       .tickSize(0);

//     var yAxis = d3.axisLeft()
//       .scale(y)
//       .tickSizeInner(-(width))
//       .tickSizeOuter(0)
//       .ticks(5);

//     var chart = d3.select('.lineChart')
//       .attr('width', '100%')
//       .attr('height', height + margin.top + margin.bottom)
//       .append('g')
//       .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//     chart.append('g')
//       .attr('class', 'x axis')
//       .attr('transform', 'translate(0,' + height + ')')
//       .call(xAxis);

//     chart.append('g')
//       .attr('class', 'y axis')
//       .call(yAxis)
//       .append('text')
//       .attr('transform', 'rotate(-90)')
//       .attr('y', 6)
//       .attr('dy', '.71em')
//       .style('text-anchor', 'end')
//       .text('Värdeutveckling');

//     // In accordance with LFUI styling all line graphs should have a gradient covering the area
//     // they cover. For this we use d3.area(). The gradient is then added to the svg's <defs> element,
//     // and later called upon using its id. We draw the gradient using non-D3 svg properties.
//     var area = d3.area()
//       .x(function(d) { return x(d.date); })
//       .y0(height)
//       .y1(function(d) { return y(d.value); });

//     var defs = chart.append('defs');

//     var gradient = defs.append('linearGradient')
//       .attr('id', 'svgGradient')
//       .attr('x1', '0%')
//       .attr('x2', '0%')
//       .attr('y1', '0%')
//       .attr('y2', '100%');

//     gradient.append('stop')
//       .attr('class', 'start')
//       .attr('offset', '0%')
//       .attr('stop-color', '#005c9d')
//       .attr('stop-opacity', 0.3);

//     gradient.append('stop')
//       .attr('class', 'end')
//       .attr('offset', '100%')
//       .attr('stop-color', 'white')
//       .attr('stop-opacity', 0);

//     chart.append('path')
//       .datum(data)
//       .attr('class', 'area')
//       .attr('d', area)
//       .attr('fill', 'url(#svgGradient)');

//     // We also prapre a clipPath for when we select a certain span in the chart.
//     defs.append('clipPath')
//       .attr('id', 'selectionClip')
//       .append('rect');

//     var line = d3.line()
//       .x(function(d) { return x(d.date); })
//       .y(function(d) { return y(d.value); });

//     var city = chart.selectAll('.city')
//         .data([data])
//       .enter().append('g')
//         .attr('class', 'city');

//     chart.append('path')
//         .data([data])
//         .attr('class', 'line')
//         .attr('d', line);

//     // For all mouse over effects we add a separate svg group. We'll also be adding our
//     // mouse event listeners to this group.
//     var mouseG = city.append('g')
//       .attr('class', 'mouse-over-effects');

//     mouseG.append('path')
//       .attr('class', 'mouse-line')
//       .style('stroke', '#005c9d')
//       .style('stroke-width', '2px')
//       .style('opacity', '0');

//     var lines = document.getElementsByClassName('line');

//     var mousePerLine = mouseG.select('.mouse-per-line')
//       .data(d3.range(lines.length))
//       .enter()
//       .append('g')
//       .attr('class', 'mouse-per-line');

//     mousePerLine.append('rect')
//       .attr('width', 120)
//       .attr('height', 60)
//       .style('fill', '#005c9d')
//       .attr('transform', 'translate(-60, 0)')
//       .style('stroke-width', '2px')
//       .style('opacity', '0');

//     mousePerLine.append('text')
//       .attr('transform', 'translate(-24,35)')
//       .attr('class', 'mouseRectText');

//     var firstSelection = false;
//     var secondSelection = false;
//     var firstSelectionRectX,
//       secondSelectionRectX,
//       firstSelectionValue,
//       secondSelectionValue;

//     mouseG.append('.lineChart:rect')
//       .attr('class', 'mouseRect')
//       .attr('width', width)
//       .attr('height', height)
//       .attr('fill', 'none')
//       .attr('pointer-events', 'all')
//       .on('mouseout', function() { // on mouse out hide line, rect and text
//         d3.select('.mouse-line')
//           .style('opacity', '0');
//         d3.selectAll('.mouse-per-line rect')
//           .style('opacity', '0');
//         d3.selectAll('.mouse-per-line text')
//           .style('opacity', '0');
//       })
//       .on('mouseover', function() { // on mouse in show line, rect and text
//         d3.select('.mouse-line')
//           .style('opacity', '1');
//         d3.selectAll('.mouse-per-line rect')
//           .style('opacity', '1');
//         d3.selectAll('.mouse-per-line text')
//           .style('opacity', '1');
//       })

//       .on('mousemove', function() { // mouse moving over chart
//         var mouse = d3.mouse(this);

//         // move the vertical line
//         d3.select('.mouse-line')
//           .attr('d', function() {
//             var d = 'M' + mouse[0] + ',' + height;
//             d += ' ' + mouse[0] + ',' + 0;
//             return d;
//           });

//         // position the rect and text
//         d3.selectAll('.mouse-per-line')
//           .attr('transform', function(d, i) {
//             var beginning = 0,
//               end = lines[0].getTotalLength(),
//               target = null;

//             while (true){
//               target = Math.floor((beginning + end) / 2);
//               var pos = lines[0].getPointAtLength(target);
//               if ((target === end || target === beginning) && pos.x !== mouse[0]) {
//                 break;
//               }
//               if (pos.x > mouse[0]) end = target;
//               else if (pos.x < mouse[0]) beginning = target;
//               else break; //position found
//             }

//             // update the text with y value

//             d3.select(this).select('text')
//               .text(y.invert(pos.y).toFixed(0) + ' kr');

//             // return position
//             return 'translate(' + mouse[0] + ',' + 0 +')';
//           });
//       })

//       .on('click', function() {
//         var mouse = d3.mouse(this);

//         var beginning = 0;
//         var end = lines[0].getTotalLength();
//         var target = null;

//         while (true){
//           target = Math.floor((beginning + end) / 2);
//           var pos = lines[0].getPointAtLength(target);
//           if ((target === end || target === beginning) && pos.x !== mouse[0]) {
//             break;
//           }
//           if (pos.x > mouse[0]) end = target;
//           else if (pos.x < mouse[0]) beginning = target;
//           else break; //position found
//         }

//         // Controllers for the selections. Pin line on click to the mouse position,
//         // if another click is made calculate the value difference between then and also pin
//         // rect with text. On a third click, restore the chart.
//         if(!firstSelection && !secondSelection) {
//           mouseG.append('path')
//             .attr('class', 'first-selection')
//             .style('stroke', '#005c9d')
//             .style('stroke-width', '2px')
//             .attr('d', function() {
//               var d = 'M' + mouse[0] + ',' + height;
//               d += ' ' + mouse[0] + ',' + 0;
//               return d;
//             });

//           firstSelectionValue = y.invert(pos.y).toFixed(0);
//           firstSelectionRectX = mouse[0];
//           firstSelection = true;
//         } else if (firstSelection && !secondSelection) {
//           mouseG.append('path')
//             .attr('class', 'second-selection')
//             .style('stroke', '#005c9d')
//             .style('stroke-width', '2px')
//             .attr('d', function() {
//               var d = 'M' + mouse[0] + ',' + height;
//               d += ' ' + mouse[0] + ',' + 0;
//               return d;
//             });

//           secondSelectionValue = y.invert(pos.y).toFixed(0);
//           secondSelectionRectX = mouse[0];
//           secondSelection = true;
//           var selectionWidth;

//           secondSelectionRectX < firstSelectionRectX ? selectionWidth = (firstSelectionRectX - secondSelectionRectX) : selectionWidth = (secondSelectionRectX - firstSelectionRectX);

//           mouseG.append('rect')
//             .attr('class', 'selectionRect')
//             .attr('transform', 'translate(' + (secondSelectionRectX < firstSelectionRectX ? secondSelectionRectX : firstSelectionRectX) + ', 0)')
//             .attr('width', selectionWidth)
//             .attr('height', 60)
//             .style('fill', '#005c9d');

//           mouseG.append('text')
//             .attr('class', 'mouseRectText')
//             .attr('transform', 'translate(' + (firstSelectionRectX + ((secondSelectionRectX - firstSelectionRectX) / 2)) + ', 35)')
//             .text(function() {
//               var total = secondSelectionValue - firstSelectionValue;
//               total > 0 ? total = '+ ' + total + ' kr' : total += ' kr';
//               return total;
//             })
//             .attr('text-anchor', 'middle');

//           d3.select('#selectionClip rect')
//             .attr('x', (secondSelectionRectX < firstSelectionRectX ? secondSelectionRectX : firstSelectionRectX))
//             .attr('width', selectionWidth)
//             .attr('height', height);

//           d3.select('.area')
//             .attr('clip-path', 'url(#selectionClip)')
//             .style('fill', 'url(#svgGradient)');

//         } else if (firstSelection && secondSelection) {
//           d3.select('.first-selection')
//             .remove();
//           d3.select('.second-selection')
//             .remove();
//           d3.select('.selectionRect')
//             .remove();
//           d3.select('#selectionClip rect')
//             .attr('x', '')
//             .attr('width', '')
//             .attr('height', '');
//           d3.selectAll('.mouse-over-effects .mouseRectText')
//             .remove();

//           d3.select('.area')
//             .attr('clip-path', '');

//           firstSelection = false;
//           secondSelection = false;
//         }
//       });
  
// }
// const barExample = () => {
//   var data = [
//       {name: 'A', value: 0.08},
//       {name: 'B', value: 0.014},
//       {name: 'C', value: 0.028},
//       {name: 'D', value: 0.042},
//       {name: 'E', value: 0.13},
//       {name: 'F', value: 0.021},
//       {name: 'G', value: 0.019},
//       {name: 'H', value: 0.062},
//       {name: 'I', value: 0.069},
//       {name: 'J', value: 0.002},
//       {name: 'K', value: 0.001},
//       {name: 'L', value: 0.04},
//       {name: 'M', value: 0.023},
//       {name: 'N', value: 0.065},
//       {name: 'O', value: 0.064},
//       {name: 'P', value: 0.017},
//       {name: 'Q', value: 0.001},
//       {name: 'R', value: 0.057},
//       {name: 'S', value: 0.061},
//       {name: 'T', value: 0.09},
//       {name: 'U', value: 0.028},
//       {name: 'V', value: 0.0098},
//       {name: 'W', value: 0.023},
//       {name: 'X', value: 0.0015},
//       {name: 'Y', value: 0.02},
//       {name: 'Z', value: 0.0002}
//     ];

//     // The chart's dimensions, including margin values for more positioning power,
//     // as well as giving the axes space to live.
//     var margin = {top: 20, right: 30, bottom: 30, left: 40},
//       width = 720 - margin.left - margin.right,
//       height = 350 - margin.top - margin.bottom;

//     // The range and domain of the data, constraining the space to plot the data to the height (y) and
//     // width variables.
//     var y = d3.scaleLinear()
//       .rangeRound([height, 0])
//       .domain([0, d3.max(data, function(d) { return d.value; })]);

//     var x = d3.scaleBand()
//       .domain(data.map(function(d) { return d.name; }))
//       .rangeRound([0, width])
//       .padding(0.1);

//     // The axes are scaled according to our above constraints. We also add some flavor to the y ticks, also
//     // stating that there should be 13 of them.
//     var xAxis = d3.axisBottom()
//       .scale(x)
//       .tickSize(0);

//     var yAxis = d3.axisLeft()
//       .scale(y)
//       .tickSizeInner(-(width))
//       .tickSizeOuter(0)
//       .ticks(13, '%');

//     // Bind the dimensions to the .barChart itself
//     var chart = d3.select('.barChart')
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
//       .append('g')
//       .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//     // The xAxis and yAxis
//     chart.append('g')
//       .attr('class', 'x axis')
//       .attr('transform', 'translate(0,' + height + ')')
//       .call(xAxis);

//     chart.append('g')
//      .attr('class', 'y axis')
//      .call(yAxis);

//     // Lastly, append a rect for each data (d), assign them a class for styling,
//     // position them accoridng to x (d.name) and y (d.value) axes. The height of each rect then
//     // translates to the corresponding y value. Bandwith is a method to return the computed width of
//     // each band.
//     chart.selectAll('bar')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('class', 'bar')
//       .attr('x', function(d) { return x(d.name); })
//       .attr('y', function(d) { return y(d.value); })
//       .attr('height', function(d) { return height - y(d.value); })
//       .attr('width', x.bandwidth());
// }


// export  {mapExample, lineExample, barExample}