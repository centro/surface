$(function() {

  // Automatically :focus the first field that has an error
  
  $('[class*="field--error"]').first().children('input').focus();

  // Only fade infield label opacity if the browser supports it
 
  $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100});

  // Call toggle masked/unmasked password fields function. 

  unmaskPassword();
 
  // Hacked together JS for custom CSS dropdowns

  $('[class*="m-form__dropdown"]').each( function () {
    $(this).find('li:first a').addClass('s-is-active');
    $(this).find('span').text($(this).find('li:first a').text());
  })

  $('[class*="m-form__dropdown"] li a').click(function() { 
    var optionText = $(this).text();
    $(this).parents('[class*="m-form__dropdown"]').find('a').removeClass();
    $(this).addClass('s-is-active');
    $(this).parents('[class*="m-form__dropdown"]').find('span').text(optionText);
    return false;
  })

 });

// Toggle masked/unmasked password fields. 

var unmaskPassword = function () {

  var maskingToggle =  $('.js-masking-toggle');

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

}
