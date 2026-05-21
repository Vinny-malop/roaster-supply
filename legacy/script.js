/**
 * Roaster Supply Co. — Shared JavaScript
 * Handles: nav scroll state, mobile menu, scroll animations
 */

// --- Nav scroll state ---
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 48);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --- Mobile menu ---
const overlay  = document.getElementById('mobileOverlay');
const burger   = document.getElementById('burger');
const mClose   = document.getElementById('mobileClose');

if (overlay && burger && mClose) {
  const mLinks   = overlay.querySelectorAll('.m-link, .btn');
  const openMenu  = () => { overlay.classList.add('open');  document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { overlay.classList.remove('open'); document.body.style.overflow = ''; };

  burger.addEventListener('click', openMenu);
  mClose.addEventListener('click', closeMenu);
  mLinks.forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

// --- Scroll animations ---
const animEls = document.querySelectorAll('.anim');
if (animEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.anim:not(.in)')];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 0.08) + 's';
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  animEls.forEach(el => io.observe(el));
}

// --- Contact form — native submit to Web3Forms ---
const form      = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (form && submitBtn) {
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    // Validation passed — disable button to prevent double-submit,
    // then let the form submit natively to Web3Forms.
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
  });
}
