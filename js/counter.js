// Contadores animados para las estadísticas
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    const duration = 1400;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);
      counter.textContent = `${currentValue}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = `${target}`;
      }
    };

    requestAnimationFrame(tick);
  });
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);

counters[0] && counterObserver.observe(counters[0]);
