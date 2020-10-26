
 import chartColors from '../../data/chartColors';

const mapChartExample = () => {

  


  Promise.all([
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json())
    ]).then(([data]) => {
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica');
    let countryList = [{country: 'Sweden',value:10},{country:'Germany',value:15},{country:'France',value:8}];
    const lookup = new Map(countryList.map((d) => [d.country, d.value]));
    
    const display_list = countries.map((element) => {
      
      
      return {
          feature: element,
          value: lookup.get(element.properties.name) || 0,
       };
     });
     console.log(display_list)
    const chart = new Chart(document.getElementById("mapChart").getContext("2d"), {
      type: 'choropleth',
      data: {
        datasets: [{
          label: 'Countries',
          data: display_list,
          
        }],
        
      },
      
      options: {
        // tooltips: {
        //   enabled: false
        // },
        legend: {
          display: false
        },
        scale: {
          projection: 'mercator'
        },
        geo: {
          
        },
        elements: {
          geoFeature: {
            
          }
        }
        
      }
    });
    console.log(chart.config.options)
  });
  
}

export {mapChartExample};