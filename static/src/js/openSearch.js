'use strict';
(() => {
// Писать код отсюда
  const openSearch = document.querySelector('.search-block .icon-search'),
        searchRow = document.querySelector('.search-row'),
        openMenu = document.querySelector('.header .menu'),
        menuBar = document.querySelector('.menu-bar'),
        menuClose = document.querySelector('.menu-bar .btn-close'),
        openNav = document.querySelector('.header .menu_m'),
        activeNav = document.querySelector('html');

  window.addEventListener('click', (e) => {

    if (e.target ===  openSearch) {
      searchRow.classList.add('open-search');
      //TODO Add focus
    } else if(!e.target.closest('.search-row')) {
      searchRow.classList.remove('open-search');
    }

    if(e.target ===  openMenu || e.target.closest('.header .menu') === openMenu) {
      menuBar.classList.add('open-menu-bar');
    } else if(!e.target.closest('.menu-bar')) {
      menuBar.classList.remove('open-menu-bar');
    }

    if(e.target ===  openNav || e.target.closest('.header .menu_m') === openNav) {
      activeNav.classList.toggle('open-nav');
    } else if(!e.target.closest('.header_nav')) {
      activeNav.classList.remove('open-nav');
    }

  });

  if(menuClose !== null) {
    menuClose.addEventListener('click', function () {
      menuBar.classList.remove('open-menu-bar');
      activeNav.classList.remove('open-nav');
    })
  }

// Писать код до сюда
})();
