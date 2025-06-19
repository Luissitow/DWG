var swiper = new Swiper(".marcasSwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false,
  },
});
