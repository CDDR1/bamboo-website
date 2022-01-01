const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeNav = document.querySelector('.close-nav');
const mainNav = document.querySelector('.main-nav');
let navIsActive = false;

const toggleNav = () => {

    if (navIsActive) {
        mainNav.classList.add('nav-mobile-transition');
        navIsActive = false;
    }
    else {
        mainNav.classList.remove('nav-mobile-transition');
        navIsActive = true;
    }

    mainNav.classList.toggle('add-bg-color');
    navLinks.classList.toggle('show-nav-links');
    hamburgerMenu.classList.toggle('hidden');
    closeNav.classList.toggle('hidden');
};

hamburgerMenu.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);