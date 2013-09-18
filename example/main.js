$(document).ready(function () {
  $('#remove').swipe('swipe', function () {
    //call this function upon completion of the gesture
    $('#remove').remove();
  }, function () {
    //call this function upon initiation of the gesture
  }, {
    //options
  });
});
