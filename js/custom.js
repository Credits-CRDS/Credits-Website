/* ===================================================================
 * CRDS - Custom JS
 *
 * ------------------------------------------------------------------- */


$(function() {
  $('#choose-cpu').hide();
})

 getcurrenttime = function() {
   var local, utc, show, timezone

   local = new Date();
   timezone = 0
   // get the current time in the show's timezone
   utc = local.getTime() + (local.getTimezoneOffset() * 60000);
   current = new Date(utc + (3600000*timezone));
 return current
}

getexpirytime = function() {
  var local, utc, show, timezone

  local = new Date();
  timezone = 0
  // get the current time in the show's timezone
  utc = local.getTime() + (local.getTimezoneOffset() * 60000);
  expiry = new Date(utc + (3600000*timezone));
  expiry.setUTCDate(17)
  expiry.setHours(22,00,00,00)
return expiry

}


 window.setInterval(function(){
    var current = getcurrenttime();
    var expiry  = getexpirytime()
      if(current < expiry) {
        $('#choose-cpu').hide();
        $('#hideme').show();

      }
      else {
        $('#choose-cpu').show();
        $('#hideme').hide();
      }
   }, 5000);
