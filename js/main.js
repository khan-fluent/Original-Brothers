// ---- Navbar scroll effect ----

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);
}, { passive: true });


// ---- Mobile menu toggle ----

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

// ---- Cycling hero title ----

const titleA = document.getElementById('title-a');
const titleB = document.getElementById('title-b');
let showingA = true;

setInterval(() => {
  const current = showingA ? titleA : titleB;
  const next = showingA ? titleB : titleA;

  current.classList.add('hero__title-line--out');
  current.classList.remove('hero__title-line--active');

  setTimeout(() => {
    current.classList.remove('hero__title-line--out');
    next.classList.add('hero__title-line--active');
    showingA = !showingA;
  }, 800);
}, 4000);


// ---- Rotating hero tagline ----

const rotatingEl = document.getElementById('hero-rotating');
const phrases = [
  "We don't cut corners — we cut pizza.",
  "Best slice in East New York. No debate.",
  "If you know, you know.",
  "Come hungry, leave happy.",
  "Our dough is older than your playlist.",
  "Catch us on TikTok before we sell out.",
  "You had us at extra cheese.",
  "Warning: may cause extreme cravings.",
  "Brooklyn born. Brooklyn fed.",
  "Grandma pie hits different on a Sunday.",
];

let phraseIndex = 0;
rotatingEl.textContent = phrases[0];

setInterval(() => {
  rotatingEl.classList.add('fade-out');
  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingEl.textContent = phrases[phraseIndex];
    rotatingEl.classList.remove('fade-out');
  }, 400);
}, 3500);

// ---- Menu category tabs ----

const tabs = document.querySelectorAll('.menu__tab');
const categories = document.querySelectorAll('.menu__category');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.category;

    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    categories.forEach((cat) => {
      cat.classList.toggle('active', cat.dataset.category === target);
    });
  });
});


// ---- Scroll-reveal animations ----

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-children').forEach((el) => {
  revealObserver.observe(el);
});


// ---- Sticky mobile order bar ----

const mobileOrder = document.getElementById('mobile-order');

if (mobileOrder) {
  window.addEventListener('scroll', () => {
    mobileOrder.classList.toggle('visible', window.scrollY > window.innerHeight * 0.5);
  }, { passive: true });
}
