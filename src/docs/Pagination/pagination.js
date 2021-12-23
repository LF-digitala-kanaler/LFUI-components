const paginationExample = () => {
  $('.pagination a').not('.pagination-static a').click(function (event) {
    event.preventDefault()
    $('.pagination .page-item').not('.pagination-static .page-item').removeClass('active')
    $(this).parent().addClass('active')
  })
}

export { paginationExample }
