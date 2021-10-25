/* global jQuery */

import 'bootstrap/js/src/util';
import 'bootstrap/js/src/collapse';

const NO_EXPAND = 'data-no-expand';
const EXPANDED_ATTR = 'aria-expanded';
const VALID_ELEMENTS_SELECTOR = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';

$(document).on('click', '[data-toggle="collapse:table-row"]', onClick);

function onClick(event) {
  const $trigger = $(event.currentTarget);
  const $target = $($trigger.data('target'));
  const isExpanded = $trigger.attr(EXPANDED_ATTR) === 'true';
  const $eventTarget = $(event.target).closest(VALID_ELEMENTS_SELECTOR);

  if ($eventTarget.length && $eventTarget.get(0).hasAttribute(NO_EXPAND)) {
    return;
  }

  if (isExpanded) {
    $target.one('hidden.bs.collapse', () => {
      $trigger
        .removeClass('table-active')
        .attr(EXPANDED_ATTR, 'false');
    });
  } else {
    $target.one('show.bs.collapse', () => {
      $trigger
        .addClass('table-active')
        .attr(EXPANDED_ATTR, 'true');
    });
  }

  $target.collapse('toggle');
}
