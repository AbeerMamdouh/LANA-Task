$(function(){
  'use strict';
var winH =$(window).height(),
    navH =$('.navbar').innerHeight();
$('.slider , .carousel-item').height(winH - navH);

});

/*navbar*/
$(".input").focus(function() {
  $("#search").addClass("move");
});
$(".input").focusout(function() {
  $("#search").removeClass("move");
  $(".input").val("");
});

$(".fa-search").click(function() {  
  $(".input").toggleClass("active");
  $("#search").toggleClass("active");
});

/*shuffle products*/
$('.products ul li').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active')
});














