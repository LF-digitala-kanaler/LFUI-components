const lineChartExample = () => {
   
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

    var chart = d3.select('.lineChart')
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
      .text('Value');

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

    mouseG.append('.lineChart:rect')
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
  var data = [
      {
        name: 'Insatt kapital',
        id: 'insattKapital',
        values: [
          {date: '20110101', value: 0},
          {date: '20110301', value: 2000},
          {date: '20110501', value: 2500},
          {date: '20110701', value: 2500},
          {date: '20110901', value: 2600},
          {date: '20111101', value: 3650},
          {date: '20120101', value: 3665},
          {date: '20120301', value: 3720},
          {date: '20120501', value: 3725},
          {date: '20120701', value: 3780},
          {date: '20120901', value: 3920},
          {date: '20121101', value: 4200},
          {date: '20130101', value: 5380},
          {date: '20130301', value: 5120},
          {date: '20130501', value: 4980},
          {date: '20130701', value: 4800},
          {date: '20130901', value: 3620},
          {date: '20131101', value: 3750},
          {date: '20140101', value: 2680},
          {date: '20140301', value: 2710},
          {date: '20140501', value: 3890},
          {date: '20140701', value: 4020},
          {date: '20140901', value: 4410},
          {date: '20141101', value: 4120},
          {date: '20150101', value: 4080},
          {date: '20150301', value: 3600},
          {date: '20150501', value: 3330},
          {date: '20150701', value: 3500},
          {date: '20150901', value: 4650},
          {date: '20151101', value: 5720}
        ]
      },
      {
        name: 'Totalt kapital',
        id: 'totaltKapital',
        values: [
          {date: '20110101', value: 0},
          {date: '20110301', value: 0},
          {date: '20110501', value: 0},
          {date: '20110701', value: 1500},
          {date: '20110901', value: 1600},
          {date: '20111101', value: 1650},
          {date: '20120101', value: 1665},
          {date: '20120301', value: 1720},
          {date: '20120501', value: 1725},
          {date: '20120701', value: 2780},
          {date: '20120901', value: 2920},
          {date: '20121101', value: 2200},
          {date: '20130101', value: 2380},
          {date: '20130301', value: 3120},
          {date: '20130501', value: 3980},
          {date: '20130701', value: 3800},
          {date: '20130901', value: 4620},
          {date: '20131101', value: 3750},
          {date: '20140101', value: 3680},
          {date: '20140301', value: 3710},
          {date: '20140501', value: 2890},
          {date: '20140701', value: 2020},
          {date: '20140901', value: 2210},
          {date: '20141101', value: 2120},
          {date: '20150101', value: 1080},
          {date: '20150301', value: 2600},
          {date: '20150501', value: 2330},
          {date: '20150701', value: 3500},
          {date: '20150901', value: 3650},
          {date: '20151101', value: 4720}
        ]
      },
      
    ];

    var colorScale = d3.scaleOrdinal()
      .range(['#00427a', '#e30613', '#74b3d6', '#7e0a0d']);

    var margin = {top: 20, right: 30, bottom: 110, left: 40},
      width = 680 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.timeParse('%Y%m%d');

    for (var i = 0; i < data.length; i++) {
      data[i].values.forEach(function(d) {
        d.date = parseDate(d.date);
      });
    }

    var y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data[0].values, function(d) { return d.value + 1000; })]);

    var x = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(data[0].values, function(d) { return d.date; }));

    var xAxis = d3.axisBottom()
      .scale(x)
      .ticks(5)
      .tickSize(0)
      .tickPadding(10);

    var yAxis = d3.axisLeft()
      .scale(y)
      .tickSizeInner(-(width))
      .tickSizeOuter(0)
      .ticks(4)
      .tickPadding(10);

    var chart = d3.select('.lineChart2')
      .attr('width', '100%')
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
      .attr('preserveAspectRatio','xMinYMin')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Värdeutveckling kr');

    // In accordance with LFUI styling all line graphs should have a gradient covering the area
    // they cover. For this we use d3.area(). The gradient is then added to the svg's <defs> element,
    // and later called upon using its id. We draw the gradient using non-D3 svg properties.
    var area = d3.area()
      .x(function(d) { return x(d.date); })
      .y0(height)
      .y1(function(d) { return y(d.value); });

    var defs = chart.append('defs');

    var line = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.value); });

    data.forEach(function(d, i) {
      if(d.name === 'MSCI World') {
        chart.append('path')
          .data([d.values])
          .classed('valueLine active', true)
          .attr('id', function() {
            return d.id;
          })
          .style('stroke', function() {
            return colorScale(i);
          })
          .style('stroke-width', '3px')
          .attr('stroke-dasharray', '6, 2')
          .attr('d', line);

      } else {
        var gradient = defs.append('linearGradient')
          .attr('id', 'svgGradient' + (i + 1) + '')
          .attr('x1', '0%')
          .attr('x2', '0%')
          .attr('y1', '0%')
          .attr('y2', '100%');

        gradient.append('stop')
          .attr('class', 'start')
          .attr('offset', '0%')
          .attr('stop-color', function() {
            return colorScale(i);
          })
          .attr('stop-opacity', 0.3);

        gradient.append('stop')
          .attr('class', 'end')
          .attr('offset', '100%')
          .attr('stop-color', 'white')
          .attr('stop-opacity', 0);

        

        chart.append('path')
          .data([d.values])
          .classed('valueLine active', true)
          .attr('id', function() {
            return d.id;
          })
          .style('stroke', function() {
            return colorScale(i);
          })
          .attr('d', line);
      }
    });

    chart.append('g')
      .attr('class', 'legend')
      .attr('transform', 'translate(0, ' + (height + 20) + ')');

    d3.select('.lineChart2 .legend')
      .select(null)
      .data(data)
      .enter()
      .each(function(d, i) {
        d3.select('.lineChart2 .legend')
          .append('rect')
          .classed('legend active', true)
          .attr('x', 0)
          .attr('y', function() {
            return 25 * (i + 1) - 14; })
          .attr('height', '16px')
          .attr('width', '16px')
          .style('fill', function() {
            return colorScale(i);
          })
          .on('click', function() {
            d3.select(this)
              .classed('active', function (d, i) {
                return !d3.select(this).classed('active');
              });

            d3.selectAll('.valueLine')
              .filter(function() {
                if(d.id === this.id)
                  return this;
                else
                  return false;
              })
              .classed('active', function (d, i) {
                return !d3.select(this).classed('active');
              });

            d3.selectAll('.area')
              .filter(function() {
                if((d.id + 'area') === this.id)
                  return this;
                else
                  return false;
              })
              .classed('active', function (d, i) {
                return !d3.select(this).classed('active');
              });
          });

        d3.select('.lineChart2 .legend')
          .append('text')
          .attr('x', '25')
          .attr('y', function() { return (25 * (i + 1)); })
          .attr('class', 'legendText')
          .style('stroke', '2px')
          .attr('fill', '#000000')
          .text(function() {
            return d.name;
          });
      });

}

export {lineChartExample}