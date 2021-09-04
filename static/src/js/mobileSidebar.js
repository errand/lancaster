'use strict';

window.onload = () => {
// Писать код отсюда

const lionsBuner = document.querySelector('.media-info-widget'),
    heroBlock = document.querySelector('.hero-publications');

if(window.innerWidth < 760) {
  heroBlock.append(lionsBuner);
}


// Писать код до сюда
}