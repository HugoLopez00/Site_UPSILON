/* ============================================
   UPSILON — Scripts principaux
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navigation : scroll ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ── Navigation : lien actif ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Burger mobile ── */
  const burger  = document.getElementById('burger');
  const overlay = document.getElementById('mobileOverlay');
  if (burger && overlay) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      overlay.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  }

  /* ── Compteurs animés ── */
  function animateCount(el) {
    const raw = el.dataset.count;
    const target = parseFloat(raw);
    const suffix = el.dataset.suffix || '';
    const isFloat = raw.includes('.');
    let start = null;
    const duration = 1600;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const value = target * easeOut(progress);
      el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
    }
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          co.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => co.observe(el));
  }

  /* ── Formulaire de contact ── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      success.style.display = 'block';
    });
  }

  /* ── Highlight section active au scroll (index) ── */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 1) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === `#${current}`) a.classList.add('active');
      });
    }, { passive: true });
  }

});
