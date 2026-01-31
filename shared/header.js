// Shared Header Component
// Provides consistent navigation across all pages

export function renderHeader() {
  return `
    <header class="site-header">
      <div class="header-container">
        <div class="logo-section">
          <a href="/index.html" class="logo-link">
            <h1 class="site-title">로또 & 동물상</h1>
          </a>
        </div>

        <button class="mobile-menu-toggle" aria-label="메뉴 열기">
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </button>

        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/index.html" data-page="index">홈</a></li>
            <li><a href="/lotto.html" data-page="lotto">로또 생성기</a></li>
            <li><a href="/animal-test.html" data-page="animal-test">동물상 테스트</a></li>
            <li><a href="/blog/index.html" data-page="blog">블로그</a></li>
            <li><a href="/about.html" data-page="about">소개</a></li>
            <li><a href="/contact.html" data-page="contact">문의</a></li>
          </ul>
        </nav>

        <button id="theme-toggle-header" class="theme-toggle" aria-label="테마 전환">
          <svg class="sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg class="moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </header>
  `;
}

export function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle-header');
  if (!toggle) return;

  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

export function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');

    const isExpanded = nav.classList.contains('active');
    menuToggle.setAttribute('aria-label', isExpanded ? '메뉴 닫기' : '메뉴 열기');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-label', '메뉴 열기');
    }
  });

  // Close menu when clicking a link
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-label', '메뉴 열기');
    });
  });
}

export function highlightActivePage() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': 'index',
    'lotto.html': 'lotto',
    'animal-test.html': 'animal-test',
    'about.html': 'about',
    'contact.html': 'contact',
    'privacy.html': 'privacy',
    'terms.html': 'terms',
    'disclaimer.html': 'disclaimer'
  };

  // Handle blog pages
  let activePage = pageMap[currentPage];
  if (window.location.pathname.includes('/blog/')) {
    activePage = 'blog';
  }

  // Add active class to current page link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === activePage) {
      link.classList.add('active');
    }
  });
}

// Auto-initialize when script loads
if (document.getElementById('header-placeholder')) {
  document.getElementById('header-placeholder').innerHTML = renderHeader();

  // Wait for DOM to be fully ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initThemeToggle();
      initMobileMenu();
      highlightActivePage();
    });
  } else {
    initThemeToggle();
    initMobileMenu();
    highlightActivePage();
  }
}
