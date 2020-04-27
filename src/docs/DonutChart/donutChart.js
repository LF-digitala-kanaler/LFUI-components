const donutChartExample = () => {
    var colorScale = d3.scaleOrdinal()
      .range(['#89070B', '#B60D15', '#E46161', '#DD272E']);

    var pieData = [
      {
        label: 'Fondförvaltning',
        count: 60
      },
      {
        label: 'Nya världen förvaltning',
        count: 20
      },
      {
        label: 'Traditionell förvaltning - nya trad',
        count: 10
      },
      {
        label: 'Övrigt',
        count: 10
      }
    ];

    var pieChartheight = 105 * 2;
    var width = 105 * 2;
    var radius = Math.min(width, pieChartheight) / 2;

    var pie = d3.pie()
      .value(function(d) { return d.count; })
      .padAngle(.03)
      .sort(null);

    var slices = pieData;

    slices.forEach(function(d){
      d.enabled = false;
    });

    var arc = d3.arc()
      .innerRadius(radius - 25)
      .outerRadius(radius);

    var svg = d3.select('svg.donutChart');

    var g = svg.append('g')
      .attr('width', width)
      .attr('height', pieChartheight)
      .attr('transform', 'translate(' + width / 2 + ',' + pieChartheight / 2 + ')');

    var total = d3.sum(slices, function(d) {
      return d.count;
    });

    var path = g.selectAll('.donutChart path.slice')
      .data(pie(slices))
      .enter()
      .append('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', function(d) {
        return colorScale(d.data.label);
      })
      .each(function(d) { this.current = d; })
      .on('click', function(label) {
        var slice = d3.select(this);
        var legends = d3.selectAll('.donutChart rect');
        var enabled = false;

        var totalEnabled = d3.sum(slices.map(function(d) {
          return d.enabled ? 1 : 0;
        }));

        if(!totalEnabled) {
          slice.classed('disabled', false);
          path.each(function(d) {
            if(d.data.label !== label.data.label) {
              $(this).addClass('disabled');
            }
          });
          legends.each(function(d) {
            if(d.data.label !== label.data.label) {
              $(this).addClass('disabled');
            }
          });

          enabled = true;
        } else {
          if (slice.classed('disabled')) {
            slice.classed('disabled', false);
            enabled = true;
          } else {
            slice.classed('disabled', true);
            enabled = false;
          }
        }

        pie.value(function(d) {
          if (d.label === label.data.label) {
            d.enabled = enabled;
          }
          return (d.enabled) ? d.count : 0;
        });

        legends.data(pie(slices)).each(function(d){
          if(d.data.enabled === false) {
            $(this).addClass('disabled');
          } else {
            $(this).removeClass('disabled');
          }
        });

        total = d3.sum(slices, function(d) {
          if(d.enabled === true) {
            return d.count;
          }
        });

        d3.selectAll('.donutChart .total text')
          .classed('hidden', false)
          .text(total + '%');
      });

    svg.append('foreignObject')
      .attr('height', '50')
      .attr('width', '220')
      .attr('transform', 'translate(250, 0)')
      .html('<div class="text-sm text-gray"><p>Ändra innehållet i grafen genom att klicka på grafens sektioner</p></div>');

    svg.append('g')
      .attr('class', 'legend')
      .attr('transform', 'translate(250, 42)')
      .selectAll('.donutChart rect')
      .data(pie(slices))
      .enter()
      .append('rect')
      .attr('height', '16px')
      .attr('width', '16px')
      .attr('fill', function(d) { return colorScale(d.data.label); })
      .attr('y', function(d, i) { return 25 * (i + 1) - 14; })
      .on('click', function(label) {
        var rect = d3.select(this);
        var enabled = false;
        var totalEnabled = d3.sum(slices.map(function(d) {
          return d.enabled ? 1 : 0;
        }));

        if(totalEnabled === 0) {
          rect.attr('class', '');
          d3.selectAll('.donutChart rect')
           .each(function(d) {
             if(d.data.label !== label.data.label) {
               $(this).addClass('disabled');
             }
           });
          enabled = true;
        } else {
          if (rect.attr('class') === 'disabled') {
            rect.attr('class', '');
            enabled = true;
          } else {
            rect.attr('class', 'disabled');
            enabled = false;
          }
        }

        pie.value(function(d) {
          if (d.label === label.data.label) {
            d.enabled = enabled;
          }
          return (d.enabled) ? d.count : 0;
        });

        path = path.data(pie(slices));

        path.each(function(d){
          if(d.data.enabled === false) {
            $(this).addClass('disabled');
          } else {
            $(this).removeClass('disabled');
          }
        });

        total = d3.sum(slices, function(d) {
          if(d.enabled === true) {
            return d.count;
          }
        });

        d3.selectAll('.donutChart .total text')
          .classed('hidden', false)
          .text(total + '%');
      });

    svg.selectAll('.donutChart .legend')
      .selectAll('text')
      .data(pie(slices))
      .enter()
      .append('text')
      .text(function(d) { return d.data.label; })
      .attr('fill', '#000000')
      .attr('x', '26px')
      .attr('y', function(d, i) { return 25 * (i + 1); });

    svg.append('g')
      .attr('class', 'total')
      .attr('transform', 'translate(' + width / 2 + ', ' + pieChartheight / 2 + ')')
      .append('text')
      .classed('pie-title hidden', true)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'central')
      .attr('fill', '#000000')
      .text(total + '%');
  }

  export {donutChartExample}