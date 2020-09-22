document.addEventListener("DOMContentLoaded", function () {
  const card = new CardSlider();
});

class CardSlider {
  constructor() {
    this.swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      // Optional parameters
      loop: true,
      spaceBetween: 60,
      centeredSlides: true,
      // slidesPerView: 1,
      slidesPerView: 1,
      speed: 800,
      // grabCursor: true,
      // breakpoints: {
      //   600: {
      //     // slidesPerView: 1.5,
      //     spaceBetween: 100,
      //   },
      //   960: {
      //     // slidesPerView: 1,
      //     spaceBetween: 100,
      //   },
      // },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
    });
  }
}
