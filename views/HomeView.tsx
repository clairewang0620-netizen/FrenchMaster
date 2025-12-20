
import React from 'react';
import { AppRoute } from '../types';
import { clearAccess } from '../services/storageService';

interface HomeViewProps {
  onNavigate: (route: AppRoute) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const mainModules = [
    { id: AppRoute.VOCABULARY, title: '单词 • Vocabulaire', icon: '📚', desc: 'A1-C1 核心词汇，分级突破', color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { id: AppRoute.DAILY_CONVERSATION, title: '日常口语 • Conversation', icon: '🗨️', desc: '300 句实用会话，涵盖 6 大场景', color: 'bg-amber-50 text-amber-700 border-amber-100' },
    { id: AppRoute.GRAMMAR, title: '语法 • Grammaire', icon: '✍️', desc: '结构化语法体系，循序渐进', color: 'bg-purple-50 text-purple-700 border-purple-100' },
    { id: AppRoute.READING, title: '精选阅读 • Lecture Sélectionnée', icon: '📖', desc: '深度美文，提升语感与词汇', color: 'bg-teal-50 text-teal-700 border-teal-100' },
    { id: AppRoute.DICTATION, title: '听写测试 • Dictée', icon: '🎧', desc: '强化记忆，精准掌握拼写', color: 'bg-orange-50 text-orange-700 border-orange-100' },
    { id: AppRoute.TEST, title: '测试 • Test', icon: '🎓', desc: '多维测评，检验学习成果', color: 'bg-red-50 text-red-700 border-red-100' },
  ];

  const memoryModule = {
    id: AppRoute.MISTAKES,
    title: '强化记忆 • Révision',
    icon: '🧠',
    desc: '集合听写错词、测试错题及个人强化词汇',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
  };

  const handleLogout = () => {
    if (confirm('确定要清除访问授权吗？清除后需重新输入访问码。')) {
      clearAccess();
      window.location.reload();
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Bonjour, 轻松学法语
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          您的专属法语学习工坊。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {mainModules.map((m) => (
          <button
            key={m.id}
            onClick={() => onNavigate(m.id)}
            className={`flex items-start p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group text-left ${m.color}`}
          >
            <span className="text-4xl mr-4 group-hover:rotate-12 transition-transform">
              {m.icon}
            </span>
            <div>
              <h3 className="text-xl font-bold mb-1">{m.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{m.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-4 px-2">记忆工坊</h2>
        <button
          onClick={() => onNavigate(memoryModule.id)}
          className={`w-full flex items-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group text-left ${memoryModule.color}`}
        >
          <span className="text-5xl mr-6 group-hover:scale-110 transition-transform">
            {memoryModule.icon}
          </span>
          <div className="flex-1">
            <h3 className="text-2xl font-black mb-1">{memoryModule.title}</h3>
            <p className="text-slate-600 font-medium">{memoryModule.desc}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <footer className="text-center py-8 opacity-40 hover:opacity-100 transition-opacity">
        <button 
          onClick={handleLogout}
          className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-500 transition-colors"
        >
          安全退出授权 · Logout Session
        </button>
      </footer>
    </div>
  );
};

export default HomeView;
