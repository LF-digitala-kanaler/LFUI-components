import 'bootstrap5/js/src/tab'
import $ from 'jquery'

$(document).on('click', '[data-tabs="overflow"] > .nav a', onClick)

function onClick(event) {
  const overflowContainer = $(event.currentTarget).closest('.nav-overflow')
  const bounding = event.currentTarget.getBoundingClientRect()
  const width = event.currentTarget.offsetWidth

  if (bounding.right > overflowContainer.width()) {
    overflowContainer.animate({ scrollLeft: '+=' + width }, 300)
  }
  if (bounding.left < 0) {
    overflowContainer.animate({ scrollLeft: '-=' + width }, 300)
  }
}
