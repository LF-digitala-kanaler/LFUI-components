
import chartColors from '../../data/chartColors';

const mapChartExample = () => {
  let countryList = [{country: 'Sweden',value:10},{country:'Germany',value:15},{country:'France',value:8}, {country:'Norway',value:8}];

  Promise.all([
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json())
    ]).then(([data]) => {
    
    const countries = ChartGeo.topojson.feature(data, data.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica');
    const lookup = new Map(countryList.map((d) => [d.country, d.value]));
    const colors = chartColors.getColorScale(countryList.length);
    
    let count = 0;
    
    const selected = countries.map((item) => { 
      if(lookup.get(item.properties.name)){
        count++
        return colors[count-1]
      }else{
        return chartColors.getDisabledColor();
      }
    })

    const display_list = countries.map((element) => {
      return {
          feature: element,
          value: lookup.get(element.properties.name) || 0,
       };
     });
    
   
    const mapChart = new Chart(document.getElementById("mapChart").getContext("2d"), {
      type: 'choropleth',
      data: {
        datasets: [{
          data: display_list,
          hoverBackgroundColor: selected,
          backgroundColor: selected
        }],
        
      },
      
      options: {
        animation: {
          duration: 0
        },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        legendCallback: function (mapChart) {  
       
          var text = [];
          for (var i = 0; i < countryList.length; i++) {
              text.push('<li  class="chart-legend-item"><div class="chart-legend-box"  style="background-color:' + colors[i] + '"></div>'+ countryList[i].country +'</li>');
          }
          return text.join("");   
        },
        scale: {
          projection: 'mercator'
        },
        geo: {
        
        },
        elements: {
          geoFeature: {
            
            borderColor: chartColors.getDisabledColor(),
          
          },
         
        }
        
      }
      
    });
    document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend', mapChart.generateLegend());
    console.log(mapChart.config.options.events)
  });
  
}

export {mapChartExample};