document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.body.style.cursor = 'none';

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 18}px`;
    cursor.style.top = `${e.clientY - 18}px`;
  });

  // 监听html的class变化，切换光标的dark/light类
  const updateCursorTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      cursor.classList.add('dark');
      cursor.classList.remove('light');
    } else {
      cursor.classList.add('light');
      cursor.classList.remove('dark');
    }
  };
  // 初始设置
  updateCursorTheme();
  // 监听class变化
  const observer = new MutationObserver(updateCursorTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}); 