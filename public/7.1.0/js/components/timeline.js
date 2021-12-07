import 'bootstrap/js/src/util';
import 'bootstrap/js/src/collapse';

const EXPANDED_ATTR = 'aria-expanded';

$(document).on('click', '[data-toggle="collapse:timeline"]', onClick);

function onClick(event) {
  const $trigger = $(event.currentTarget);
  const $target = $($trigger.data('target'));
  const isExpanded = $trigger.attr(EXPANDED_ATTR) === 'true';
  
  
  if (isExpanded) {
    $target.one('hidden.bs.collapse', () => {
      $trigger.parent().removeClass('is-open');
      $trigger.attr(EXPANDED_ATTR, 'false');
    });
  } else {
    $target.one('show.bs.collapse', () => {
      $trigger.parent().addClass('is-open');
      $trigger.attr(EXPANDED_ATTR, 'true');
        
    });
  }

  $target.collapse('toggle');
}