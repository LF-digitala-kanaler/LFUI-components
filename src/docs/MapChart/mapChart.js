
import chartColors from '../../data/chartColors';

const getData = (countryList,legendColor, colors) => {
  
  Promise.all([
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json())
    ]).then(([data]) => {
      list(data, countryList, legendColor, colors)
      
  });
}
const list = (data, countryList, legendColor, colors) => {
 
  let countries = ChartGeo.topojson.feature(data, data.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica');
  
  let visibleCountries = countryList.filter(item => {
    if ( item.hidden === false){
      return item
    }
  })
  
  let lookup = new Map(visibleCountries.map((d) => [d.country, d.value]));
  legendColor = window.init ? legendColor : chartColors.getColorScale(countryList.length);
  colors = chartColors.getColorScale(countryList.length);
  let count = 0;
  let selected = countries.map((item) => { 
    if(lookup.get(item.properties.name)){
      
      count++
      for (var i = 0; i < countryList.length; i++) {
        if(countryList[i].country === item.properties.name ) {
          return colors[i]
        }
      }
      
      
    }else{
      return chartColors.getDisabledColor();
    }
  })
  let display_list = countries.map((element) => {
    return {
        feature: element,
        value: lookup.get(element.properties.name) || 0,
      };
    });
    
    map(display_list, selected, countryList, legendColor)
    click(mapChart, countryList, legendColor)
}

const map = (display_list, selected, countryList, legendColor) => {
  
  window.mapChart = new Chart(document.getElementById("mapChart").getContext("2d"), {
    type: 'choropleth',
    data: {
      datasets: [{
        data: display_list,
        hoverBackgroundColor: selected,
        backgroundColor: selected,
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
      
      legendCallback: function () {  
       
        var text = [];
        for (var i = 0; i < countryList.length; i++) {
            text.push('<li  class="chart-legend-item"><div class="chart-legend-box"  style="background-color:' + legendColor[i] + '" onclick="updateDataset(event, ' + '\'' + i + '\'' + ')"></div>'+ countryList[i].country +'</li>');
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
  document.getElementById('js-chartLegends').innerHTML = '';
  document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend', mapChart.generateLegend());
  
}
const click = (mapChart, countryList, legendColor) => {
  let updatedCountryList = countryList;
  window.updateDataset = function(event, datasetIndex) {
    
    let colors = chartColors.getColorScale(updatedCountryList.length);
    
    var index = parseInt(datasetIndex);
    let alreadyHidden = updatedCountryList[index].hidden === true; 
    
    let anyOthersAlreadyHidden = false;
    let allOthersHidden = true;

    updatedCountryList.forEach(function(e,i, item) {
      
      if (i !== index) {
        if (item[i].hidden === true) {
          anyOthersAlreadyHidden = true;
        } else { 
          allOthersHidden = false;
        }
      }
    });
    
    if(!window.init) {
      updatedCountryList.forEach(function(e, i) {
        if (i !== index) {
          updatedCountryList[i].hidden = true
          legendColor = legendColor.map((item,ix) => {
            if(ix !== index) {
              return item = chartColors.getDisabledColor()
            }else {
              return item
            }
          })
        }else {
          updatedCountryList[i].hidden = false
        }
      });
      
      window.init = true;
     
    }else{
      
      if(alreadyHidden) {
        legendColor[index] = updatedCountryList[index].hidden === false ?  chartColors.getDisabledColor() : colors[index]
        updatedCountryList[index].hidden = false
      }else {
        
        updatedCountryList.forEach(function(e, i) {
          if (i !== index) {
            if (!anyOthersAlreadyHidden && !allOthersHidden) {
              updatedCountryList[index].hidden = true;
              legendColor[index] = chartColors.getDisabledColor();
            }
            else if(anyOthersAlreadyHidden && !allOthersHidden){
              legendColor[index] = chartColors.getDisabledColor();
              updatedCountryList[index].hidden = true;
            }
           
          } 
        });
      }
    }
   
    getData(updatedCountryList,legendColor, colors)
    
  }
 
}
const mapChartExample = () => {
  let countryList = [{country: 'Sweden',value:10, hidden: false},{country:'Germany',value:15, hidden: false},{country:'France',value:8, hidden: false}, {country:'Norway',value:8, hidden: false}];

  window.init = false;
  getData(countryList)
  
}

export {mapChartExample};