import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './designSystem.css'
import { prompts as mockPrompts } from './data/prompts.mock'

// BaseContent 下所有 app 目录
const allApps = [
  'ChatGPT', 'Claude', 'Midjourney', 'DALL-E', 'NotionAI', 'Tiangong', 'Veo3', 'Gemini', 'Cursor', 'Copilot', 'Jasper', 'Grok', 'StableDiffusion', 'Trea', 'Example:示例'
];
const apps = allApps.map(app => ({ id: app, name: app }));

function App() {
  const [selectedApp, setSelectedApp] = useState(apps[0].id)
  const [selectedPrompt, setSelectedPrompt] = useState(null)

  const filteredPrompts = mockPrompts.filter(p => p.app === selectedApp)

  return (
    <div className="flex h-screen bg-black text-green-400">
      {/* 侧边栏 */}
      <aside className="w-36 border-r border-green-400 bg-black flex flex-col ascii-box">
        <div className="p-4 font-bold text-xl border-b border-green-400">App 列表</div>
        <nav className="flex-1 overflow-y-auto">
          {apps.map(app => (
            <button
              key={app.id}
              className={`w-full text-left px-4 py-2 border-b border-green-400 hover:bg-green-900 button-crt ${selectedApp === app.id ? 'bg-green-950 font-bold' : ''}`}
              onClick={() => { setSelectedApp(app.id); setSelectedPrompt(null); }}
            >
              <span className="truncate block max-w-full">{app.name}</span>
            </button>
          ))}
        </nav>
      </aside>
      {/* 主内容区 */}
      <main className="flex-1 flex flex-col">
        <header className="p-4 border-b border-green-400 font-bold text-xl bg-black ascii-box">Prompt 管理</header>
        <div className="flex-1 flex overflow-hidden">
          {/* Prompt 列表 */}
          <section className="w-96 border-r border-green-400 overflow-y-auto ascii-box">
            <div className="p-2 border-b border-green-400 font-semibold">Prompts</div>
            {filteredPrompts.length === 0 && <div className="p-4 text-green-700">暂无 Prompt</div>}
            {filteredPrompts.map(prompt => (
              <button
                key={prompt.file + prompt.lang}
                className={`block w-full text-left px-4 py-2 border-b border-dashed border-green-400 hover:bg-green-900 button-crt ${selectedPrompt?.file === prompt.file && selectedPrompt?.lang === prompt.lang ? 'bg-green-950 font-bold' : ''}`}
                onClick={() => setSelectedPrompt(prompt)}
              >
                {prompt.title} <span className="text-xs text-green-700 ml-2">[{prompt.lang}]</span>
              </button>
            ))}
          </section>
          {/* Prompt 详情 */}
          <section className="flex-1 p-8 overflow-y-auto ascii-box">
            {selectedPrompt ? (
              <div className="border border-green-400 rounded p-6 bg-black shadow-sm ascii-box">
                <div className="font-bold text-lg mb-2">{selectedPrompt.title}</div>
                <div className="text-green-700 mb-2">App: {selectedPrompt.app} | 语言: {selectedPrompt.lang}</div>
                <div className="mb-2"><span className="font-bold">描述：</span>{selectedPrompt.description}</div>
                <div className="mb-2"><span className="font-bold">Prompt：</span><pre className="whitespace-pre-wrap break-words bg-black p-2 rounded ascii-box">{selectedPrompt.prompt}</pre></div>
                <div className="mb-2"><span className="font-bold">Notes：</span>{selectedPrompt.notes}</div>
                <div className="mb-2"><span className="font-bold">来源：</span><a href={selectedPrompt.source} className="underline text-green-400" target="_blank" rel="noopener noreferrer">{selectedPrompt.source}</a></div>
                <div className="mb-2 text-xs text-green-700">文件：{selectedPrompt.file}</div>
              </div>
            ) : (
              <div className="text-green-700">请选择一个 Prompt 查看详情</div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
