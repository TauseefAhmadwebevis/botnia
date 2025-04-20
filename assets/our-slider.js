document.addEventListener('DOMContentLoaded', function () {
  var ourSlider = document.querySelector('.OurSlider');

  if (ourSlider) {
    const ourSwiper = new Swiper(".OurSlider", {
      slidesPerView: 1,
      autoplay: false,
      spaceBetween: 16,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          const fill = document.querySelector(".OurSlider .progress-fill");
          fill.style.width = `${progress * 100}%`;
        }
      }
    });
  } else {
    console.log('Our Slider Not Found');
  }
});