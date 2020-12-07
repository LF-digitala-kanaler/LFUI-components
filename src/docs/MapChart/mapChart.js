
import chartColors from '../../data/chartColors';

const getData = (legendColor, updateCountry) => {
  console.log(legendColor)
  let countryList = updateCountry ? updateCountry : [{country: 'Sweden',value:10, hidden: false},{country:'Germany',value:15, hidden: false},{country:'France',value:8, hidden: false}, {country:'Norway',value:8, hidden: false}];
  
  Promise.all([
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json())
    ]).then(([data]) => {
      list(data, countryList, legendColor)
    
  });
}
const list = (data, countryList, legendColor) => {

  let countries = ChartGeo.topojson.feature(data, data.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica');
  
  let visibleCountries = countryList.filter(item => {
    if ( item.hidden != true){
      return item
    }
  })

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
    
    
    // getData(countryList)
    //mapChart.update();
     
    //console.log(alreadyHidden)
    var index = parseInt(datasetIndex);
    
    let alreadyHidden = countryList[index].hidden === true; 
    var anyOthersAlreadyHidden = false;
    var allOthersHidden = true;

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
      countryList.forEach(function(e, i) {
        if (i !== index) {
          countryList[index].hidden = true
          legendColor = legendColor.map((item,ix) => {
            if(ix !== index) {
              return item = chartColors.getDisabledColor()
            }else {
              return item
            }
          })
        }
      });
      window.init = true;
     
    }else{
      if(alreadyHidden) {
        legendColor[index] = countryList[index].hidden === null ?  chartColors.getDisabledColor() : legendColor[index]
        countryList[index].hidden = false
      
      }else {
      }
    }
    console.log(window.init, legendColor, 'clikc')
    getData(legendColor)
    
  }
 
}
const mapChartExample = () => {
  window.init = false;
  getData()
  
}

export {mapChartExample};