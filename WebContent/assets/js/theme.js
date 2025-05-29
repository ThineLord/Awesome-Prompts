// 主题切换脚本，支持明暗模式和本地存储
function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (document.documentElement.classList.contains('dark')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '🌞';
  }
}

function setTheme(theme) {
  // 只保留.dark或.light，移除所有其他class
  document.documentElement.className = theme === 'dark' ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
}

(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
  updateThemeIcon();
})(); 