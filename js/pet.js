//slider area
$(function(){
  var  windowH = $(window).height(),
       headerH = $('.header').innerHeight(),
       navH    = $('.navbar').innerHeight();
 // $('.slider').height(windowH);
});
/*start owl carousel */
$('.owl-carousel').owlCarousel({
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
/*end owl carousel */
