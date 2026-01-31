// Shared Header Component with Navigation
export const renderHeader = () => {
    return `
        <header class="site-header">
            <div class="header-container">
                <div class="logo-section">
                    <a href="/index.html" class="logo-link">
                        <h1 class="site-title">🎲 로또 & 동물상</h1>
                    </a>
                </div>

                <nav class="header-nav">
                    <a href="/index.html" class="nav-link" data-page="index">홈</a>
                    <a href="/lotto.html" class="nav-link" data-page="lotto">로또 생성기</a>
                    <a href="/animal-test.html" class="nav-link" data-page="animal-test">동물상 테스트</a>
                    <a href="/blog/index.html" class="nav-link" data-page="blog">블로그</a>
                    <a href="/about.html" class="nav-link" data-page="about">소개</a>
                    <a href="/contact.html" class="nav-link" data-page="contact">문의</a>
                </nav>

                <div class="header-actions">
                    <button id="theme-toggle" class="theme-toggle-btn" aria-label="테마 전환">
                        🌙
                    </button>
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="메뉴">
                        <span class="hamburger"></span>
                        <span class="hamburger"></span>
                        <span class="hamburger"></span>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <div class="mobile-menu" id="mobile-menu">
                <nav class="mobile-nav">
                    <a href="/index.html" class="mobile-nav-link" data-page="index">홈</a>
                    <a href="/lotto.html" class="mobile-nav-link" data-page="lotto">로또 생성기</a>
                    <a href="/animal-test.html" class="mobile-nav-link" data-page="animal-test">동물상 테스트</a>
                    <a href="/blog/index.html" class="mobile-nav-link" data-page="blog">블로그</a>
                    <a href="/about.html" class="mobile-nav-link" data-page="about">소개</a>
                    <a href="/contact.html" class="mobile-nav-link" data-page="contact">문의</a>
                </nav>
            </div>
        </header>
    `;
};

// Initialize theme toggle
export const initThemeToggle = () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Load saved theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    // Theme toggle event
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
};

// Initialize mobile menu
export const initMobileMenu = () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuToggle || !mobileMenu) return;

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
};

// Highlight active page
export const highlightActivePage = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Check if current page matches link
        if (currentPath.endsWith(href) ||
            (currentPath === '/' && href === '/index.html') ||
            (currentPath.includes('/blog/') && href === '/blog/index.html')) {
            link.classList.add('active');
        }
    });
};

// Auto-initialize when loaded
if (document.getElementById('header-placeholder')) {
    document.getElementById('header-placeholder').innerHTML = renderHeader();

    // Wait for DOM to be ready
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
