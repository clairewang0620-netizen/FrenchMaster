
import React, { useState, useMemo } from 'react';
import { AppRoute, VocabularyWord, ExamQuestion, ErrorBookItem } from '../types';
import { getErrorBook, getWrongAnswers, getStrengthenSet, removeFromStrengthenSet } from '../services/storageService';
import { speak } from '../services/ttsService';

type MemoryTab = 'SPELLING' | 'TESTS' | 'STRENGTHEN';

const MistakesView: React.FC<{ onBack: () => void, onNavigate: (route: AppRoute) => void }> = ({ onBack, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<MemoryTab>('SPELLING');
  
  const dictationMistakes = useMemo(() => getErrorBook(), []);
  const testMistakes = useMemo(() => getWrongAnswers(), []);
  const strengthenWords = useMemo(() => getStrengthenSet(), []);

  const handleClearStrengthen = (word: string) => {
    removeFromStrengthenSet(word);
    window.location.reload(); // Quick refresh to update state
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-2xl font-black text-slate-800">强化记忆工坊</h1>
      </div>

      <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
        <button 
          onClick={() => setActiveTab('SPELLING')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex flex-col items-center gap-1 ${activeTab === 'SPELLING' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500'}`}
        >
          <span>听写错词</span>
          <span className="text-[10px] px-2 py-0.5 bg-orange-100 rounded-full">{dictationMistakes.length}</span>
        </button>
        <button 
          onClick={() => setActiveTab('TESTS')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex flex-col items-center gap-1 ${activeTab === 'TESTS' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-500'}`}
        >
          <span>测试错题</span>
          <span className="text-[10px] px-2 py-0.5 bg-red-100 rounded-full">{testMistakes.length}</span>
        </button>
        <button 
          onClick={() => setActiveTab('STRENGTHEN')}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex flex-col items-center gap-1 ${activeTab === 'STRENGTHEN' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
        >
          <span>强化词汇</span>
          <span className="text-[10px] px-2 py-0.5 bg-indigo-100 rounded-full">{strengthenWords.length}</span>
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'SPELLING' && (
          <>
            {dictationMistakes.length > 0 ? (
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate(AppRoute.DICTATION)}
                  className="w-full py-4 bg-orange-600 text-white rounded-2xl font-bold shadow-lg hover:bg-orange-700 transition-all mb-4"
                >
                  去错题集重新听写
                </button>
                {dictationMistakes.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">{item.word.word}</h3>
                      <p className="text-sm font-mono text-slate-400 italic mb-1">{item.word.phonetic}</p>
                      <p className="text-slate-600 font-bold">{item.word.meaning}</p>
                      <div className="mt-2 flex gap-2">
                        <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded">错误: {item.errorCount}次</span>
                        <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">连对: {item.correctStreak}/3</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => speak(item.word.word)}
                      className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-bold">暂无听写错词</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'TESTS' && (
          <>
            {testMistakes.length > 0 ? (
              <div className="space-y-6">
                {testMistakes.map((q: ExamQuestion, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-black rounded uppercase">Niveau {q.level}</span>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{q.type.replace('_', ' ')}</span>
                      </div>
                      <span className="text-[10px] text-slate-300 font-mono">{new Date(q.date!).toLocaleDateString()}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-relaxed">{q.question}</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100">
                        <span className="text-[10px] font-black uppercase block mb-1 opacity-60">你的回答</span>
                        <p className="font-bold">{q.selectedAnswer || "(未填写)"}</p>
                      </div>
                      <div className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                        <span className="text-[10px] font-black uppercase block mb-1 opacity-60">正确答案</span>
                        <p className="font-bold">{q.answer}</p>
                      </div>
                    </div>

                    {q.detailedExplanation ? (
                      <div className="space-y-4 pt-4 border-t border-slate-100">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            详细解析
                          </span>
                          <p className="text-slate-600 text-sm leading-relaxed">{q.detailedExplanation.analysis}</p>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/50">
                           <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">重点考察</span>
                           <p className="text-slate-700 text-sm font-semibold">{q.detailedExplanation.grammarPoint}</p>
                        </div>

                        <div className="bg-indigo-900 text-white p-5 rounded-2xl relative">
                           <span className="text-[10px] font-black text-indigo-400 uppercase block mb-2">复习例句</span>
                           <p className="text-lg font-bold pr-12">{q.detailedExplanation.example.fr}</p>
                           <p className="text-xs text-indigo-200 mt-1">{q.detailedExplanation.example.zh}</p>
                           <button 
                             onClick={() => speak(q.detailedExplanation!.example.fr)}
                             className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all active:scale-90"
                           >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                             </svg>
                           </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 leading-relaxed border border-slate-100">
                        <span className="font-black text-slate-400 block mb-1">解析:</span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-bold">暂无测试错题</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'STRENGTHEN' && (
          <>
            {strengthenWords.length > 0 ? (
              <div className="grid grid-cols-1 gap-3">
                {strengthenWords.map((word, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{word.word}</h3>
                        <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-500 text-[9px] font-black rounded uppercase">{word.level}</span>
                      </div>
                      <p className="text-sm font-mono text-slate-400 italic mb-1">{word.phonetic}</p>
                      <p className="text-slate-600 font-bold">{word.meaning}</p>
                    </div>
                    <div className="flex items-center gap-2">
                       <button 
                        onClick={() => speak(word.word)}
                        className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleClearStrengthen(word.word)}
                        className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"
                        title="移出强化库"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-bold">暂无强化词汇</p>
                <button onClick={() => onNavigate(AppRoute.VOCABULARY)} className="mt-4 text-indigo-600 font-bold hover:underline">去词库添加单词</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MistakesView;
