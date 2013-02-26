//= require hashgrid 

$(function() {

  // Focus first form field with an error on it.
  $(".m-form__field--error").first().children(".m-form__input").focus();

  // Fade out notice after 10 seconds.
  $(".m-notice--confirm, .m-notice--notice").delay(10000).fadeOut("slow");
 });

