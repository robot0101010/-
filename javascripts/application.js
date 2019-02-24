var $homeSlider = $(".home-slider");

$(window).resize(function() {
  showHomeSlider();
});

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.innerWidth <= 600) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();

function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000
  });
}

function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}
