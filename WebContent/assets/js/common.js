// 主题和语言切换功能
function initThemeAndLang() {
    // 初始化主题
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    
    // 初始化语言
    const currentLang = localStorage.getItem('language') || 'en';
    
    // 更新主题切换按钮
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.onclick = function() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeUI();
        };
    }
    
    // 更新语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.onclick = function() {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            localStorage.setItem('language', newLang);
            updateLangUI();
        };
    }
    
    // 初始化UI
    updateThemeUI();
    updateLangUI();
}

// 更新主题UI
function updateThemeUI() {
    const isDark = document.documentElement.classList.contains('dark');
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i><span>浅色模式</span>' : 
            '<i class="fas fa-moon"></i><span>深色模式</span>';
    }
}

// 更新语言UI
function updateLangUI() {
    const currentLang = localStorage.getItem('language') || 'en';
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = currentLang === 'en' ? 
            '<i class="fas fa-globe"></i><span>English</span>' : 
            '<i class="fas fa-globe"></i><span>中文</span>';
    }
}

// 侧边栏功能
function initSidebar() {
    const avatarButton = document.getElementById('avatarButton');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (avatarButton && sidebar && overlay) {
        // 打开侧边栏
        avatarButton.onclick = function() {
            sidebar.classList.add('open');
            overlay.classList.add('visible');
        };
        
        // 关闭侧边栏
        overlay.onclick = function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        };
    }
}

// 页面加载完成后初始化所有功能
window.onload = function() {
    initThemeAndLang();
    initSidebar();
}; 