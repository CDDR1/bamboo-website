const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeNav = document.querySelector('.close-nav');
const navMobile = document.querySelector('.nav-mobile');
let navIsActive = false;

const toggleNav = () => {

    if (navIsActive) {
        navMobile.classList.add('nav-mobile-transition');
        navIsActive = false;
    }
    else {
        navMobile.classList.remove('nav-mobile-transition');
        navIsActive = true;
    }

    navMobile.classList.toggle('add-bg-color');
    navLinks.classList.toggle('show-nav-links');
    hamburgerMenu.classList.toggle('hidden');
    closeNav.classList.toggle('hidden');
};

hamburgerMenu.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);