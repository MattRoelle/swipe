/* 
 * jQuery plugin Swipe to delte
 * Matt Roelle
 * 2013
 */

(function ($, window, undefined) {

  $.fn.swipe = function (gesture, endCallback, beginCallback, o) {
    var defaults = {
      //default options
    };

    var wrapper = $(this)
      , options = $.extend(defaults, o || {});

    var listeningForMouse = false;
    
    var initSwipe = function () {
      //prepend the divs that will be used to capture swipe gesture
      wrapper.prepend('<div class="swipe-left"></div>');
      wrapper.prepend('<div class="swipe-right"></div>');
      
      $('.swipe-left, .swipe-right').css({
        height       : wrapper.height(),
        width        : (wrapper.width()*.1)+'px',
        position     : 'fixed',
        'margin-top' : 0
      })
      $('.swipe-left').css({'margin-left'   : '0px'});
      $('.swipe-right').css({'margin-left' : wrapper.width()*.90});
      

      //begin the gesture
      $('.swipe-right').hover(function () {
        listeningForMouse = true;
        if (beginCallback !== undefined) {
          //callback at the beginning of the gesture
          //(if it exists)
          beginCallback();
        }
      });
      
      //end the incomplete gesture if the mouse exits
      wrapper.mouseleave(function () {
        listeningForMouse = false;
      });

      //complete the gesture
      $('.swipe-left').hover(function () {
        if (listeningForMouse == true && endCallback !== undefined) {
          //callback on the end of the gesture
          endCallback();
        }
      });
    };

    var main = function () {
      // respond to the appropriate gesture
      switch (gesture) {
        case 'swipe':
          //swipe the mouse across the div
          initSwipe();
          break;
      }
    };

    main();

    return this; //maintain jQuery chainability
  };

} (jQuery, window));

