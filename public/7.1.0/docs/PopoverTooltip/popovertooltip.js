
const popoverTooltipExample = () => {
  $('.popover-tooltip-trigger').on('focus blur', function() {
      $('#' + $(this).attr('aria-controls')).parent().toggleClass('open');
    });

    $('label.popover-tooltip-trigger').on('click touch', function(e){
      e.preventDefault();
    });
}

export {popoverTooltipExample};