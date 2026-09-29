(() => {
  const key = 'security-plus-theme';
  let theme = 'dark';
  try { theme = localStorage.getItem(key) === 'light' ? 'light' : 'dark'; } catch (_) {}
  function apply() {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101322' : '#f6f7fc');
    const button = document.getElementById('themeToggle');
    if (button) {
      button.textContent = theme === 'dark' ? 'Light theme' : 'Dark theme';
      button.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme');
    }
  }
  apply();
  window.addEventListener('DOMContentLoaded', () => {
    apply();
    document.getElementById('themeToggle').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, theme); } catch (_) {}
      apply();
    });
  });
})();
