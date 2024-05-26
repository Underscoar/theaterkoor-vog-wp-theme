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


document.querySelector('.menu-toggle').addEventListener('click', toggleMenu)
document.querySelector('.overlay-wall').addEventListener('click', closeMenu)

function toggleMenu() {
    if (!body.classList.contains('modal-open')) {
        openMenu()
    }
    else {
        closeMenu()
    }
}

function openMenu() {
    document.querySelector('.full-menu').style.display='block'
    document.querySelector('.menu-toggle').classList.add('toggled')
    body.style.paddingRight = getScrollbarWidth() + 'px'
    body.classList.add('modal-open');
    setTimeout(function() {
        document.querySelector('.full-menu').classList.add('active')
    }, 5);
}
function closeMenu() {
    document.querySelector('.full-menu').classList.remove('active')
    document.querySelector('.menu-toggle').classList.remove('toggled')

    setTimeout(function() {
        body.classList.remove('modal-open')
        body.style.paddingRight = '0'
        document.querySelector('.full-menu').style.display='none'
    }, 600);
}

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth
}


document.addEventListener("keydown", (e) => {
    if (body.classList.contains('modal-open')) {
        if (e.key == 'Escape') {
            closeMenu()
        }
    }
});


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

    for (let i=0; i<allItems.length; i++) {
        allItems[i].classList.remove('opacity-0')
        await new Promise(resolve => setTimeout(resolve, 125))
    }
}

const headerImg = document.querySelectorAll('.header-right img');
new simpleParallax(headerImg, {
	orientation: 'left',
    delay: 1,
});