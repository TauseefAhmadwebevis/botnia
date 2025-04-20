document.addEventListener('DOMContentLoaded', function () {
  var marquee = document.querySelector('.logosMarquee');

  if (marquee) {
    var marqueeSwiper = new Swiper('.logosMarquee', {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
      speed: 600,
      grabCursor: true,
      allowTouchMove: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        990: {
          slidesPerView: 5
        }
      }
    });
  } else {
    console.log('Marquee Element Not Found');
  }
});
