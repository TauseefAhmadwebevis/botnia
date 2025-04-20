document.addEventListener('DOMContentLoaded', function () {
  var marquee = document.querySelector('.iconsSwiper');

  if (marquee) {
    var iconSwiper = new Swiper('.iconsSwiper', {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 0,
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      freeMode: true,
      freeModeMomentum: false,
      allowTouchMove: false,
      loop: true
    });
  } else {
    console.log('Icons Slider Not Found');
  }
});
