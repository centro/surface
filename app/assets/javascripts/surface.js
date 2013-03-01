//= require hashgrid 
//= require jquery.infieldlabel

$(function() {

  // Focus first form field with an error on it.
  $(".m-form__field--error").first().children("input").focus();

  // Fade out notice after 10 seconds.
  $(".m-notice--confirm, .m-notice--notice").delay(10000).fadeOut("slow");

  // Function calls.
  
  unmaskPassword();
  $("label").inFieldLabels({labelClass: "m-form__label--infield", fadeDuration: 100});

 });

// Toggle masked/unmasked password fields. 

var unmaskPassword = function () {

  var maskingToggle =  $('.js-masking-toggle');

  maskingToggle.prev('input').attr('type', 'text');
  maskingToggle.attr('tabindex','-1');

  maskingToggle.click(function() {

    var input = $(this).prev('input');
    var inputType = $(this).prev('input').attr('type');

    if (inputType === 'text') {
      input.attr('type', 'password');
    } else {
      input.attr('type', 'text');
    }

    // Change link text.

    var linkText = maskingToggle.text();

    if (linkText === 'Hide') {
      maskingToggle.text("Show");
    } else {
      maskingToggle.text("Hide");
    }

    return false;

  }); 

  var maskingToggleErrorMsg = $('.js-masking-toggle--error-msg');
  maskingToggleErrorMsg.parents(".m-form__input__error").prev('input').attr('type', 'password');
  
  maskingToggleErrorMsg.click(function() {

    var input = $(this).parents(".m-form__input__error").prev('input');
    var inputType = $(this).parents(".m-form__input__error").prev('input').attr('type');

    if (inputType === 'text') {
      input.attr('type', 'password');
    } else {
      input.attr('type', 'text');
    }

     // Change link text.

    var linkText = maskingToggleErrorMsg.text();

    if (linkText === 'Show characters?') {
      maskingToggleErrorMsg.text("Hide characters?");
    } else {
      maskingToggleErrorMsg.text("Show characters?");
    }

    return false;

  });
}

