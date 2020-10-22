const chartColors = {

  _getColors: function(numberOfItems) {

    switch (numberOfItems) {
      case 1:
      case 2:
        return [
          '#00427a', '#e05656'
        ];
      case 3:
        return [
          '#00427a', '#b9d7e7', '#e05656'
        ];
      case 4:
        return [
          '#00427a', '#b9d7e7', '#e05656', '#f7d1d3'
        ];
      case 5:
        return [
          '#00427a', '#468abd', '#b9d7e7', '#e05656', '#f7d1d3'
        ];
      case 6:
        return [
          '#00427a', '#468abd', '#b9d7e7', '#ad1015', '#e05656', '#f7d1d3'
        ];
      case 7:
        return [
          '#00427a', '#468abd', '#b9d7e7', '#ad1015', '#e05656', '#f7d1d3', '#4d4d4d'
        ];
      case 8:
        return [
          '#00427a', '#468abd', '#b9d7e7', '#ad1015', '#e05656', '#f7d1d3', '#4d4d4d', '#e2e2e2'
        ];
      case 9:
        return [
          '#00427a', '#468abd', '#b9d7e7', '#ad1015', '#e05656', '#f7d1d3', '#4d4d4d', '#a9aaa9', '#e2e2e2'
        ];
      default:
        return [
          '#032f55', '#00427a', '#005c9c', '#468abd', '#74b3d6', '#b9d7e7', '#7e0a0e', '#ad1015', '#e30613', '#e05656',
          '#ea8f93', '#f7d1d3', '#4d4d4d', '#747578', '#a9aaa9', '#e2e2e2'
        ];
    }

  },

  getColor: function(index, numberOfItems) {
    const colorScale = this._getColors(numberOfItems);
    return colorScale[index];
  },

  getColorScale: function(numberOfItems) {
    const colorScale = this._getColors(numberOfItems);
    return colorScale;
  },

  getDisabledColor: function() {
    return '#d9d9d9';
  },
  getNegativeColor: function() {
    return '#E30613';
  },
  getPositiveColor: function() {
    return '#005AA0';
  },
  getGridColor: function() {
    return '#F3F3F3'
  }

}

export default chartColors;