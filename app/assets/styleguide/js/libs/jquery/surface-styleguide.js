$(function() {

  $('.m-form__field--error, .m-form__infield--error').first().children('input').focus();

  if (!$.support.opacity) {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100, fadeOpacity: 1});
  } else {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100});
  }
  
  var defaultText = $('.m-form__dropdown li:first a').text(); 

  $('.m-form__dropdown__selected').text(defaultText);
  $('.m-form__dropdown li:first a').addClass('s-is-active');

  $('.m-form__dropdown li a').click(function() { 
    var optionText = $(this).text();
    $('.m-form__dropdown li a').removeClass();
    $(this).addClass('s-is-active');
    $('.m-form__dropdown__selected').text(optionText);
    return false;
  })

 });
