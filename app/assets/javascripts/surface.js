//= require hashgrid 

$(function() {

  // Focus first form field with an error on it.
  $(".m-form__field--error").first().children(".m-form__input").focus();

  // Fade out notice after 10 seconds.
  $(".m-notice--confirm, .m-notice--notice").delay(10000).fadeOut("slow");

  // Function calls.
  
  unmaskPassword();

 });

// Toggle masked/unmasked password fields. 

var unmaskPassword = function () {

  $('.m-form__input--password').attr('type', 'text');
  $('.js-masking-toggle').text("Hide")

  $('.js-masking-toggle').click(function() {

    var input = $(this).prev('input');
    var inputType = $(this).prev('input').attr('type');

    if (inputType === 'text') {
      input.attr('type', 'password');
    } else {
      input.attr('type', 'text');
    }

    // Change link text.

    var linkText = $('.js-masking-toggle').text();

    if (linkText === 'Hide') {
      $('.js-masking-toggle').text("Show");
    } else {
      $('.js-masking-toggle').text("Hide");
    }

  }); 
}

