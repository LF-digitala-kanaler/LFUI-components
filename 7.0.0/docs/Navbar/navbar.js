const navbarExample = () => {
  $('.navbar-toggle').on('click', function(e) {
    $(this)
    .attr('aria-expanded', $(this).parent().hasClass('open') ? 'false' : 'true')
    .parent()
    .toggleClass('open');
  });

  $('.navbar .nav-link').on('click', function(e) {
    $(this).closest('.navbar').find('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
  });
}

export {navbarExample}