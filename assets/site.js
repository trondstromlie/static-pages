(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Strømningsfelt: partikler som følger et usynlig vektorfelt og legger igjen spor */
  const canvas = document.getElementById('flow');
  const context = canvas.getContext('2d');
  const colors = ['rgba(71,230,208,.5)', 'rgba(138,124,255,.5)', 'rgba(255,111,177,.38)'];
  const pointer = { x: -9999, y: -9999 };

  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.fillStyle = '#06070c';
    context.fillRect(0, 0, width, height);
    seed();
  }

  function seed() {
    const count = Math.max(90, Math.min(Math.round(width * height / 7000), 320));
    particles = Array.from({ length: count }, () => spawn());
  }

  function spawn() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      life: Math.random() * 260 + 90,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.55
    };
  }

  function fieldAngle(x, y, time) {
    return (Math.sin(x * 0.0016 + time) + Math.cos(y * 0.0021 - time * 0.75)) * Math.PI;
  }

  function frame(timestamp) {
    const time = timestamp / 14000;

    // Svak utviskning gir haler i stedet for harde prikker
    context.fillStyle = 'rgba(6, 7, 12, .055)';
    context.fillRect(0, 0, width, height);

    context.lineWidth = 0.9;
    context.lineCap = 'round';

    for (const particle of particles) {
      let angle = fieldAngle(particle.x, particle.y, time);

      // Markøren virvler feltet rundt seg
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 260) {
        const swirl = (1 - distance / 260) * 2.4;
        angle += Math.atan2(dy, dx) * 0.35 + swirl;
      }

      const previousX = particle.x;
      const previousY = particle.y;
      particle.x += Math.cos(angle) * particle.speed;
      particle.y += Math.sin(angle) * particle.speed;
      particle.life -= 1;

      context.strokeStyle = particle.color;
      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(particle.x, particle.y);
      context.stroke();

      const outside = particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height;
      if (outside || particle.life <= 0) Object.assign(particle, spawn());
    }

    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  resize();
  if (!reduceMotion) requestAnimationFrame(frame);

  /* Lys som følger markøren over kortene */
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty('--mx', (event.clientX - box.left) + 'px');
      card.style.setProperty('--my', (event.clientY - box.top) + 'px');
    });
  });

  /* Seksjoner glir inn ved rulling */
  const sections = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
  } else {
    sections.forEach((section) => section.classList.add('is-visible'));
  }

  /* Kopier-knapp */
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = document.getElementById(button.dataset.copy).textContent;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'Kopiert';
      } catch {
        button.textContent = 'Merk og kopier';
      }
      setTimeout(() => { button.textContent = 'Kopier'; }, 1800);
    });
  });
})();
