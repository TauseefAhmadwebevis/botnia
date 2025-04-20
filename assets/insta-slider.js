document.addEventListener('DOMContentLoaded', function () {
  var instaSLider = document.querySelector('.instaSwiper');

  if (instaSLider) {
    const swiper = new Swiper(".instaSwiper", {
      slidesPerView: 6,
      spaceBetween: 2,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 6.4,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
        },
        767: {
          slidesPerView: 3,
          centeredSlides: false,
        },
        1: {
          slidesPerView: 2,
          centeredSlides: false,
        },
      },
    });
    instaSLider.addEventListener('mouseenter', function () {
      swiper.autoplay.stop();
    });
    instaSLider.addEventListener('mouseleave', function () {
      swiper.autoplay.start();
    });
  } else {
    console.log('Insta Slider Not Found');
  }
});
