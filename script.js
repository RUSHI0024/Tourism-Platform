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
let imageIndex = 0;
let activeLayer = 0;

// Initial image
bgLayers[0].style.backgroundImage = `url(${images[0]})`;
bgLayers[0].classList.add('active');

setInterval(() => {
  activeLayer = activeLayer === 0 ? 1 : 0;
  imageIndex = (imageIndex + 1) % images.length;

  bgLayers[activeLayer].style.backgroundImage = `url(${images[imageIndex]})`;

  bgLayers.forEach(bg => bg.classList.remove('active'));
  bgLayers[activeLayer].classList.add('active');

}, 6000); // ⏱ change every 6 seconds
