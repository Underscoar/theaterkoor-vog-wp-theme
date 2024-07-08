/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const swiper = new Swiper('.swiper.management', {
  // Optional parameters
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.btn-management-slider.btn-next',
    prevEl: '.btn-management-slider.btn-prev'
  },
  on: {
    init: function () {
      const listWrap = document.querySelector('.management-list-wrap');
      const ulEl = document.createElement('ul');
      console.log(this.slides);
      this.slides.forEach((slide, slideIndex) => {
        slide.dataset.slideId = slideIndex;
        const contentData = slide.querySelector('.content-data').innerHTML;
        const contentEl = document.createElement('li');
        contentEl.innerHTML = contentData;
        ulEl.append(contentEl);
      });
      listWrap.append(ulEl);
    }
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map