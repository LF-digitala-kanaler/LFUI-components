const PRESSED_ATTR = 'aria-pressed';
const isTouch = 'ontouchstart' in window;
const eventIn = isTouch ? 'touchstart' : 'mousedown';
const eventOut = isTouch ? 'touchend' : 'mouseup mouseout dragstart';

$(document).on(eventIn, '[data-effect]', event => {
  let tilted = false;
  let up = false;
  const $target = $(event.currentTarget);
  const effect = $target.data('effect');

  function cleanup() {
    $target
      .removeClass(`${ effect }-in ${ effect }-out`)
      .off('animationend', onIn)
      .off(eventOut, onOut);
  }

  function onIn() {
    tilted = true;
    if (up) {
      $target
        .attr(PRESSED_ATTR, 'false')
        .addClass(`${ effect }-out`)
        .removeClass(`${ effect }-in`)
        .one('animationend', cleanup);
    }
  }

  function onOut() {
    up = true;
    if (tilted) {
      $target
        .attr(PRESSED_ATTR, 'false')
        .addClass(`${ effect }-out`)
        .removeClass(`${ effect }-in`)
        .one('animationend', cleanup);
    }
  }

  if ($target.prop('disabled')) {
    return;
  }

  $target
    .attr(PRESSED_ATTR, 'true')
    .removeClass(`${ effect }-out`)
    .addClass(`${ effect }-in`)
    .one('animationend', onIn)
    .one(eventOut, onOut);
});
