const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation')

    burger.addEventListener('click', () => {
        nav.classList.toggle('navigation-active');
    });
    navLinks.forEach((link, index) => {
        link.style.animation = 'navigationLinkFade 1s ease forwards ${index / 7 }s'
    });
}

navSlide();