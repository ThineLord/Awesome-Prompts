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
    welcome: '欢迎来到<span class="neon-logo">Awesome Prompts</span>',
    desc: '本项目致力于收集和整理各大AI平台的优质提示词',
    popular: '热门推荐',
    allPrompts: '全部提示词',
    switchLang: '切换语言',
    allCategories: '全部分类',
    chatgpt: 'ChatGPT',
    claude: 'Claude',
    midjourney: 'Midjourney',
    dalle: 'DALL-E',
    notionai: 'NotionAI',
    tiangong: 'Tiangong',
    veo3: 'Veo3',
    gemini: 'Gemini',
    cursor: 'Cursor',
    copilot: 'Copilot',
    jasper: 'Jasper',
    grok: 'Grok',
    stablediffusion: 'StableDiffusion',
    trea: 'Trea',
    example: '示例',
    category: '分类',
    themeMode: '明暗模式',
    switch: '切换',
    contributors: '贡献者',
    initiator: '项目发起人',
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
    welcome: 'Welcome to <span class="neon-logo">Awesome Prompts</span>',
    desc: 'This project is dedicated to collecting and organizing high-quality prompts for major AI platforms.',
    popular: 'Popular',
    allPrompts: 'All Prompts',
    switchLang: 'Switch Language',
    allCategories: 'All Categories',
    chatgpt: 'ChatGPT',
    claude: 'Claude',
    midjourney: 'Midjourney',
    dalle: 'DALL-E',
    notionai: 'NotionAI',
    tiangong: 'Tiangong',
    veo3: 'Veo3',
    gemini: 'Gemini',
    cursor: 'Cursor',
    copilot: 'Copilot',
    jasper: 'Jasper',
    grok: 'Grok',
    stablediffusion: 'StableDiffusion',
    trea: 'Trea',
    example: 'Example',
    category: 'Category',
    themeMode: 'Theme Mode',
    switch: 'Switch',
    contributors: 'Contributors',
    initiator: 'Initiator',
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  for (const key in langData[lang]) {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
      if (key === 'welcome') {
        el.innerHTML = langData[lang][key];
      } else {
        el.textContent = langData[lang][key];
      }
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