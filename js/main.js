// ---- Navbar scroll effect ----

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);
});


// ---- Mobile menu toggle ----

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

// ---- Rotating hero tagline ----

const rotatingEl = document.getElementById('hero-rotating');
const phrases = [
  "We don't cut corners — we cut pizza. 🍕",
  "Best slice in East New York. No debate.",
  "If you know, you know. 🤌",
  "Come hungry, leave happy.",
  "Our dough is older than your playlist.",
  "Catch us on TikTok before we sell out.",
  "You had us at extra cheese.",
  "Warning: may cause extreme cravings.",
  "Brooklyn born. Brooklyn fed. 🗽",
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


// ---- Subtle parallax on hero particles ----

const heroParticles = document.querySelector('.hero__particles');

window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    const offset = window.scrollY * 0.3;
    heroParticles.style.transform = `translateY(${offset}px)`;
  }
}, { passive: true });


// ---- Fire-trail cursor effect (hero only) ----

const hero = document.getElementById('hero');
let lastEmber = 0;

hero.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastEmber < 60) return; // throttle
  lastEmber = now;

  const ember = document.createElement('span');
  ember.className = 'cursor-ember';
  ember.style.left = e.clientX + 'px';
  ember.style.top = e.clientY + 'px';
  document.body.appendChild(ember);

  setTimeout(() => ember.remove(), 800);
});
