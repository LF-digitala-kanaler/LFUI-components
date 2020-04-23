const lineGraphExample = () => {
   
    var data = [
      {date: '20150901', value: 8200.38},
      {date: '20151002', value: 12400.48},
      {date: '20151103', value: 13700.62},
      {date: '20151204', value: 14900.86},
      {date: '20160105', value: 19900.55},
      {date: '20160206', value: 31800.63},
      {date: '20160307', value: 32900.32},
      {date: '20160408', value: 31400.31},
      {date: '20160509', value: 34300.68},
      {date: '20160610', value: 35600.23},
      {date: '20160711', value: 22800.44},
      {date: '20160812', value: 22600.20},
      {date: '20160913', value: 22200.77},
      {date: '20161014', value: 20500.23},
      {date: '20161115', value: 28000.13},
      {date: '20161216', value: 24300.70},
      {date: '20170117', value: 24300.34},
      {date: '20170218', value: 34500.44},
      {date: '20170319', value: 23400.98},
      {date: '20170420', value: 16600.70},
      {date: '20170521', value: 13000.28},
      {date: '20170622', value: 9900.00},
      {date: '20170723', value: 8900.70},
      {date: '20170824', value: 6700.00},
      {date: '20170925', value: 5300.98},
      {date: '20171026', value: 5800.13}
    ];

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
      width = 680 - margin.left - margin.right,
      heightLine = 350 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.timeParse('%Y%m%d');

    data.forEach(function(d) {
      d.date = parseDate(d.date);
    });

    var y = d3.scaleLinear()
      .rangeRound([heightLine, 0])
      .domain([0, d3.max(data, function(d) { return d.value + 10000; })]);

    var x = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(data, function(d) { return d.date; }));

    var xAxis = d3.axisBottom()
      .scale(x)
      .tickSize(0);

    var yAxis = d3.axisLeft()
      .scale(y)
      .tickSizeInner(-(width))
      .tickSizeOuter(0)
      .ticks(5);

    var chart = d3.select('.lineGraph')
      .attr('width', '100%')
      .attr('height', heightLine + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + heightLine + ')')
      .call(xAxis);

    chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Värdeutveckling');

    // In accordance with LFUI styling all line graphs should have a gradient covering the area
    // they cover. For this we use d3.area(). The gradient is then added to the svg's <defs> element,
    // and later called upon using its id. We draw the gradient using non-D3 svg properties.
    var area = d3.area()
      .x(function(d) { return x(d.date); })
      .y0(heightLine)
      .y1(function(d) { return y(d.value); });

    var defs = chart.append('defs');

    var gradient = defs.append('linearGradient')
      .attr('id', 'svgGradient')
      .attr('x1', '0%')
      .attr('x2', '0%')
      .attr('y1', '0%')
      .attr('y2', '100%');

    gradient.append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', '#005c9d')
      .attr('stop-opacity', 0.3);

    gradient.append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', 'white')
      .attr('stop-opacity', 0);

    chart.append('path')
      .datum(data)
      .attr('class', 'area')
      .attr('d', area)
      .attr('fill', 'url(#svgGradient)');

    // We also prapre a clipPath for when we select a certain span in the chart.
    defs.append('clipPath')
      .attr('id', 'selectionClip')
      .append('rect');

    var line = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.value); });

    var city = chart.selectAll('.city')
        .data([data])
      .enter().append('g')
        .attr('class', 'city');

    chart.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', line);

    // For all mouse over effects we add a separate svg group. We'll also be adding our
    // mouse event listeners to this group.
    var mouseG = city.append('g')
      .attr('class', 'mouse-over-effects');

    mouseG.append('path')
      .attr('class', 'mouse-line')
      .style('stroke', '#005c9d')
      .style('stroke-width', '2px')
      .style('opacity', '0');

    var lines = document.getElementsByClassName('line');

    var mousePerLine = mouseG.select('.mouse-per-line')
      .data(d3.range(lines.length))
      .enter()
      .append('g')
      .attr('class', 'mouse-per-line');

    mousePerLine.append('rect')
      .attr('width', 120)
      .attr('height', 60)
      .style('fill', '#005c9d')
      .attr('transform', 'translate(-60, 0)')
      .style('stroke-width', '2px')
      .style('opacity', '0');

    mousePerLine.append('text')
      .attr('transform', 'translate(-24,35)')
      .attr('class', 'mouseRectText');

    var firstSelection = false;
    var secondSelection = false;
    var firstSelectionRectX,
      secondSelectionRectX,
      firstSelectionValue,
      secondSelectionValue;

    mouseG.append('.lineGraph:rect')
      .attr('class', 'mouseRect')
      .attr('width', width)
      .attr('height', heightLine)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('mouseout', function() { // on mouse out hide line, rect and text
        d3.select('.mouse-line')
          .style('opacity', '0');
        d3.selectAll('.mouse-per-line rect')
          .style('opacity', '0');
        d3.selectAll('.mouse-per-line text')
          .style('opacity', '0');
      })
      .on('mouseover', function() { // on mouse in show line, rect and text
        d3.select('.mouse-line')
          .style('opacity', '1');
        d3.selectAll('.mouse-per-line rect')
          .style('opacity', '1');
        d3.selectAll('.mouse-per-line text')
          .style('opacity', '1');
      })

      .on('mousemove', function() { // mouse moving over chart
        var mouse = d3.mouse(this);

        // move the vertical line
        d3.select('.mouse-line')
          .attr('d', function() {
            var d = 'M' + mouse[0] + ',' + heightLine;
            d += ' ' + mouse[0] + ',' + 0;
            return d;
          });

        // position the rect and text
        d3.selectAll('.mouse-per-line')
          .attr('transform', function(d, i) {
            var beginning = 0,
              end = lines[0].getTotalLength(),
              target = null;

            while (true){
              target = Math.floor((beginning + end) / 2);
              var pos = lines[0].getPointAtLength(target);
              if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                break;
              }
              if (pos.x > mouse[0]) end = target;
              else if (pos.x < mouse[0]) beginning = target;
              else break; //position found
            }

            // update the text with y value

            d3.select(this).select('text')
              .text(y.invert(pos.y).toFixed(0) + ' kr');

            // return position
            return 'translate(' + mouse[0] + ',' + 0 +')';
          });
      })

      .on('click', function() {
        var mouse = d3.mouse(this);

        var beginning = 0;
        var end = lines[0].getTotalLength();
        var target = null;

        while (true){
          target = Math.floor((beginning + end) / 2);
          var pos = lines[0].getPointAtLength(target);
          if ((target === end || target === beginning) && pos.x !== mouse[0]) {
            break;
          }
          if (pos.x > mouse[0]) end = target;
          else if (pos.x < mouse[0]) beginning = target;
          else break; //position found
        }

        // Controllers for the selections. Pin line on click to the mouse position,
        // if another click is made calculate the value difference between then and also pin
        // rect with text. On a third click, restore the chart.
        if(!firstSelection && !secondSelection) {
          mouseG.append('path')
            .attr('class', 'first-selection')
            .style('stroke', '#005c9d')
            .style('stroke-width', '2px')
            .attr('d', function() {
              var d = 'M' + mouse[0] + ',' + heightLine;
              d += ' ' + mouse[0] + ',' + 0;
              return d;
            });

          firstSelectionValue = y.invert(pos.y).toFixed(0);
          firstSelectionRectX = mouse[0];
          firstSelection = true;
        } else if (firstSelection && !secondSelection) {
          mouseG.append('path')
            .attr('class', 'second-selection')
            .style('stroke', '#005c9d')
            .style('stroke-width', '2px')
            .attr('d', function() {
              var d = 'M' + mouse[0] + ',' + heightLine;
              d += ' ' + mouse[0] + ',' + 0;
              return d;
            });

          secondSelectionValue = y.invert(pos.y).toFixed(0);
          secondSelectionRectX = mouse[0];
          secondSelection = true;
          var selectionWidth;

          secondSelectionRectX < firstSelectionRectX ? selectionWidth = (firstSelectionRectX - secondSelectionRectX) : selectionWidth = (secondSelectionRectX - firstSelectionRectX);

          mouseG.append('rect')
            .attr('class', 'selectionRect')
            .attr('transform', 'translate(' + (secondSelectionRectX < firstSelectionRectX ? secondSelectionRectX : firstSelectionRectX) + ', 0)')
            .attr('width', selectionWidth)
            .attr('height', 60)
            .style('fill', '#005c9d');

          mouseG.append('text')
            .attr('class', 'mouseRectText')
            .attr('transform', 'translate(' + (firstSelectionRectX + ((secondSelectionRectX - firstSelectionRectX) / 2)) + ', 35)')
            .text(function() {
              var total = secondSelectionValue - firstSelectionValue;
              total > 0 ? total = '+ ' + total + ' kr' : total += ' kr';
              return total;
            })
            .attr('text-anchor', 'middle');

          d3.select('#selectionClip rect')
            .attr('x', (secondSelectionRectX < firstSelectionRectX ? secondSelectionRectX : firstSelectionRectX))
            .attr('width', selectionWidth)
            .attr('height', heightLine);

          d3.select('.area')
            .attr('clip-path', 'url(#selectionClip)')
            .style('fill', 'url(#svgGradient)');

        } else if (firstSelection && secondSelection) {
          d3.select('.first-selection')
            .remove();
          d3.select('.second-selection')
            .remove();
          d3.select('.selectionRect')
            .remove();
          d3.select('#selectionClip rect')
            .attr('x', '')
            .attr('width', '')
            .attr('height', '');
          d3.selectAll('.mouse-over-effects .mouseRectText')
            .remove();

          d3.select('.area')
            .attr('clip-path', '');

          firstSelection = false;
          secondSelection = false;
        }
      });
  
}

export {lineGraphExample}