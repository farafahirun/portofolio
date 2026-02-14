/* =====================================================
   MAIN JAVASCRIPT FOR PORTFOLIO
   ===================================================== */

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  populatePersonalInfo();
  populateAboutSection();
  renderProjects();
  renderSkills();
  renderTestimonials();
  initScrollAnimations();
  initMobileMenu();
  initNavbarScroll();
  initScrollToTop();
  initSmoothScroll();
  initNavActiveState();
  initCVModal();
  updateStatistics();
  initLazyLoading();
  
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }
});

// ==================== THEME TOGGLE ====================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  
  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);
  
  themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
  });
  
  function updateThemeIcons(theme) {
    if (theme === 'dark') {
      iconSun?.classList.add('hidden');
      iconMoon?.classList.remove('hidden');
    } else {
      iconSun?.classList.remove('hidden');
      iconMoon?.classList.add('hidden');
    }
  }
}

// ==================== POPULATE PERSONAL INFO ====================
function populatePersonalInfo() {
  if (typeof PERSONAL_INFO === 'undefined') return;
  
  // Navbar
  document.getElementById('nav-name').textContent = PERSONAL_INFO.shortName;
  
  // Hero Section
  document.getElementById('hero-name').textContent = PERSONAL_INFO.shortName;
  document.getElementById('hero-title').textContent = PERSONAL_INFO.title;
  document.getElementById('hero-description').textContent = PERSONAL_INFO.description;
  document.getElementById('profile-photo').src = PERSONAL_INFO.photo;
  document.getElementById('profile-photo').alt = PERSONAL_INFO.fullName;
  
  // GPA Display
  document.getElementById('gpa-display').textContent = PERSONAL_INFO.education.gpa;
  
  // Social Links
  document.getElementById('social-github').href = PERSONAL_INFO.socialLinks.github;
  document.getElementById('social-linkedin').href = PERSONAL_INFO.socialLinks.linkedin;
  document.getElementById('social-email').href = PERSONAL_INFO.socialLinks.email;
  document.getElementById('social-instagram').href = PERSONAL_INFO.socialLinks.instagram;
  document.getElementById('social-blog').href = PERSONAL_INFO.socialLinks.blog;
  
  // External Links
  document.getElementById('alternative-portfolio-link').href = PERSONAL_INFO.externalLinks.alternativePortfolio;
  
  // Footer
  document.getElementById('footer-name').textContent = PERSONAL_INFO.fullName;
  document.getElementById('footer-location').textContent = PERSONAL_INFO.location;
  document.getElementById('footer-github').href = PERSONAL_INFO.socialLinks.github;
  document.getElementById('footer-linkedin').href = PERSONAL_INFO.socialLinks.linkedin;
  document.getElementById('footer-email').href = PERSONAL_INFO.socialLinks.email;
  document.getElementById('footer-instagram').href = PERSONAL_INFO.socialLinks.instagram;
  document.getElementById('copyright-name').textContent = PERSONAL_INFO.fullName;
  
  // Current year
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

// ==================== POPULATE ABOUT SECTION ====================
function populateAboutSection() {
  if (typeof PERSONAL_INFO === 'undefined') return;
  
  // Personal Info
  document.getElementById('about-fullname').textContent = PERSONAL_INFO.fullName;
  document.getElementById('about-birthdate').textContent = formatDate(PERSONAL_INFO.birthDate);
  document.getElementById('about-email').textContent = PERSONAL_INFO.email;
  document.getElementById('about-phone').textContent = PERSONAL_INFO.phone;
  document.getElementById('about-location').textContent = PERSONAL_INFO.location;
  document.getElementById('about-education').textContent = PERSONAL_INFO.education.current;
  document.getElementById('about-gpa').textContent = `${PERSONAL_INFO.education.gpa} / ${PERSONAL_INFO.education.maxGpa}`;
  document.getElementById('about-status').textContent = PERSONAL_INFO.education.status;
  
  // Professional Summary
  document.getElementById('professional-summary').textContent = PERSONAL_INFO.professionalSummary;
  
  // Education History
  if (typeof EDUCATION_HISTORY !== 'undefined' && EDUCATION_HISTORY.length > 0) {
    const container = document.getElementById('education-history');
    if (container) {
      container.innerHTML = EDUCATION_HISTORY.map(edu => `
        <div class="education-item">
          <div class="education-institution">${edu.institution}</div>
          <div class="education-degree">${edu.degree}</div>
          <div class="education-period">${edu.period}</div>
          ${edu.gpa ? `<div class="education-gpa">IPK: ${edu.gpa}</div>` : ''}
          ${edu.description ? `<p class="text-secondary text-sm mt-2">${edu.description}</p>` : ''}
        </div>
      `).join('');
    }
  }
  
  // Experience
  if (typeof EXPERIENCES !== 'undefined' && EXPERIENCES.length > 0) {
    const container = document.getElementById('experience-list');
    if (container) {
      container.innerHTML = EXPERIENCES.map(exp => `
        <div class="experience-item">
          <span class="experience-type">${exp.type}</span>
          <h4 class="experience-title">${exp.title}</h4>
          <div class="experience-org">${exp.organization}</div>
          <div class="experience-period">${exp.period}</div>
          <p class="experience-desc">${exp.description}</p>
        </div>
      `).join('');
    } else {
      console.error('Element #experience-list not found');
    }
  } else {
    console.warn('EXPERIENCES is not defined or empty');
  }
}

// ==================== RENDER PROJECTS ====================
function renderProjects() {
  if (typeof PROJECTS === 'undefined') return;
  
  const container = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  let filteredProjects = [...PROJECTS].sort((a, b) => b.year - a.year);
  
  function displayProjects(projects) {
    // Show only 6 projects on homepage
    const projectsToShow = projects.slice(0, 6);
    
    container.innerHTML = projectsToShow.map(project => `
      <a href="projects/${project.id}.html" class="project-card" data-aos="fade-up">
        <div class="project-header">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-year">${project.year}</div>
          </div>
          <span class="project-status status-${project.status.toLowerCase()}">
            ${project.status}
          </span>
        </div>
        
        <div class="project-categories">
          ${project.categories.map(cat => `<span class="project-category">${cat}</span>`).join('')}
        </div>
        
        <p class="project-description">${project.description}</p>
        
        <div class="project-links">
          ${project.github ? `
            <span class="project-link">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </span>
          ` : ''}
          ${project.demo ? `
            <span class="project-link">
              <i class="fas fa-external-link-alt"></i>
              <span>Demo</span>
            </span>
          ` : `
            <span class="project-link" style="opacity: 0.5; cursor: not-allowed;">
              <i class="fas fa-external-link-alt"></i>
              <span>No Demo</span>
            </span>
          `}
        </div>
      </a>
    `).join('');
  }
  
  // Initial display
  displayProjects(filteredProjects);
  
  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      if (filter === 'all') {
        filteredProjects = [...PROJECTS].sort((a, b) => b.year - a.year);
      } else if (filter === 'Ongoing' || filter === 'Finished') {
        filteredProjects = PROJECTS.filter(p => p.status === filter).sort((a, b) => b.year - a.year);
      } else {
        filteredProjects = PROJECTS.filter(p => p.categories.includes(filter)).sort((a, b) => b.year - a.year);
      }
      
      displayProjects(filteredProjects);
      
      // Reinitialize AOS for new elements
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  });
}

