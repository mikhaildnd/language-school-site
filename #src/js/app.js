// import { webpSupportTest } from './modules/webp-support-test.js';
// import { HeaderScroll } from './modules/header-scroll.js';
// import { scrollWidthCalc } from './modules/calc-scroll-width.js';
// import { test } from './modules/test.js';
// import { Scroll } from './modules/scroll.js';
// import { PaginationMove } from './modules/pagination-move.js';
// import { Accordeon } from './modules/toggle-accordeon.js';
import { toggleClass } from './modules/helpers.js';

import Swiper, { EffectFade } from 'swiper';
import 'swiper/css';

import 'swiper/css/effect-fade';
// !import 'swiper/css/pagination';

// webpSupportTest();

const historySlider = new Swiper('.slider-history', {
  modules: [EffectFade],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 100,
});

toggleClass({
  triggerSelector: '.main-nav__trigger',
  eTargetSelector: '.main-nav__dropdown',
  toggleClass: 'open',
  triggerToggle: true,
});

// const formTabs = document.querySelector('.main-form__group--tabs');
// const targetTab = document.querySelector('main-form__item--children');
// const addFields = document.querySelector('.main-form__group--additional-group');

// formTabs.addEventListener('click', (e) => {
//   let target = e.target.closest(targetTab);

//   console.log(target);
//   // if (!target) {
//   //   addFields.classList.remove('show');
//   // }
//   // addFields.classList.add('show');
// });
