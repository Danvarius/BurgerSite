$(document).ready(function(){
   $('.customer__box').slick({
      dots: false,
      arrows: true,
      prevArrow: "<img src='../../img/left-arrow.svg' width='20' height='20' class='prev' alt='1'>",
      nextArrow: "<img src='../../img/right-arrow.svg' width='20' height='20' class='next' alt='2'>",
      autoplay: true,
      autoplaySpeed: 4000,
      adaptiveHeight: true,
      swipeToSlide: true,
   });
});