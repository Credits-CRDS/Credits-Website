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
  local.setUTCDate(17);
  local.setHours(23,00,00,00)
  timezone = 0
  // get the current time in the show's timezone
  utc = local.getTime() + (local.getTimezoneOffset() * 60000);
  expiry = new Date(utc + (3600000*timezone));
return expiry

}


 window.setInterval(function(){
    var current = getcurrenttime();
    var expiry  = getexpirytime()
      if(current < expiry) {
        $('#choose-cpu').hide();
        $('#hideme').show();
        console.log(current)
        console.log(expiry)

      }
      else {
        $('#choose-cpu').show();
        $('#hideme').hide();
      }
   }, 3000);
