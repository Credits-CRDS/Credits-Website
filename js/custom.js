/* ===================================================================
 * CRDS - Custom JS
 *
 * ------------------------------------------------------------------- */
$(function() {
  $('#choose-cpu').hide();
  $('#hideme').hide();
})
    function showTheTime() {
        var s = moment().tz("Atlantic/Azores").format();
        return s
    }
 window.setInterval(function(){
    var current = showTheTime();
    var expiry  = new Date("June 17, 2017 23:00:00").toISOString() // 10PM UTC
      if(current < expiry) {
        $('#choose-cpu').hide();
        $('#hideme').show();
        console.log('Curr: ' + current)
        console.log('Exp: ' + expiry)
      }
      else {
        $('#choose-cpu').show();
        $('#hideme').hide();
        console.log('Curr: ' + current)
        console.log('Exp: ' + expiry)
      }
   }, 3000);
