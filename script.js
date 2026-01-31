// HEADER SCROLL EFFECT
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// HERO IMAGE SLIDER
const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg'
];

const bgLayers = document.querySelectorAll('.hero-bg');
let index = 0;
let active = 0;

bgLayers[0].style.backgroundImage = `url(${images[0]})`;
bgLayers[0].classList.add('active');

setInterval(() => {
  active = active === 0 ? 1 : 0;
  index = (index + 1) % images.length;

  bgLayers[active].style.backgroundImage = `url(${images[index]})`;
  bgLayers.forEach(bg => bg.classList.remove('active'));
  bgLayers[active].classList.add('active');
}, 6000);
