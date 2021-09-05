'use strict';

window.onload = () => {
// Писать код отсюда

const lionsBuner = document.querySelector('.media-info-widget'),
      heroBlock = document.querySelector('.hero-publications'),
      allPublications = document.querySelector('.all-publications');

if(window.innerWidth < 760) {
  heroBlock.append(lionsBuner);

  console.log(heroBlock.querySelectorAll('.publication-full')[1])
  allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.publication-full')[1])
}


// Писать код до сюда
}