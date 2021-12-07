import Vivus from 'vivus';

const calloutExample = () => {
  function draw(el, options = {}, callback) {
    const opts = $.extend({
      animTimingFunction: Vivus.EASE_OUT,
      duration: 100
    }, options);

    return new Vivus(el, opts, callback);
  }

  function getDataOptions(data) {
    const options = {};

    Object.keys(data).forEach(key => {
      const match = key.match(/^draw([\w]+)/);

      if (match) {
        const prop = match[1][0].toLowerCase() + match[1].substr(1);
        options[prop] = data[key];
      }
    });

    return options;
  }

  $('[data-draw]').each((index, el) => {
    const $el = $(el);
    const options = getDataOptions($el.data());

    if (options.hasOwnProperty('on')) {
      delete options.on;
      options.start = 'autostart';
      $el.on(options.on, () => draw(el, options));
    } else {
      draw(el, options);
    }
  });
}

export  {calloutExample}