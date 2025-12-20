
import React, { useState, useMemo } from 'react';
import { STATIC_CONVERSATIONS } from '../data/conversationData';
import { speak } from '../services/ttsService';

const DailyConversationView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const categories = Object.keys(STATIC_CONVERSATIONS);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const sentences = useMemo(() => STATIC_CONVERSATIONS[activeCategory] || [], [activeCategory]);

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-slate-800">日常口语会话</h1>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === cat 
                ? 'bg-amber-600 text-white shadow-lg ring-2 ring-amber-100' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'Self Introduction' ? '自我介绍' : 
             cat === 'Transportation' ? '交通出行' : 
             cat === 'Restaurant & Café' ? '餐饮' : 
             cat === 'Travel & Hotel' ? '旅行住宿' : 
             cat === 'Emergency Situations' ? '紧急情况' : '社交互动'}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {sentences.map((s, index) => (
          <div 
            key={s.id} 
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg text-slate-400 font-mono text-xs font-bold">
              {index + 1}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1 leading-snug">
                {s.sentence}
              </h3>
              <p className="text-xs text-slate-400 font-mono italic mb-2">
                {s.phonetic}
              </p>
              <p className="text-sm text-slate-600 font-medium">
                {s.meaning}
              </p>
            </div>
            <button 
              onClick={() => speak(s.sentence)}
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-100 active:scale-95"
              title="播放法语发音"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.414 0A5.982 5.982 0 0115 10a5.982 5.982 0 01-1.757 4.243 1 1 0 01-1.414-1.414A3.981 3.981 0 0013 10c0-1.104-.448-2.104-1.172-2.828a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyConversationView;
