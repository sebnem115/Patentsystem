$(document).ready(function() {
 $(".content").scroll(function() {
      var scrolltop = $(".content").first().scrollTop();
      if(scrolltop < 100) $(".header_wrapper").removeClass("show");
      else{
      $(".header_wrapper ").addClass("show");
      $(".content ").addClass("show");
   }

   });
});

function toggleBookmark() {
   var element = document.getElementById("bookmark");
   element.classList.toggle("check");
}

