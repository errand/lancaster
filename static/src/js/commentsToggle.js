'use strict';

(() => {
  const cardFooter = document.querySelectorAll('.comment .card-footer');

  for(let card of cardFooter){
      card.querySelector('.reply').addEventListener('click', function (e) {
        this.closest('.card-footer').querySelector('.comment-form').classList.toggle('visible')
      });
  }
})();