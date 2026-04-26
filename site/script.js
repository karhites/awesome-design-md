/* SilverSea — runtime
   - Char-by-char heading animation (per video-hero spec)
   - Staggered fade-ins on subhead / buttons / tag
   - IntersectionObserver reveal for downstream sections
   - Card cursor halo, smooth-scroll
   Honors prefers-reduced-motion. */

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Animated heading ----------
  const heading = document.querySelector('.h-anim');
  if (heading) {
    const raw = heading.dataset.text || heading.textContent || '';
    // Attribute string is "...\\n..." (literal backslash + n). Split on that.
    const lines = raw.split('\\n');
    const initial = parseInt(heading.dataset.initial || '200', 10);
    const charDelay = parseInt(heading.dataset.charDelay || '30', 10);

    heading.innerHTML = '';
    lines.forEach((line, lineIdx) => {
      const lineEl = document.createElement('span');
      lineEl.className = 'h-line';
      const lineLen = line.length;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        const span = document.createElement('span');
        span.className = 'ch';
        span.setAttribute('aria-hidden', 'true');
        span.textContent = ch === ' ' ? ' ' : ch;
        const delay = initial + (lineIdx * lineLen * charDelay) + (i * charDelay);
        span.style.transitionDelay = delay + 'ms';
        lineEl.appendChild(span);
      }
      heading.appendChild(lineEl);
    });

    if (reduce) {
      heading.classList.add('lit');
    } else {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => heading.classList.add('lit'))
      );
    }
  }

  // ---------- Staggered fade-ins ----------
  document.querySelectorAll('.fade-in').forEach((el) => {
    const delay = parseInt(el.dataset.delay || '0', 10);
    const duration = parseInt(el.dataset.duration || '1000', 10);
    el.style.transitionDuration = duration + 'ms';
    if (reduce) {
      el.classList.add('lit');
    } else {
      setTimeout(() => el.classList.add('lit'), delay);
    }
  });

  // ---------- Reveal-on-scroll for downstream sections ----------
  const targets = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.25, rootMargin: '0px 0px -5% 0px' });
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Card cursor halo ----------
  if (!reduce) {
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('pointermove', (ev) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
        card.style.setProperty('--my', (ev.clientY - r.top) + 'px');
      });
      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
      });
    });
  }

  // ---------- In-page anchor smooth scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    });
  });
})();
