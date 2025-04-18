document.addEventListener('DOMContentLoaded', function () {
  var sliderEl = document.querySelector('.announcement__slider');

  if (sliderEl) {
    var swiper = new Swiper('.announcement__slider', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.custom-swiper-next',
        prevEl: '.custom-swiper-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
    sliderEl.addEventListener('mouseenter', function () {
      swiper.autoplay.stop();
    });
    sliderEl.addEventListener('mouseleave', function () {
      swiper.autoplay.start();
    });
  } else {
    console.log('No Announcement Element');
  }
});

