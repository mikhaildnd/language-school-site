// import { webpSupportTest } from './modules/webp-support-test.js';
// import { HeaderScroll } from './modules/header-scroll.js';
// import { scrollWidthCalc } from './modules/calc-scroll-width.js';
// import { test } from './modules/test.js';
// import { Scroll } from './modules/scroll.js';
// import { PaginationMove } from './modules/pagination-move.js';
// import { Accordeon } from './modules/toggle-accordeon.js';
import { toggleClass } from './modules/helpers.js';
import { bodyLock } from './modules/helpers.js';

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

toggleClass(
  {
    triggerSelector: '.main-nav__trigger',
    eTargetSelector: '.main-nav__dropdown',
    toggleClass: 'open',
    triggerToggle: true,
    // cb: bodyLock('.main-nav__trigger.open'),
  },
  {
    // func: sendMessage(),
    // arg1: 'q',
    // arg2: 'r',
  }
);

// const pricesSlider1 = new Swiper('.prices__rates-group', {
//   speed: 200,
//   slidesPerView: 1,
//   // centeredSlides: true,
//   // spaceBetween: 150,
// });

// let sendMessage = (arg1, arg2) => {
//   // console.log(arg1, arg2);
//   console.log('hey');
// };
// let wrapper = (func, ...args) => {
//   func(...args);
// };
// // wrapper(sendMessage, 'q', 'r');
// // const lock = new bodyLock('.main-nav__trigger');

// function clbck(arg1, arg2) {
//   console.log('hey');
//   // console.log(arg1 + arg2);
// }

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

//========================================================================================================================================================
// const priceItemsContainer = document.querySelector('.prices__rates');
// const priceItems = document.querySelectorAll('.prices__rates-group');
// const button = document.querySelector('.tab-label input');

// const containerCoord = priceItemsContainer.getBoundingClientRect().width;
// console.log(containerCoord);

// button.addEventListener('click', () => {
//   priceItems.forEach((item) => {
//     // let start = item.getBoundingClientRect().width;
//     item.style.transition = 'all 0.3s linear';
//     item.style.position = 'relative';
//     // item.style.transform = `translate(${-start + 'px'})`;
//     item.style.left = -containerCoord + 'px';
//     console.log(item);
//   });
// });
