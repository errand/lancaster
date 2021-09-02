document.querySelector('.search-block .btn-search').addEventListener('click', function () {
  document.querySelector('.search-row').classList.toggle('open-search');
})

document.querySelector('.header .menu').addEventListener('click', function () {
  document.querySelector('.menu-bar').classList.toggle('open-menu-bar');
})

document.querySelector('.menu-bar .btn-close').addEventListener('click', function () {
  document.querySelector('.menu-bar').classList.remove('open-menu-bar');
})