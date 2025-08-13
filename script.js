// --- Touch swipe & deck shuffle ---
const carouselTrack = document.querySelector('.carousel-track');
const imageCards = document.querySelectorAll('.image-card');

let isTouching = false;
let startX = 0;
let currentX = 0;

// Touch start
carouselTrack.addEventListener('touchstart', (e) => {
  isTouching = true;
  startX = e.touches[0].pageX;
});

// Touch move (swipe scroll)
carouselTrack.addEventListener('touchmove', (e) => {
  if(!isTouching) return;
  currentX = e.touches[0].pageX;
  const walk = startX - currentX;
  carouselTrack.scrollLeft += walk;
  startX = currentX;
});

// Touch end
carouselTrack.addEventListener('touchend', () => {
  isTouching = false;
});

// --- Click-to-bring-card-to-front ---
imageCards.forEach((card) => {
  card.addEventListener('click', () => {
    // Reset order
    imageCards.forEach(c => c.style.order = 0);
    // Bring clicked card to front
    card.style.order = -1;
  });
});

// --- Swipe deck shuffle (mobile-friendly) ---
let swipeStart = 0;
let swipeEnd = 0;

carouselTrack.addEventListener('touchstart', (e) => {
  swipeStart = e.touches[0].clientX;
});

carouselTrack.addEventListener('touchend', (e) => {
  swipeEnd = e.changedTouches[0].clientX;
  const diff = swipeStart - swipeEnd;

  if(diff > 50){ 
    // Swiped left -> move first card to the end
    const firstCard = imageCards[0];
    carouselTrack.appendChild(firstCard);
  } else if(diff < -50){
    // Swiped right -> move last card to the front
    const lastCard = imageCards[imageCards.length - 1];
    carouselTrack.prepend(lastCard);
  }
});
