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
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    on: {
        init: function() {
            this.slides.forEach((slide, slideIndex) => {
                slide.dataset.slideId = slideIndex

                const slideImgSrc = slide.querySelector('img').src
                const imgEl = document.createElement('img')
                imgEl.src = slideImgSrc
                imgEl.dataset.slideId = slideIndex
                imgEl.alt = ''
                document.querySelector('.productions-slider-wrap .slide-walls').append(imgEl)

                const contentData = slide.querySelector('.content-data').innerHTML
                const contentEl = document.createElement('div')
                contentEl.className = 'content-data'
                contentEl.innerHTML = contentData
                contentEl.dataset.slideId = slideIndex
                document.querySelector('.slide-items-content').append(contentEl)

                const year = slide.querySelector('.year').innerHTML
                const yearEl = document.createElement('span')
                yearEl.className = 'year'
                yearEl.innerHTML = year
                yearEl.dataset.slideId = slideIndex
                document.querySelector('.active-slide-width-item .years').append(yearEl)
            })

            document.querySelectorAll('.productions-slider-wrap .slide-walls img')[0].classList.add('active')
        },
        slideChange: async function() {
            const activeSlideIndex = this.activeIndex
            const activeSlideEl = this.slides[activeSlideIndex]
            const activeSlideImage = activeSlideEl.querySelector('img').src
            const activeSlideId = activeSlideEl.dataset.slideId

            changeToActive(activeSlideImage, this.realIndex, activeSlideId)
        }
    }

});

async function changeToActive(imageSRC, slideIndex, slideId) {
    const allImages = document.querySelectorAll('.productions-slider-wrap .slide-walls img')
    const allSlideContents = document.querySelectorAll('.slide-items-content .content-data')
    const allYears = document.querySelectorAll('.active-slide-width-item .years .year')

    if (allSlideContents[slideIndex]) {
        allSlideContents.forEach((slideContent, index) => {
            if (slideContent.dataset.slideId !== slideId) {
                slideContent.classList.remove('active')
            } else {
                slideContent.classList.add('active')
            }
        })
    }

    if (allYears[slideIndex]) {
        allYears.forEach((year, index) => {
            if (year.dataset.slideId !== slideId) {
                year.classList.remove('active')
            } else {
                year.classList.add('active')
            }
        })
    }

    await new Promise(resolve => setTimeout(resolve,150))
    allImages.forEach(img => {
        if (img.src !== imageSRC) {
            img.classList.remove('active')
        }
        else {
            img.classList.add('active')
        }
    })
}