// ==================== RENDER SKILLS ====================
function renderSkills() {
  if (typeof SKILLS === 'undefined') return;
  
  const container = document.getElementById('skills-container');
  
  const skillIcons = {
    "AI & Data Engineering": "fa-brain",
    "Web & Software Development": "fa-code",
    "UI/UX Design": "fa-palette",
    "Data Visualization & Analytics": "fa-chart-bar",
    "Tools & Workflow": "fa-toolbox"
  };
  
  container.innerHTML = Object.entries(SKILLS).map(([category, skills], index) => `
    <div class="skill-category" data-aos="fade-up" data-aos-delay="${index * 100}">
      <h3 class="skill-category-title">
        <i class="fas ${skillIcons[category] || 'fa-star'}"></i>
        ${category}
      </h3>
      <div class="skills-grid">
        ${skills.map(skill => `
          <div class="skill-item-badge">
            <span class="skill-name-only">${skill.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ==================== RENDER TESTIMONIALS ====================
function renderTestimonials() {
  if (typeof TESTIMONIALS === 'undefined') return;
  
  const container = document.getElementById('testimonials-grid');
  
  container.innerHTML = TESTIMONIALS.map((testimonial, index) => {
    const initials = testimonial.name.split(' ').map(n => n[0]).join('');
    
    return `
      <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="testimonial-header">
          ${testimonial.photo ? 
            `<img src="${testimonial.photo}" alt="${testimonial.name}" class="testimonial-avatar" loading="lazy">` :
            `<div class="testimonial-avatar-placeholder">${initials}</div>`
          }
          <div class="testimonial-info">
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
            <div class="testimonial-company">${testimonial.company}</div>
          </div>
        </div>
        <p class="testimonial-text">${testimonial.testimonial}</p>
      </div>
    `;
  }).join('');
}

// ==================== UPDATE STATISTICS ====================
function updateStatistics() {
  if (typeof PROJECTS !== 'undefined') {
    document.getElementById('total-projects').textContent = PROJECTS.length;
  }
  
  if (typeof EXPERIENCES !== 'undefined') {
    document.getElementById('total-experience').textContent = EXPERIENCES.length + '+';
  }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIcon = menuBtn?.querySelector('i');
  
  menuBtn?.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    
    // Toggle icon between bars and times
    if (menuIcon) {
      if (isHidden) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
      }
    }
  });
  
  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIcon) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn?.contains(e.target) && !mobileMenu?.contains(e.target)) {
      mobileMenu?.classList.add('hidden');
      if (menuIcon) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    }
  });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-glass');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for enhanced glass effect
    if (currentScroll > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navHeight = 64; // Height of navbar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==================== SCROLL TO TOP ====================
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  });
  
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== NAV ACTIVE STATE ====================
function initNavActiveState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all cards
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
}

// ==================== CV MODAL ====================
function initCVModal() {
  const viewCvBtn = document.getElementById('view-cv-btn');
  const modal = document.getElementById('cv-modal');
  const closeModal = document.getElementById('close-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOverlay = document.getElementById('modal-overlay');
  const cvIframe = document.getElementById('cv-iframe');
  const downloadCv = document.getElementById('download-cv');
  
  if (typeof PERSONAL_INFO !== 'undefined') {
    const cvPath = PERSONAL_INFO.externalLinks.cv;
    
    viewCvBtn?.addEventListener('click', () => {
      cvIframe.src = cvPath;
      downloadCv.href = cvPath;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
    
    const closeModalFunc = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      cvIframe.src = '';
    };
    
    closeModal?.addEventListener('click', closeModalFunc);
    closeModalBtn?.addEventListener('click', closeModalFunc);
    modalOverlay?.addEventListener('click', closeModalFunc);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunc();
      }
    });
  }
}

// ==================== LAZY LOADING IMAGES ====================
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Trigger load
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Animate counters when in view
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        if (!isNaN(target)) {
          animateCounter(counter, target);
        }
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.grid.grid-cols-2.sm\\:grid-cols-4');
if (statsSection) {
  counterObserver.observe(statsSection);
}

console.log('Portfolio loaded successfully! 🚀');
