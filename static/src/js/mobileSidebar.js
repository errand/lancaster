'use strict';

(() => {
  // Писать код отсюда

  if (document.querySelector('body').classList.contains('home') && window.innerWidth < 769) {

    const lionsBuner = document.querySelector('.widget_lanc_memes_widget'),
        heroBlock = document.querySelector('.hero-post'),
        allPublications = document.querySelector('.all-post'),
        allPublicationsTitle = allPublications.querySelector('.title-rows'),
        linkWidget = document.querySelector('.link-widget').closest('.widget');

    heroBlock.append(lionsBuner);

    allPublications.querySelector('.title-rows').after(heroBlock.querySelectorAll('.post-full')[1]);
    allPublications.querySelector('.post-full').classList.add('post-row');
    allPublications.querySelector('.post-full').classList.remove('post-full');


    heroBlock.querySelector('.post-full').querySelector('.hero-category').before(allPublicationsTitle);
    allPublications.before(linkWidget);
  }

  // Писать код до сюда
})();