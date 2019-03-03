
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
$(document).ready(function(){
	$("#pull").click(function(){
    $(".ul_element").slideToggle(300)
    $(".ssssss").css("font-size","0.7em");
	});

	
     
});
