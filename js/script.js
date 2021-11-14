// slider

new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    simulateTouch: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
}); 

// tabs

const tabsBtn = document.querySelectorAll(".best__tabs-btn");
const tabsItem = document.querySelectorAll(".best__tabs-item");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( !currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
            tabsItem.forEach(function(item) {
                item.classList.remove('active')
            });
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    })
});

const height = $('#header').height();
$(window).scroll(function () {
    if($(this).scrollTop() > height) {
        $('.wrap-navbar').addClass('fixed');
    }else{
        $('.wrap-navbar').removeClass('fixed');
    }
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let burger = menu.find('.burger-menu__nav');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    burger.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu__active');

        if(menu.hasClass('burger-menu__active')) {
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');