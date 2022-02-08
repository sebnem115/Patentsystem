
function image(imgs) {
  var expandImg = document.getElementById("myimage");
  expandImg.src = imgs.src;
}


$(document).ready(function() {

   $("body").on("click","#bookmark",function() {
      $("#bookmark").toggleClass("check");
   });

   $("body").on("click","#expander",function() {
      $(".expander_wrapper, .rotater, .content, .button").toggleClass("expand");
   });

   var paddT = $(".pwrapper .expander_wrapper .header .padder").css('padding-right')
   $(".pwrapper .expander_wrapper .header .padder, .pwrapper .expander_wrapper .header .padder .left").css({
      'column-gap': (paddT)
   });

   $(".dropdown-content, .login").css({
      'width': ($(".pwrapper .expander_wrapper .header .padder .right .dropdown .button").width()+'px')
   });

   $("body").on("click","#img",function() {
      $(".ghost_element, .modal").addClass("show");
   });

   $("body").on("click",".close",function() {
      $(".ghost_element, .modal").removeClass("show");
   });

});

