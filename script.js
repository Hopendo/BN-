<script>
  const cards = document.querySelectorAll('.album-card'); // Select each album image wrapper
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.transform = 'translateX(0) scale(1)';
        card.style.opacity = '1';
        card.style.zIndex = '10';
      } else if (i < index) {
        card.style.transform = 'translateX(-100%) scale(0.9)';
        card.style.opacity = '0';
        card.style.zIndex = '5';
      } else {
        card.style.transform = 'translateX(100%) scale(0.9)';
        card.style.opacity = '0';
        card.style.zIndex = '5';
      }
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  // Initial display
  showCard(currentIndex);

  // Optional: Add click events for testing
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
  });
</script
