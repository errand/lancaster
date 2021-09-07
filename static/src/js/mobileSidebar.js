'use strict';

(() => {
  // Писать код отсюда

  const lionsBuner = document.querySelector('.widget_lanc_memes_widget'),
    heroBlock = document.querySelector('.hero-post'),
    allPublications = document.querySelector('.all-post'),
    linkWidget = document.querySelector('.link-widget');

  if (window.innerWidth < 769) {
    heroBlock.append(lionsBuner);

    console.log(heroBlock.querySelectorAll('.post-full')[1])
    allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1]);
    heroBlock.querySelectorAll('.post-full')[1].classList.remove('.post-full');
    heroBlock.querySelectorAll('.post-full')[1].classList.add('.post-row');
  }


  // Писать код до сюда
})();