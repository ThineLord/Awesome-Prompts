// 简单的语言切换脚本，支持中英文
const langData = {
  zh: {
    home: '首页',
    prompts: '提示词',
    about: '关于',
    contact: '联系我们',
    settings: '设置',
    profile: '个人中心',
    search: '搜索提示词...',
    dark: '深色',
    light: '浅色',
    language: '语言',
    welcome: '欢迎来到AI提示词大全',
    desc: '收录最全、最优质的AI提示词，助你玩转各大AI平台。',
    popular: '热门推荐',
    allPrompts: '全部提示词',
    switchLang: '切换语言',
  },
  en: {
    home: 'Home',
    prompts: 'Prompts',
    about: 'About',
    contact: 'Contact',
    settings: 'Settings',
    profile: 'Profile',
    search: 'Search prompts...',
    dark: 'Dark',
    light: 'Light',
    language: 'Language',
    welcome: 'Welcome to AI Prompts Directory',
    desc: 'The most complete and high-quality AI prompts to help you master all major AI platforms.',
    popular: 'Popular',
    allPrompts: 'All Prompts',
    switchLang: 'Switch Language',
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  for (const key in langData[lang]) {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
      el.textContent = langData[lang][key];
    });
    document.querySelectorAll(`[placeholder-i18n="${key}"]`).forEach(el => {
      el.setAttribute('placeholder', langData[lang][key]);
    });
  }
}

function toggleLang() {
  const current = localStorage.getItem('lang') || 'zh';
  setLang(current === 'zh' ? 'en' : 'zh');
}

(function () {
  const saved = localStorage.getItem('lang') || 'zh';
  setLang(saved);
})(); 