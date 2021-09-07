'use strict';

(() => {
  // Писать код отсюда

  const lionsBuner = document.querySelector('.widget_lanc_memes_widget'),
    heroBlock = document.querySelector('.hero-post'),
    allPublications = document.querySelector('.all-post'),
    linkWidget = document.querySelector('.link-widget');

  if (window.innerWidth < 769) {
    heroBlock.append(lionsBuner);

    allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1]);
    allPublications.querySelector('.post-full').classList.add('post-row');
    allPublications.querySelector('.post-full').classList.remove('post-full');
  }

  // Писать код до сюда
})();