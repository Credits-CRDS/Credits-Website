/* ===================================================================
 * CRDS - Custom JS
 *
 * ------------------------------------------------------------------- */


$(function() {
  $('#choose-cpu').hide();
})
    function showTheTime() {
		//set current time according to UTC timezone
        var s = moment().tz("Atlantic/Azores").format();
        return s
    }
	
	function expiryTime() {
		//set expiry time according to UTC timezone.
		var e = moment("2017-06-17 23:00").tz("Atlantic/Azores").format()
		return e
	}
	
 window.setInterval(function(){
    var current = showTheTime();
    var expiry  = expiryTime()
      if(current < expiry) {
        $('#choose-cpu').hide();
        $('#hideme').show();
      }
      else {
        $('#choose-cpu').show();
        $('#hideme').hide();
      }
   }, 3000);
