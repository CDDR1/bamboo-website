const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeNav = document.querySelector('.close-nav');

const toggleNav = () => {
    navLinks.classList.toggle('hidden');
    hamburgerMenu.classList.toggle('hidden');
    closeNav.classList.toggle('hidden');
};

hamburgerMenu.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);