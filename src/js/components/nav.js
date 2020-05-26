import 'bootstrap/js/src/tab';


$(document).on('click', '[data-tabs="overflow"] > .nav a', onClick);

function onClick(event) {
  var overflowContainer = $(event.currentTarget).closest('.nav-overflow');
  var bounding = event.currentTarget.getBoundingClientRect();
  var width = event.currentTarget.offsetWidth;

  if (bounding.right > ((overflowContainer.width()))) {
    overflowContainer.animate( { scrollLeft: '+='+width}, 300);
  }
  if (bounding.left < 0 ) {
    overflowContainer.animate( { scrollLeft: '-='+width}, 300);
  }
 
}