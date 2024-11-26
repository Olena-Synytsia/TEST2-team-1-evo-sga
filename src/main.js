import { swiperGallery } from './js/gallery';
import './js/header.js';
import './js/modal.js';
import accordionFaq from './js/faq.js';

swiperGallery();

//pages//
// const tab = document.querySelector('.btn-footer');

// const handleClick = e => {
//   window.open('page-3.html', '_blank');
// };
// tab.addEventListener('click', handleClick);

//button//
const button = document.getElementById('button-google');

button.addEventListener('click', function () {
  button.disabled = true;
});

// window.addEventListener('resize', function () {
//   const background = document.body;
//   const windowWidth = window.innerWidth;
//   const windowHeight = window.innerHeight;

//   background.style.backgroundPosition = `${windowWidth / 2}px ${
//     windowHeight / 2
//   }px`;
// });

// function adjustBackgroundPosition() {
//   let windowHeight = window.innerHeight;
//   // let moveFactor1 = windowWidth * 0.05; // Adjust this value for the first background
//   let moveFactor2 = windowHeight * 0.9; // Adjust this value for the second background
//   // let moveFactor3 = windowWidth * 0.04;
//   console.log(windowHeight);
//   document.body.style.backgroundPosition = `
//      /* Move the first background to the right */
//     50px ${2200 - moveFactor2}px, /* Move the second background to the right */
//      6400px /* Move the third background to the right */
//   `;
// }
// window.addEventListener('resize', adjustBackgroundPosition);
// adjustBackgroundPosition();
// let initialHeight = window.innerHeight;
// function adjustBackgroundPosition() {
//   let currentHeight = window.innerHeight;
//   let heightDifference = initialHeight - currentHeight;
//   let percentageMove = (heightDifference / initialHeight) * 100;
//   document.body.style.backgroundPosition = `
//     124px ${0 + percentageMove}vh,
//     50px ${250 - percentageMove}vh,
//     -65px ${80 + percentageMove}vh
//   `;
// }
// window.addEventListener('resize', adjustBackgroundPosition);
// adjustBackgroundPosition();
// let background = document.querySelector('body');
// function updateBackgroundPosition() {
//   let scrollPosition = window.scrollY;
//   style.backgroundPosition = `center ${scrollPosition * 1}px`;
// }
// window.addEventListener('scroll', updateBackgroundPosition);
// updateBackgroundPosition();
