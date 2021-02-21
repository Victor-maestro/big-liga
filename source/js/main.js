import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();

let toggleMenu = document.querySelector('.toggle__menu');
let menuList = document.querySelector('.menu');
let headerBlock = document.querySelector('.header')
let rigthBlock = document.querySelector('.promo__block--desc')
let loader = document.querySelector('.loader')
let wrapper = document.querySelector('.wrapper')

document.addEventListener("DOMContentLoaded", event => {
  window.onresize = function() {
    resize_info();
  };
});

function resize_info() {
  if (window.innerWidth < 1024) {
    toggleMenu.classList.remove('toggle__menu_open')
    menuList.classList.remove('menu_show')

    
  }
}

toggleMenu.addEventListener('click', event => {

  toggleMenu.classList.toggle('toggle__menu_open')
  menuList.classList.toggle('menu_show')
  wrapper.classList.toggle('wrapper--no-scrollbar');

  event.preventDefault();

})


if (window.innerWidth < 1024) {

  let counter = 0;

  document.addEventListener('click', event => {

    counter++

    if (headerBlock.contains(event.target) || loader.contains(event.target)) return; 
    rigthBlock.classList.toggle('promo__block--show');

    if (counter < 3) {
      let tl = gsap.timeline();
      tl.from(".promo__warrior", {duration: 1, opacity: 0, y: 100, ease: "power1"});
      tl.from(".promo__text", {duration: 1, opacity: 0, ease: "power1"});
    } 

  })

  loader.addEventListener('click', (event) => {

    wrapper.classList.remove('wrapper--hide')
    loader.classList.add('wrapper--hide')

    let tl = gsap.timeline();
    tl.from(".promo__title", {duration: 1, opacity: 0, x: -150, ease: "power1"});
    tl.from(".promo__warrior", {duration: 1, opacity: 0, y: 100, ease: "power1"});
    tl.from(".promo__text", {duration: 1, opacity: 0, ease: "power1"});
  
  }, false);

} else {
  document.addEventListener('keydown', (event) => {

    if (event.key === "Enter") {
  
      wrapper.classList.remove('wrapper--hide')
      loader.classList.add('wrapper--hide')
  
      let tl = gsap.timeline();
      tl.from(".promo__title", {duration: 1, opacity: 0, x: -150, ease: "power1"});
      tl.from(".promo__warrior", {duration: 1, opacity: 0, y: 100, ease: "power1"});
      tl.from(".promo__text", {duration: 1, opacity: 0, ease: "power1"});
  
    }
  }, false);
}


gsap.registerPlugin(ScrollTrigger);

gsap.from(".loader__block_name", {
  scrollTrigger: {
    trigger: ".loader",
    toggleActions: "play none none none",
    start: "top 40%",
  }, 
  delay: 0.5,
  duration: 1.2,
  opacity: 0,
  x: -150,
  ease: "power1",
});

gsap.from(".loader__block_desc", {
  scrollTrigger: {
    trigger: ".loader",
    toggleActions: "play none none none",
    start: "top 40%",
  }, 
  delay: 0.5,
  duration: 1.2,
  opacity: 0,
  x: 150,
  ease: "power1",
});

gsap.from(".loader__block_emblem", {
  scrollTrigger: {
    trigger: ".loader",
    toggleActions: "play none none none",
    start: "top 40%",
  }, 
  duration: 0.8,
  opacity: 0,
  ease: "power1",
});