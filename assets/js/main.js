'use strict';

const body = document.querySelector('body');

window.addEventListener("scroll", checkScrollPos, { passive: true });

function checkScrollPos() {
    if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('scroll-nav');
    }
    else {
        document.querySelector('nav').classList.remove('scroll-nav');
    }
}

checkScrollPos();


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
    toMainMenu(false)
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
        toMainMenu(true)
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

// Submenu handling
const allItemsWithSubmenu = document.querySelectorAll('.full-menu .menu-item-has-children')

allItemsWithSubmenu.forEach(menuItem => {
    const link = menuItem.querySelector('a')
    const submenu = menuItem.querySelector('.sub-menu')

    link.addEventListener('click', async (e) => {
        e.preventDefault()
        const backBtnHTML = '<li><button onClick="toMainMenu(true)" class="btn btn-back"><i class="ph ph-arrow-left"></i>Terug naar hoofdmenu</button></li>'
        const submenuItemTitle = link.innerHTML
        const submenuItemTitleHTML = `<li><h2>${submenuItemTitle}</h2></li>`

        document.querySelector('.sub-menu-items').innerHTML = backBtnHTML + submenuItemTitleHTML + submenu.innerHTML
        document.querySelector('.sub-menu-items').classList.add('sub-menu-open')
        document.querySelector('.nav-items').classList.add('sub-menu-open')

        await new Promise(resolve => setTimeout(resolve, 50))
        document.querySelector('.full-menu .btn-back').focus()
    })
})

async function toMainMenu(waitForAnimation) {
    document.querySelector('.full-menu .sub-menu-items').classList.remove('sub-menu-open')
    document.querySelector('.full-menu .nav-items').classList.remove('sub-menu-open')

    if (waitForAnimation) {
        await new Promise(resolve => setTimeout(resolve, 300))
    }
    document.querySelector('.full-menu .sub-menu-items').innerHTML = ''
}


let mainTitleCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showMainTitle()
        }
    });
};
  
  
let observer = new IntersectionObserver(mainTitleCallback, {
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