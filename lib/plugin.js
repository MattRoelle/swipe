/* 
 * jQuery plugin Swipe to delte
 * Matt Roelle
 * 2013
 */

(function ($, window, undefined) {
  

  $.fn.removeable = function (o) {
    var defaults = {
      //default options
    };


    var wrapper = $(this)
      , options = $.extend(defaults, o || {});
    
    var overlayCSS = {
      position        : 'fixed',
      width           : wrapper.width(),
      height          : wrapper.height(),
      opacity         : '0.6',
      backgroundColor : '#f00',
      color           : '#fff',
      display         : 'none',
      textAlign       : 'center'
    };

    var listeningForMouse = false;
    
    var main = function () {
      wrapper.prepend('<div class="removeable-left"></div>');
      wrapper.prepend('<div class="removeable-right"></div>');
      
      wrapper.prepend('<div class="removeable-overlay"></div>');
      $('.removeable-overlay').css(overlayCSS).html('<h3>swipe left to delete</h3>');

      $('.removeable-left, .removeable-right').css({
        height    : wrapper.height(),
        width     : (wrapper.width()*.1)+'px',
        position  : 'fixed',
        'margin-top' : 0
      });
      $('.removeable-left').css({'margin-left'   : '0px'});
      $('.removeable-right').css({'margin-left' : wrapper.width()*.90});
      
      $('.removeable-right').hover(function () {
        listeningForMouse = true;
        $('.removeable-overlay').show();
      });

      wrapper.mouseleave(function () {
        listeningForMouse = false;
        $('.removeable-overlay').hide();
      });

      $('.removeable-left').hover(function () {
        if (listeningForMouse == true) {
          wrapper.remove();
        }
      });
    };

    main();

    return this; //maintain jQuery chainability
  };

} (jQuery, window));
