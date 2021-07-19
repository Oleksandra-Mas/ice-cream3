import './sass/main.scss';
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink1 = document.querySelector('.js-close-menu-link-1');
  const closeMenuLink2 = document.querySelector('.js-close-menu-link-2');
  const closeMenuLink3 = document.querySelector('.js-close-menu-link-3');
  const closeMenuLink4 = document.querySelector('.js-close-menu-link-4');
  const closeMenuLink5 = document.querySelector('.js-close-menu-link-5');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLink1.addEventListener('click', toggleMenu);
  closeMenuLink2.addEventListener('click', toggleMenu);
  closeMenuLink3.addEventListener('click', toggleMenu);
  closeMenuLink4.addEventListener('click', toggleMenu);    
  closeMenuLink5.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();


