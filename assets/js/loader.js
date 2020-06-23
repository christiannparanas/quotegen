$(window).on("load", function() {
   $(".loader").fadeOut(3000);

   $("main").show();
})


// disable text selection
function disableselect(e) {
   return false
 }
 
 function reEnable() {
   return true
 }
 
 document.onselectstart = new Function ("return false")
 
 if (window.sidebar) {
   document.onmousedown = disableselect
   document.onclick = reEnable
 }