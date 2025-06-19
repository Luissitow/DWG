document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".swiper-container");

  sliders.forEach((slider) => {
    const paginationEl = slider.querySelector(".swiper-pagination");

    if (paginationEl) {
      const observer = new MutationObserver(() => {
        const bullets = paginationEl.querySelectorAll(".swiper-pagination-bullet");
        bullets.forEach((bullet, index) => {
          bullet.textContent = index + 1;
        });
      });

      observer.observe(paginationEl, {
        childList: true,
        subtree: true,
      });
    }
  });
});
