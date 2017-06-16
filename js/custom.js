/* ===================================================================
 * CRDS - Custom JS
 *
 * ------------------------------------------------------------------- */

$(function() {

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

  showHideTime = function() {
      var x = document.getElementById('timezone');
      if (x.style.display === 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }

$(window).resize(function() {
  if($(window).width() >=1024) {
    $('#header-nav-wrap').css('display', 'block');
  } else {
    $('#header-nav-wrap').css('display', '');
  }
});


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

})
