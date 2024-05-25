'use strict';

const body = document.querySelector('body');

// window.addEventListener("scroll", checkScrollPos, { passive: true });

// function checkScrollPos() {
//     if (window.scrollY > 0) {
//         document.querySelector('nav').classList.add('scroll-nav');
//     }
//     else {
//         document.querySelector('nav').classList.remove('scroll-nav');
//     }
// }

// checkScrollPos();


// document.querySelector('.menu-toggle').addEventListener('click', openMenu)
// document.querySelector('.close-btn').addEventListener('click', closeMenu)

// function openMenu() {
//     document.querySelector('.mobile-menu').style.display='block';
//     body.style.paddingRight = getScrollbarWidth() + 'px';
//     body.classList.add('modal-open');
//     setTimeout(function() {
//         document.querySelector('.mobile-menu').classList.add('active');
//     }, 5);
// }
// function closeMenu() {
//     document.querySelector('.mobile-menu').classList.remove('active');

//     setTimeout(function() {
//         body.classList.remove('modal-open');
//         body.style.paddingRight = '0';
//         document.querySelector('.mobile-menu').style.display='none';
//     }, 300);
// }

// function getScrollbarWidth() {
//     return window.innerWidth - document.documentElement.clientWidth;
// }


// document.addEventListener("keydown", (e) => {
//     if (body.classList.contains('modal-open')) {
//         if (e.key == 'Escape') {
//             closeMenu();
//         }
//     }
// });


let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showMainTitle()
        }
    });
};
  
  
let observer = new IntersectionObserver(callback, {
    rootMargin: "0px",
    threshold: 0.5,
});

let target = document.querySelector(".home-header");
observer.observe(target);


async function showMainTitle() {
    const allItems = document.querySelectorAll('.home-header h1 span, .home-header .content-content > *')
    console.log(allItems)

    for (let i=0; i<allItems.length; i++) {
        allItems[i].classList.remove('opacity-0')
        await new Promise(resolve => setTimeout(resolve, 125))
    }
}