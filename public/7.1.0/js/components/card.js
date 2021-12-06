import 'bootstrap/js/src/collapse';

const LOADING_CLASS = 'loading';
const EXPANDED_ATTR = 'aria-expanded';

const done = [];

$(document).on('click', '[data-toggle="collapse:async"]', onClick);

function onClick(event) {
  const $trigger = $(event.currentTarget);
  const $target = $($trigger.data('target'));

  if (!$target.length) {
    return;
  }

  if (done.indexOf($trigger.get(0)) !== -1) {
    const isExpanded = $trigger.attr(EXPANDED_ATTR) === 'true';
    const eventName = isExpanded ? 'hide.bs.collapse' : 'show.bs.collapse';

    $target
      .one(eventName, () => $trigger.attr(
        EXPANDED_ATTR,
        isExpanded ? 'false' : 'true'
      ))
      .collapse('toggle');
  } else {
    $trigger
      .addClass(LOADING_CLASS).prop('disabled', true)
      .one('done', () => {
        done.push($trigger.get(0));

        $target
          .collapse('show')
          .one('shown.bs.collapse', () => {
            $trigger.removeClass(LOADING_CLASS).prop('disabled', false);
          });

        $trigger.attr(
          EXPANDED_ATTR,
          $trigger.attr(EXPANDED_ATTR) === 'false' ? 'true' : 'false'
        );
      })
      .on('fail', () => $trigger.removeClass(LOADING_CLASS));
  }
}
