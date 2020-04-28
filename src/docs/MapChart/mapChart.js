import * as topojson from 'topojson';
var countriesCsv = require('./countries.csv');
var d3;

// Thing is, we load d3 from its cdn in our index.html. This because we really really don't
// want it in our node_modules.
if(window.d3) {
  d3 = window.d3;
}

const mapChartExample = () => {
  var countryData = [
    {
      'shares': 25,
      'countries': 'Sweden',
      'countryCodes': ['752'],
      'color': 1
    },
    {
      'shares': 42,
      'countries': 'Western Europe',
      'countryCodes': ['040', '056', '250', '276', '438', '442', '492', '528', '756'],
      'color': 2
    },
    {
      'shares': 38,
      'countries': 'Northern Europe',
      'countryCodes': ['248', '208', '233', '234', '233', '831', '352', '372', '833', '832', '428', '440', '578', '744', '826'],
      'color': 3
    },
    {
      'shares': 1,
      'countries': 'North America',
      'countryCodes': ['840', '124', '484'],
      'color': 4
    },
    {
      'shares': 99,
      'countries': 'Turkey',
      'countryCodes': ['792'],
      'color': 5
    },
    {
      'shares': 40,
      'countries': 'Finland',
      'countryCodes': ['246'],
      'color': 6
    },
    {
      'shares': 75,
      'countries': 'Russian Federation',
      'countryCodes': ['643'],
      'color': 7
    }
  ];

  var colorScale = d3.scaleOrdinal()
    .range(['#00427a', '#468abd', '#b9d7e7', '#ad1015', '#e05656', '#f7d1d3', '#032f55', '#005b9c', '#74b3d6', '#7e0a0d', '#d9222a', '#ea9093', '#4d4d4d', '#747578', '#a9aaa9']);

  var width = 680;
  var mapHeight = 675;

  // We choose Mercator projection here
  var projection = d3.geoMercator()
      .scale(110)
      .translate([(width / 2) + 120, (mapHeight / 2)])
      .precision(.1);

  var path = d3.geoPath()
      .projection(projection);

  var graticule = d3.geoGraticule();

  // draw the map
  var svg = d3.select('#map')
      .attr('width', '100%')
      .attr('height', mapHeight)
      .attr('viewBox','0 0 '+Math.min(width,mapHeight)+' '+Math.min(width,mapHeight))
      .attr('preserveAspectRatio','xMinYMin');

  svg.append('defs').append('path')
      .datum({type: 'Sphere'})
      .attr('id', 'sphere')
      .attr('d', path);

  svg.append('use')
      .attr('class', 'stroke')
      .attr('xlink:href', '#sphere');

  svg.append('use')
      .attr('class', 'fill')
      .attr('xlink:href', '#sphere')
      .style('fill', 'none');

  svg.append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', path);

  // Mouseover text
  var mouseOver = svg.append('g')
    .attr('class', 'mouse-over-effects');

  mouseOver.append('g')
    .append('text')
    .attr('x', 12)
    .attr('dy', '.35em')
    .attr('transform', 'translate(0,35)')
    .attr('class', 'mouseRectText')
    .style('stroke-width', '2px')
    .style('fill', '#005c9d');

  // Load world typography
  d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json', function(error, world) {
    if (error) throw error;

    // center projection on sweden lat long
    projection.center([59.33258, 18.0649]);
    //convert with topojson
    var countries = topojson.feature(world, world.objects.countries);

    // Add country code from topojson to class,
    // Add country name from countries.csv as id when country code === id
    svg.selectAll('.country')
        .data(countries.features)
      .enter().insert('path', '.graticule')
        .attr('class', function(d) { return 'country code' + d.id; })
        .attr('id', function(d) {
          for(let j = 0; j < countriesCsv.length; j++) {
            if (d.id === countriesCsv[j].countryCode) {
              return countriesCsv[j].name;
            }
          }
        })
        .attr('d', path)
        .style('fill', function(d, i) {
          return '#d9d9d9';
        });

    // Remove antarctica
    d3.select('.code010').remove();

    // Color the countries in the arrays
    d3.selectAll('.country')
      .filter(function(d, i) {
        for(var j = 0; j < countryData.length; j++) {
          if(countryData[j].countryCodes.includes(d.id)) {
            return d.id;
          }
        }
        return false;
      })
      .style('fill', function(d, i) {
        for(var j = 0; j < countryData.length; j++) {
          if(countryData[j].countryCodes.includes(d.id)) {
            return colorScale([countryData[j].color]);
          }
        }
      })
      .classed('active', true);;

    // mouseover and mouseout
    d3.selectAll('.country')
      .on('mouseover', function() {
        var mouse = d3.mouse(this);
        // "hover" highlight
        if(!d3.select(this).attr('class').includes('active')) {
          d3.select(this)
            .style('fill', '#e8e8e8');
        }

        // Text
        d3.select('#map .mouseRectText')
          .style('opacity', '1')
          .attr('transform', 'translate(' + mouse[0] + ', ' + mouse[1] +')')
          .text(() => {
            return d3.select(this).attr('id');
          });
      })
      .on('mouseout', function() {
        if(!d3.select(this).attr('class').includes('active')) {
          d3.select(this)
            .style('fill', '#d7d8d6');
        }
        d3.select('#map .mouseRectText')
          .style('opacity', '0');
      });

    // Legend
    svg.append('g')
      .attr('class', 'legend')
      .attr('transform', 'translate(0, ' + (mapHeight - 150) + ')');

    d3.select('#map .legend')
      .select(null)
      .data(countryData)
      .enter()
      .each(function(d, i) {
        d3.select('#map .legend')
          .append('rect')
          .attr('x', 20)
          .attr('y', function() {
            return 25 * (i + 1) - 14; })
          .attr('height', '16px')
          .attr('width', '16px')
          .style('fill', function() {
            return colorScale(countryData[i].color);
          });

        d3.select('#map .legend')
          .append('text')
          .attr('x', '45')
          .attr('y', function() { return (25 * (i + 1)); })
          .attr('class', 'legendText')
          .style('stroke', '2px')
          .attr('fill', '#000000')
          .text(function() {
            return d.countries + ' ' + d.shares + ' %';
          });
      });
  });

  // d3.select(self.frameElement).style('height', mapHeight + 'px');
}

export {mapChartExample};