var swiper = new Swiper(".marcasSwiper", {
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  centeredSlides: false,
  speed: 5000, // velocidad más lenta para desplazamiento continuo
  autoplay: {
    delay: 1, // casi inmediato
    disableOnInteraction: false,
  },
});
