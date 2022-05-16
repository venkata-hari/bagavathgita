var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween:2,
  slidesPerView:8,
  freeMode: true,
  hashNavigation: {
    watchState: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween:4,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
     el: ".swiper-pagination",
     type: "fraction",
   },
   navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   thumbs: {
    swiper: swiper,
  },
})
