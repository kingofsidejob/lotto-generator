class NavigationController {
  constructor() {
    this.tabs = document.querySelectorAll('.nav-tab');
    this.tabContents = document.querySelectorAll('.tab-content');
    this.initEventListeners();
    this.loadSavedTab();
  }

  initEventListeners() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        this.switchTab(tabName);
      });
    });
  }

  switchTab(tabName) {
    // Update tab buttons
    this.tabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === tabName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update tab contents
    this.tabContents.forEach(content => {
      if (content.id === `${tabName}-tab`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    // Save to localStorage
    localStorage.setItem('activeTab', tabName);
  }

  loadSavedTab() {
    const savedTab = localStorage.getItem('activeTab') || 'lotto';
    this.switchTab(savedTab);
  }
}

export const initNavigation = () => {
  new NavigationController();
};
