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
