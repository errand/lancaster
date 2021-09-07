'use strict';

(() => {
// Писать код отсюда

const lionsBuner = document.querySelector('.widget_lanc_memes_widget'),
      heroBlock = document.querySelector('.hero-post'),
      allPublications = document.querySelector('.all-post'),
      linkWidget = document.querySelector('.link-widget').closest('.widget');

if(window.innerWidth < 760) {
  heroBlock.append(lionsBuner);

  console.log(heroBlock.querySelectorAll('.post-full')[1])
  allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1])
}


// Писать код до сюда
})();