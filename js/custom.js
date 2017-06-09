/* ===================================================================
 * CRDS - Custom JS
 *
 * ------------------------------------------------------------------- */


$(function() {
  $('#choose-cpu').hide();
  $('#hideme').hide();
})
    function showTheTime() {
		//set current time according to UTC timezone
        var s = moment().tz("Atlantic/Azores").format();
        return s
    }
	
	function expiryTime() {
		//set expiry time according to UTC timezone.
		var e = moment("2017-06-07 14:50").tz("Atlantic/Azores").format()
		return e
	}
	
 window.setInterval(function(){
    var current = showTheTime();
    var expiry  = expiryTime()
      if(current < expiry) {
        $('#choose-cpu').hide();
        $('#hideme').show();
		console.log(current)
		console.log(expiry)
      }
      else {
        $('#choose-cpu').show();
        $('#hideme').hide();
		console.log(current)
		console.log(expiry)
      }
   }, 3000);
