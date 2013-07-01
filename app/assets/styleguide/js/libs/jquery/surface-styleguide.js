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
  });

  $('[class*="m-form__dropdown"] li a').click(function() { 
    var optionText = $(this).text();
    var test = $(this);
    $(this).parents('[class*="m-form__dropdown"]').find('a').removeClass();
    $(this).addClass('s-is-active');
    setTimeout(function() { 
      test.parents('[class*="m-form__dropdown"]').blur(); 
      test.parents('[class*="m-form__dropdown"]').find('span').text(optionText);
    }, 150);
    return false;
  });

  // Toggle overlay visibility
  
  $('[class$="m-overlay"]').hide();

  showOverlay();
  hideOverlay();

  // Automatically position tooltip relative to its respective trigger.

  positionTooltip();

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

var showOverlay = function () {

  $('.m-overlay--trigger').click(function() {
    var whichOverlay = $(this).attr('data-overlay');
    console.log(whichOverlay);
    $('div' + whichOverlay + '').show();
    return false;
  });

}

var hideOverlay = function () {

  $('.m-overlay__close').click(function() {
    $('[class$="m-overlay"]').hide();
  });

  $(document).bind('keydown', function(e) {
    if (e.which == 27) {
      $('[class$="m-overlay"]').hide();
    }
  });

}

var positionTooltip = function () {

  $('[class$="m-tooltip"]').each(function(index) {

    var triggerWidth = $(this).siblings('.m-trigger__text').width();
    var tooltipWidth = $(this).outerWidth()
    var horizTooltipOffset = ((tooltipWidth - triggerWidth) / 2) * -1;

    $(this).css("left", horizTooltipOffset + "px")

  });

  $('[class*="m-tooltip"]').each(function(index) {

    var triggerHeight = $(this).siblings('.m-trigger__text').height();
    var vertTooltipOffset = triggerHeight + 12;

    $(this).css("top", vertTooltipOffset + "px")

  });

}

var blurDropdown = function () {
  setTimeout(function() { $('[class*="m-form__dropdown"]').blur(); }, 100);
}
