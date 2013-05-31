$(function() {

  // Automatically :focus the first field that has an error
  
  $('[class*="field--error"]').first().children('input').focus();

  // Only fade infield label opacity if the browser supports it
 
  if (!$.support.opacity) {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100, fadeOpacity: 1});
  } else {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100});
  }
 
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
