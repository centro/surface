//= require hashgrid 
//= require jquery.placeholder

$(function() {

  $('html').removeClass('no-js');

  // Focus first form field with an error on it.

  $('.m-form__field--error, .m-form__infield--error').first().children('input').focus();

  // Fade out notice after 10 seconds.

  $('.m-notice--confirm, .m-notice--notice').delay(10000).fadeOut('slow');

  // Function calls.

  $('input, textarea').placeholder();

  // Remove yellow background Chrome adds to autofilled fields 
  // http://stackoverflow.com/questions/2920306/google-chrome-form-autofill-and-its-yellow-background

  if(navigator.userAgent.toLowerCase().indexOf("chrome") >= 0 || navigator.userAgent.toLowerCase().indexOf("safari") >= 0){
    window.setInterval(function(){
      $('input:-webkit-autofill').each(function(){
        var clone = $(this).clone(true, true);
        $(this).after(clone).remove();
      });
    }, 20);
  }

 });

// Toggle masked/unmasked password fields. 

var unmaskPassword = function () {

  var maskingToggle =  $('.js-masking-toggle');
  var maskingToggleErrorMsg = $('.js-masking-toggle--error-msg');

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
      input.prop('autocomplete', 'on');
    } else {
      input.prop('type', 'text');
      input.prop('autocomplete', 'off');
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

  var maskingToggle = $('.js-masking-toggle');
  var maskingToggleErrorMsg = $('.js-masking-toggle--error-msg');

  maskingToggle.hide();
  maskingToggleErrorMsg.hide();

}


