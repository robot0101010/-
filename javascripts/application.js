$(document).ready(function(){

var $homeSlider = $(".home-slider");

$homeSlider.addClass("owl-carousel").owlCarousel({
items: 5,
loop: true,
autoplay: true,
autoplayTimeout: 2000,
smartSpeed: 1000
});

})