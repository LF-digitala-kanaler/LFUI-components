import 'bootstrap/js/src/util';
import 'bootstrap/js/src/collapse';



const timelineExample = () => {
  const EXPANDED_ATTR = 'aria-expanded';
  $(document).on('click', '[data-toggle="collapse:timeline"]', onClick);

  function onClick(event) {
    const $trigger = $(event.currentTarget);
    const $target = $($trigger.data('target'));
    const $container = $trigger.closest('.timeline-container');
    
    $target.on('hide.bs.collapse', () => {
      $container.removeClass('is-open');
      $trigger.attr(EXPANDED_ATTR, 'false');
    });
    
    $target.on('show.bs.collapse', () => {
      $container.addClass('is-open');
      $trigger.attr(EXPANDED_ATTR, 'true');
    });
    
    $target.collapse('toggle');

  }
}

export {timelineExample}