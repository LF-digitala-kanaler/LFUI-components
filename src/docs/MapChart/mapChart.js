/* global Chart, ChartGeo */

import chartColors from '../../data/chartColors'

const getData = (countryList, legendColor, colors) => {
  Promise.all([
    window.fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json())
  ]).then(([data]) => {
    list(data, countryList, legendColor, colors)
  })
}
const list = (data, countryList, legendColor, colors) => {
  const countries = ChartGeo.topojson.feature(data, data.objects.countries).features.filter((f) => f.properties.name !== 'Antarctica')

  const visibleCountries = countryList.filter(item => item.hidden === false)

  const lookup = new Map(visibleCountries.map((d) => [d.country, d.value]))
  legendColor = window.init ? legendColor : chartColors.getColorScale(countryList.length)
  colors = chartColors.getColorScale(countryList.length)

  const selected = countries.map((item) => {
    if (lookup.get(item.properties.name)) {
      for (let i = 0; i < countryList.length; i++) {
        if (countryList[i].country === item.properties.name) {
          return colors[i]
        }
      }
    }
    return chartColors.getDisabledColor()
  })
  const displayList = countries.map((element) => {
    return {
      feature: element,
      value: lookup.get(element.properties.name) || 0
    }
  })

  map(displayList, selected, countryList, legendColor)
  click(window.mapChart, countryList, legendColor)
}

const map = (displayList, selected, countryList, legendColor) => {
  if (document.getElementById('mapChart') === null) return
  window.mapChart = new Chart(document.getElementById('mapChart').getContext('2d'), {
    type: 'choropleth',
    data: {
      datasets: [{
        data: displayList,
        hoverBackgroundColor: selected,
        backgroundColor: selected
      }]
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
        const text = []
        for (let i = 0; i < countryList.length; i++) {
          text.push('<li  class="chart-legend-item chart-legend-item-clickable"><div class="chart-legend-box"  style="background-color:' + legendColor[i] + '" onclick="updateDataset(event, ' + '\'' + i + '\'' + ')"></div>' + countryList[i].country + '</li>')
        }
        return text.join('')
      },
      scale: {
        projection: 'mercator'
      },
      geo: {

      },
      elements: {
        geoFeature: {
          borderColor: chartColors.getDisabledColor()
        }

      }

    }

  })
  document.getElementById('js-chartLegends').innerHTML = ''
  document.getElementById('js-chartLegends').insertAdjacentHTML('beforeend', window.mapChart.generateLegend())
}
const click = (mapChart, countryList, legendColor) => {
  const updatedCountryList = countryList
  window.updateDataset = function (event, datasetIndex) {
    const colors = chartColors.getColorScale(updatedCountryList.length)

    const index = parseInt(datasetIndex)
    const alreadyHidden = updatedCountryList[index].hidden === true

    let anyOthersAlreadyHidden = false
    let allOthersHidden = true

    updatedCountryList.forEach(function (e, i, item) {
      if (i !== index) {
        if (item[i].hidden === true) {
          anyOthersAlreadyHidden = true
        } else {
          allOthersHidden = false
        }
      }
    })

    if (!window.init) {
      updatedCountryList.forEach(function (e, i) {
        if (i !== index) {
          updatedCountryList[i].hidden = true
          legendColor = legendColor.map((item, ix) => {
            if (ix !== index) {
              return chartColors.getDisabledColor()
            } else {
              return item
            }
          })
        } else {
          updatedCountryList[i].hidden = false
        }
      })

      window.init = true
    } else {
      if (alreadyHidden) {
        legendColor[index] = updatedCountryList[index].hidden === false ? chartColors.getDisabledColor() : colors[index]
        updatedCountryList[index].hidden = false
      } else {
        updatedCountryList.forEach(function (e, i) {
          if (i !== index) {
            if (!anyOthersAlreadyHidden && !allOthersHidden) {
              updatedCountryList[index].hidden = true
              legendColor[index] = chartColors.getDisabledColor()
            } else if (anyOthersAlreadyHidden && !allOthersHidden) {
              legendColor[index] = chartColors.getDisabledColor()
              updatedCountryList[index].hidden = true
            }
          }
        })
      }
    }

    getData(updatedCountryList, legendColor, colors)
  }
}
const mapChartExample = () => {
  const countryList = [{ country: 'Sweden', value: 10, hidden: false }, { country: 'Germany', value: 15, hidden: false }, { country: 'France', value: 8, hidden: false }, { country: 'Norway', value: 8, hidden: false }]

  window.init = false
  getData(countryList)
}

export { mapChartExample }
