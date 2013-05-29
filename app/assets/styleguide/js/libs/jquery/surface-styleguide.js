$(function() {

  $('.m-form__field--error, .m-form__infield--error').first().children('input').focus();

  if (!$.support.opacity) {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100, fadeOpacity: 1});
  } else {
    $('.m-form__label--infield').inFieldLabels({labelClass: '', fadeDuration: 100});
  }

 });
