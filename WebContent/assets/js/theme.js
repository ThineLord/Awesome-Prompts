// 主题切换脚本，支持明暗模式和本地存储
function setTheme(theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
})(); 