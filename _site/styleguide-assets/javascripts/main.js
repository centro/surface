$(function() {

  // adds styleguide to the pages
  $('#tdcss').tdcss();

  // adding removing is-active to navigation links
  $('.header > a').click(function() {
    $('.nav a').removeClass('is-active');
    $(this).addClass('is-active');
  });

  $('.nav a').click(function() {
    $('.nav').removeClass('is-active');
    $('.header > a').removeClass('is-active');
    $(this).addClass('is-active');
  });

});
