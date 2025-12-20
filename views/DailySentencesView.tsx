
import React, { useState, useEffect } from 'react';
import { DailySentence } from '../types';
import { generateDailySentences } from '../services/geminiService';
import { speak } from '../services/ttsService';

const DailySentencesView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const categories = [
    { id: 'self-intro', label: '自我介绍' },
    { id: 'daily-life', label: '日常生活' },
    { id: 'transport', label: '交通出行' },
    { id: 'food', label: '美食餐饮' },
    { id: 'emergency', label: '紧急情况' },
  ];

  const [category, setCategory] = useState(categories[0].id);
  const [sentences, setSentences] = useState<DailySentence[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSentences = async (cat: string) => {
    setLoading(true);
    try {
      const data = await generateDailySentences(cat);
      setSentences(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSentences(category);
  }, [category]);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4 no-scrollbar">
        <button onClick={onBack} className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full text-slate-600">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
           </svg>
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${category === cat.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-4">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-24 bg-white rounded-2xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {sentences.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{s.sentence}</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1 mb-2">{s.phonetic}</p>
                  <p className="text-sm text-slate-600 font-medium">{s.meaning}</p>
                </div>
                <button 
                  onClick={() => speak(s.sentence)}
                  className="flex-shrink-0 p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailySentencesView;
