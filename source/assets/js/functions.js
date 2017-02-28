$( document ).ready(function() {

  // hide these elements on page load
  $('#main-menu, .menu-close, .masthead').hide();


  // open menu on menu open click
  $('.menu-open').on('click', function(e) {
    e.preventDefault();
    $('#main-menu').show();
    $('.menu-open').hide();
    $('.menu-close').show();
  });


  // close menu on menu close or link click
  $('.menu-close').on('click', function(e) {
    e.preventDefault();
    $('#main-menu').hide();
    $('.menu-open').show();
    $('.menu-close').hide();
  });

  // close menu on menu close or link click
  $('#main-menu a').on('click', function() {
    $('#main-menu').hide();
    $('main, #main-menu').removeClass('menu-reveal');
    $('.menu-open').show();
    $('.menu-close').hide();
  });

  // toggle table of contents open on screens 900px and up
  $('#toc-toggle .menu-open').on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    $('#toc-toggle .menu-close').show();
    $('main, #main-menu').addClass('menu-reveal');
  });

  // toggle table of contents closed on screens 900px and up
  $('#toc-toggle .menu-close').on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    $('#toc-toggle .menu-open').show();
    $('main, #main-menu').removeClass('menu-reveal');
  });

  // show masthead on window scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.title').fadeOut();
      $('.masthead').fadeIn().css({
        'display' : 'flex'
      });
    } else {
      $('.title').fadeIn();
      $('.masthead').fadeOut();
    }
  });

});
