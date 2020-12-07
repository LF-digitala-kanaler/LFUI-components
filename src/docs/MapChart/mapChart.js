
import chartColors from '../../data/chartColors';

const getData = (legendColor, updateCountry) => {
  console.log(legendColor)
  let countryList = [{country: 'Sweden',value:10, hidden: false},{country:'Germany',value:15, hidden: false},{country:'France',value:8, hidden: false}, {country:'Norway',value:8, hidden: false}];
  
  Promise.all([
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json())
    ]).then(([data]) => {
      list(data, countryList, legendColor)
    
  });
}
const list = (data, countryList, legendColor) => {

  let countries = ChartGeo.topojson.feature(data, data.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica');
  
  let visibleCountries = countryList.filter(item => {
    console.log(item, 'ittem')
    if ( item.hidden === false){
      return item
    }
  })
  console.log(visibleCountries, 'vis')
  let lookup = new Map(visibleCountries.map((d) => [d.country, d.value]));
  legendColor = window.init ? legendColor : chartColors.getColorScale(visibleCountries.length);
  
  let count = 0;

  let selected = countries.map((item) => { 
    
    if(lookup.get(item.properties.name)){
      count++
      return legendColor[count-1]
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
    
    
    map(display_list, selected, visibleCountries, legendColor)
    click(mapChart, countryList, legendColor)
}
const map = (display_list, selected, visibleCountries, legendColor) => {
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
        console.log(legendColor, 'callback')
        var text = [];
        for (var i = 0; i < visibleCountries.length; i++) {
            text.push('<li  class="chart-legend-item"><div class="chart-legend-box"  style="background-color:' + legendColor[i] + '" onclick="updateDataset(event, ' + '\'' + i + '\'' + ')"></div>'+ visibleCountries[i].country +'</li>');
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
  
  window.updateDataset = function(event, datasetIndex) {

    var index = parseInt(datasetIndex);
    
    let alreadyHidden = countryList[index].hidden = true; 
    var anyOthersAlreadyHidden = false;
    var allOthersHidden = true;
    console.log(alreadyHidden)
    countryList.forEach(function(e, i) {
      if (i !== index) {
        if (i.hidden) {
          anyOthersAlreadyHidden = true;
        } else {
          allOthersHidden = false;
        }
      }
    });
    
    if(!window.init) {
      console.log('fiirst')
      countryList.forEach(function(e, i) {
        if (i !== index) {
          countryList[index].hidden = false
          legendColor = legendColor.map((item,ix) => {
            if(ix !== index) {
              return item = chartColors.getDisabledColor()
            }else {
              return item
            }
          })
        }else {
          countryList[index].hidden = true
        }
      });
      
      window.init = true;
     
    }else{
      console.log('not first')
      if(alreadyHidden) {
        console.log('already hidden')
        legendColor[index] = countryList[index].hidden = false ?  chartColors.getDisabledColor() : legendColor[index]
        countryList[index].hidden = false
        console.log(countryList)
      }else {
        countryList.forEach(function(e, i) {
              
          if (i !== index) {
            if (!anyOthersAlreadyHidden && !allOthersHidden) {
              countryList[index].hidden = true;
              legendColor[index] = chartColors.getDisabledColor();
              console.log('first')
            }
            else if(anyOthersAlreadyHidden && !allOthersHidden){
              legendColor[index] = chartColors.getDisabledColor();
              countryList[index].hidden = false;
              console.log('second')
            }
           
          }
        });
      }
    }
    
    getData(legendColor)
    console.log(countryList, 'data')
  }
 
}
const mapChartExample = () => {
  window.init = false;
  getData()
  
}

export {mapChartExample};