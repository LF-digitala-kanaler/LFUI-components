
import moment from 'moment';
import 'moment/locale/sv';
moment.locale('sv');
const chartUtils = {
  
  generateData : function () {
    var unit = 'day';
    
    function beforeNineThirty(date) {
      return date.hour() < 9 || (date.hour() === 9 && date.minute() < 30);
    }

    // Returns true if outside 9:30am-4pm on a weekday
    function outsideMarketHours(date) {
      if (date.isoWeekday() > 5) {
        return true;
      }
      if ((beforeNineThirty(date) || date.hour() > 16)) {
        return true;
      }
      return false;
    }

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomBar(date, lastClose) {
      var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
      var close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
      return {
        t: date.valueOf(),
        y: close
      };
    }

    var date = moment('2020 01 Jan', 'YYYY DD MMM ');
    
    var now = moment();
    var data = [];
  
    
    for (; data.length < 600 && date.isBefore(now); date = date.clone().add(1, unit).startOf(unit)) {
      if (outsideMarketHours(date)) {
        if (!beforeNineThirty(date)) {
          date = date.clone().add(date.isoWeekday() >= 5 ? 8 - date.isoWeekday() : 1, 'day');
        }
      }
      data.push(randomBar(date, data.length > 0 ? data[data.length - 1].y : 30));
    }
    
    return data;
  }
}

export default chartUtils;