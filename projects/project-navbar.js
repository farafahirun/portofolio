// Navbar & Theme Toggle Script for Project Pages

// Theme Toggle - Desktop & Mobile
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const html = document.documentElement;
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const iconSunMobile = document.getElementById('icon-sun-mobile');
const iconMoonMobile = document.getElementById('icon-moon-mobile');

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
  if (theme === 'dark') {
    if (iconSun) iconSun.classList.add('hidden');
    if (iconMoon) iconMoon.classList.remove('hidden');
    if (iconSunMobile) iconSunMobile.classList.add('hidden');
    if (iconMoonMobile) iconMoonMobile.classList.remove('hidden');
  } else {
    if (iconSun) iconSun.classList.remove('hidden');
    if (iconMoon) iconMoon.classList.add('hidden');
    if (iconSunMobile) iconSunMobile.classList.remove('hidden');
    if (iconMoonMobile) iconMoonMobile.classList.add('hidden');
  }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}
