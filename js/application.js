
$(document).ready(function(){

    var $homeSlider = $(".home-slider");

    $homeSlider.addClass(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 5,
        stagePadding: 50,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000
    });
    
});