/* =====================================================
   PROJECTS DATA
   ===================================================== */

const PROJECTS = [
  {
    id: "AgriForesight",
    title: "AgriForesight",
    year: 2025,
    status: "Ongoing",
    categories: ["AI Engineer", "Web Developer"],
    description: "AI-based agricultural foresight and decision support system."
  },
  {
    id: "CalFood",
    title: "CalFood",
    year: 2024,
    status: "Finished",
    categories: ["AI Engineer", "Data Scientist"],
    description: "Food calorie estimation using computer vision."
  },
  {
    id: "FlashField",
    title: "FlashField",
    year: 2023,
    status: "Finished",
    categories: ["Web Developer", "UI/UX Design"],
    description: "Field activity tracking and reporting web application."
  }
];

/* =====================================================
   RENDER LATEST PROJECTS (HOME)
   ===================================================== */

function renderLatestProjects() {
  const container = document.getElementById("latest-projects");
  if (!container) return;

  const sorted = [...PROJECTS].sort((a, b) => b.year - a.year);
  const latest = sorted.slice(0, 6);

  container.innerHTML = "";

  latest.forEach(p => {
    container.innerHTML += `
      <a href="projects/${p.id}/" class="card block p-6">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-primary font-semibold text-lg">${p.title}</h3>
          <span class="${p.status === "Finished" ? "badge-finished" : "badge-ongoing"}">
            ${p.status}
          </span>
        </div>
        <p class="text-secondary text-sm mb-4 leading-relaxed">${p.description}</p>
        <span class="text-muted text-xs">${p.categories.join(" · ")} • ${p.year}</span>
      </a>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderLatestProjects);

/* =====================================================
   ALL PROJECTS PAGE
   ===================================================== */

function initAllProjectsPage() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filterSort = document.getElementById("filter-sort");
  const filterStatus = document.getElementById("filter-status");
  const filterCategory = document.getElementById("filter-category");

  // Populate categories
  const categories = new Set();
  PROJECTS.forEach(p => p.categories.forEach(c => categories.add(c)));
  categories.forEach(c => {
    filterCategory.innerHTML += `<option value="${c}">${c}</option>`;
  });

  function render() {
    grid.innerHTML = "";
    let data = [...PROJECTS];

    if (filterStatus.value !== "all") {
      data = data.filter(p => p.status === filterStatus.value);
    }

    if (filterCategory.value !== "all") {
      data = data.filter(p => p.categories.includes(filterCategory.value));
    }

    data.sort((a, b) =>
      filterSort.value === "desc" ? b.year - a.year : a.year - b.year
    );

    data.forEach(p => {
      grid.innerHTML += `
        <a href="projects/${p.id}/" class="card block p-6">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-primary font-semibold text-lg">${p.title}</h3>
            <span class="${p.status === "Finished" ? "badge-finished" : "badge-ongoing"}">
              ${p.status}
            </span>
          </div>
          <p class="text-secondary text-sm mb-4 leading-relaxed">${p.description}</p>
          <span class="text-muted text-xs">${p.categories.join(" · ")} • ${p.year}</span>
        </a>
      `;
    });
  }

  filterSort.addEventListener("change", render);
  filterStatus.addEventListener("change", render);
  filterCategory.addEventListener("change", render);

  render();
}

document.addEventListener("DOMContentLoaded", initAllProjectsPage);

/* =====================================================
   TIMELINE PAGE
   ===================================================== */

function initTimelinePage() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const sorted = [...PROJECTS].sort((a, b) => b.year - a.year);
  let currentYear = null;

  container.innerHTML = "";

  sorted.forEach(p => {
    if (p.year !== currentYear) {
      currentYear = p.year;
      container.innerHTML += `
        <h2 class="timeline-year mt-8 mb-4">${currentYear}</h2>
      `;
    }

    container.innerHTML += `
      <a href="projects/${p.id}/" class="timeline-item">
        <div class="flex justify-between items-start mb-2">
          <h3 class="timeline-title">${p.title}</h3>
          <span class="${p.status === "Finished" ? "badge-finished" : "badge-ongoing"}">
            ${p.status}
          </span>
        </div>
        <p class="timeline-desc mb-2">${p.description}</p>
        <span class="timeline-meta">${p.categories.join(" · ")}</span>
      </a>
    `;
  });
}

document.addEventListener("DOMContentLoaded", initTimelinePage);

/* =====================================================
   PROJECT DETAIL PAGE
   ===================================================== */

function initProjectDetailPage() {
  if (typeof PROJECT_ID === "undefined") return;

  const project = PROJECTS.find(p => p.id === PROJECT_ID);
  if (!project) return;

  document.title = project.title + " | Project";
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-year").textContent = "Year: " + project.year;
  document.getElementById("project-status").innerHTML = `Status: <strong>${project.status}</strong>`;
  document.getElementById("project-categories").textContent = "Categories: " + project.categories.join(", ");
  document.getElementById("project-description").textContent = project.description;

  const relatedContainer = document.getElementById("related-projects");
  if (!relatedContainer) return;

  const related = PROJECTS.filter(p =>
    p.id !== project.id &&
    p.categories.some(c => project.categories.includes(c))
  ).slice(0, 2);

  related.forEach(p => {
    relatedContainer.innerHTML += `
      <a href="../${p.id}/" class="card block p-6">
        <h3 class="text-primary font-semibold text-lg mb-2">${p.title}</h3>
        <p class="text-secondary text-sm">${p.description}</p>
      </a>
    `;
  });
}

document.addEventListener("DOMContentLoaded", initProjectDetailPage);

/* =====================================================
   THEME TOGGLE (LIGHT / DARK)
   ===================================================== */

function applyTheme(isDark) {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');
  if (sun && moon) {
    if (isDark) {
      sun.classList.add('hidden');
      moon.classList.remove('hidden');
    } else {
      sun.classList.remove('hidden');
      moon.classList.add('hidden');
    }
  }
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');

  // Load preference
  const stored = localStorage.getItem('theme');
  let isDark = false;
  if (stored === 'dark') {
    isDark = true;
  } else if (stored === 'light') {
    isDark = false;
  } else {
    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Apply on all pages
  applyTheme(isDark);

  // Attach click if button exists
  if (btn) {
    btn.addEventListener('click', () => {
      isDark = !document.documentElement.classList.contains('dark');
      applyTheme(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
