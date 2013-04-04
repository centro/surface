//= require hashgrid 
//= require jquery.infieldlabel

$(function() {

  $('html').removeClass('no-js');

  // Focus first form field with an error on it.

  $('.m-form__field--error, .m-form__infield--error').first().children('input').focus();

  // Fade out notice after 10 seconds.

  $('.m-notice--confirm, .m-notice--notice').delay(10000).fadeOut('slow');

  // Function calls.

  if (!$.support.opacity) {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100, fadeOpacity: 1});
    hideMaskingToggles();
  } else {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100});
    unmaskPassword();
  }

 });

// Toggle masked/unmasked password fields. 

var unmaskPassword = function () {

  var maskingToggle =  $('.js-masking-toggle');
  var maskingToggleErrorMsg = $('.js-masking-toggle--error-msg');

  maskingToggle.siblings('.m-form__input--password').prop('type', 'text');
  maskingToggle.prop('tabindex','-1');

  maskingToggle.click(function() {

    var input = $(this).siblings('.m-form__input--password');
    var inputType = $(this).siblings('.m-form__input--password').prop('type');

    if (inputType === 'text') {
      input.prop('type', 'password');
    } else {
      input.prop('type', 'text');
    }

    // Change link text.

    var linkText = maskingToggle.text();

    if (linkText === 'Hide') {
      maskingToggle.text('Show');
    } else {
      maskingToggle.text('Hide');
    }

    return false;

  }); 

  maskingToggleErrorMsg.parents('.m-form__input__error').siblings('input').prop('type', 'password');
  
  maskingToggleErrorMsg.click(function() {

    var input = $(this).parents('.m-form__input__error').siblings('input');
    var inputType = $(this).parents('.m-form__input__error').siblings('input').prop('type');

    if (inputType === 'text') {
      input.prop('type', 'password');
    } else {
      input.prop('type', 'text');
    }

     // Change link text.

    var linkText = maskingToggleErrorMsg.text();

    if (linkText === 'Show characters?') {
      maskingToggleErrorMsg.text('Hide characters?');
    } else {
      maskingToggleErrorMsg.text('Show characters?');
    }

    return false;

  });
}

// IE8 prevents us from changing input types, so we hide
// the links that trigger the mask/unmask password functionality.

var hideMaskingToggles = function () {

  var maskingToggle =  $('.js-masking-toggle');
  var maskingToggleErrorMsg = $('.js-masking-toggle--error-msg');

  maskingToggle.hide();
  maskingToggleErrorMsg.hide();

}
