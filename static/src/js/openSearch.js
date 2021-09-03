'use strict';

window.onload = () => {
// Писать код отсюда

  const buttonOpen = document.querySelector('.search-block .icon-search'),
        searchRow = document.querySelector('.search-row');

  window.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target ===  buttonOpen) {
      searchRow.classList.add('open-search');
      //TODO Add focus
    } else if(!e.target.closest('.search-row')) {
      searchRow.classList.remove('open-search');
    }

  });





  document.querySelector('.header .menu').addEventListener('click', function () {
    document.querySelector('.menu-bar').classList.toggle('open-menu-bar');
  })

  document.querySelector('.menu-bar .btn-close').addEventListener('click', function () {
    document.querySelector('.menu-bar').classList.remove('open-menu-bar');
  })

// Писать код до сюда
}
