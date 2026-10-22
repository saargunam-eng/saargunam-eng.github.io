document.addEventListener('DOMContentLoaded', () => {
  // ── Typewriter Effect ──
  const phrases = [
    'never pages anyone at 3 AM.',
    'scales cleanly under peak load.',
    'slashes enterprise cloud spend.',
    'empowers 1000+ engineers daily.',
    'survives multi-region failovers.'
  ];

  const el = document.getElementById('typewriter');
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeLoop() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 1800; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before next sentence
    }

    setTimeout(typeLoop, typingSpeed);
  }

  if (el) typeLoop();

  // ── Animated Stat Counter ──
  const statNumbers = document.querySelectorAll('.stat-number');
  let startedCounters = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !startedCounters) {
        startedCounters = true;
        statNumbers.forEach(stat => {
          const target = +stat.getAttribute('data-target');
          let count = 0;
          const duration = 1500;
          const stepTime = 25;
          const increment = Math.ceil(target / (duration / stepTime));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = count;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) observer.observe(statsSection);

  // ── Mobile Menu Toggle ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#0a0d14';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
    });
  }
});
