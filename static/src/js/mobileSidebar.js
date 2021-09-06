'use strict';

(() => {
// Писать код отсюда

const lionsBuner = document.querySelector('.media-info-widget'),
      heroBlock = document.querySelector('.hero-post'),
      allPublications = document.querySelector('.all-publications');

if(window.innerWidth < 760) {
  heroBlock.append(lionsBuner);

  console.log(heroBlock.querySelectorAll('.post-full')[1])
  allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1])
}


// Писать код до сюда
})();