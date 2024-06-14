/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const swiper = new Swiper('.swiper.productions', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // spaceBetween: 35,
  speed: 1000,
  allowTouchMove: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev'
  },
  on: {
    init: function () {
      this.slides.forEach(slide => {
        const slideImgSrc = slide.querySelector('img').src;
        const imgEl = document.createElement('img');
        imgEl.src = slideImgSrc;
        imgEl.alt = '';
        document.querySelector('.productions-slider-wrap .slide-walls').append(imgEl);
        const contentData = slide.querySelector('.content-data').innerHTML;
        const contentEl = document.createElement('div');
        contentEl.className = 'content-data';
        contentEl.innerHTML = contentData;
        document.querySelector('.slide-items-content').append(contentEl);
        const year = slide.querySelector('.year').innerHTML;
        const yearEl = document.createElement('span');
        yearEl.className = 'year';
        yearEl.innerHTML = year;
        document.querySelector('.active-slide-width-item .years').append(yearEl);
      });
      document.querySelectorAll('.productions-slider-wrap .slide-walls img')[0].classList.add('active');
    },
    slideChange: async function () {
      const activeSlideIndex = this.activeIndex;
      const activeSlideEl = this.slides[activeSlideIndex];
      const activeSlideImage = activeSlideEl.querySelector('img').src;
      changeToActive(activeSlideImage, this.realIndex);
    }
  }
});
async function changeToActive(imageSRC, slideIndex) {
  const allImages = document.querySelectorAll('.productions-slider-wrap .slide-walls img');
  const allSlideContents = document.querySelectorAll('.slide-items-content .content-data');
  const allYears = document.querySelectorAll('.active-slide-width-item .years .year');
  if (allSlideContents[slideIndex]) {
    allSlideContents.forEach((slideContent, index) => {
      if (index !== slideIndex) {
        slideContent.classList.remove('active');
      } else {
        slideContent.classList.add('active');
      }
    });
  }
  if (allYears[slideIndex]) {
    allYears.forEach((year, index) => {
      if (index !== slideIndex) {
        year.classList.remove('active');
      } else {
        year.classList.add('active');
      }
    });
  }
  await new Promise(resolve => setTimeout(resolve, 150));
  allImages.forEach(img => {
    if (img.src !== imageSRC) {
      img.classList.remove('active');
    } else {
      img.classList.add('active');
    }
  });
}
/******/ })()
;
//# sourceMappingURL=view.js.map