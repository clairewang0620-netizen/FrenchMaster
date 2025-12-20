
import React, { useState, useMemo } from 'react';
import { ProficiencyLevel, VocabularyWord } from '../types';
import { speak } from '../services/ttsService';
import { addToStrengthenSet, markAsKnown, getKnownWords } from '../services/storageService';
import { STATIC_VOCABULARY } from '../data/vocabularyData';

type ViewMode = 'LIST' | 'CARD';

const VocabularyView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [level, setLevel] = useState<ProficiencyLevel>('A1');
  const [viewMode, setViewMode] = useState<ViewMode>('LIST');
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  
  const levels: ProficiencyLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

  const currentLevelWords = useMemo(() => STATIC_VOCABULARY[level] || [], [level]);
  const knownWords = useMemo(() => getKnownWords(), [level]);

  const handleWordClick = (index: number) => {
    setSelectedWordIndex(index);
    setViewMode('CARD');
  };

  const nextWord = () => {
    if (selectedWordIndex !== null && selectedWordIndex < currentLevelWords.length - 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
    }
  };

  const prevWord = () => {
    if (selectedWordIndex !== null && selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    }
  };

  const currentWord = selectedWordIndex !== null ? currentLevelWords[selectedWordIndex] : null;

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={viewMode === 'CARD' ? () => setViewMode('LIST') : onBack} 
            className="text-blue-600 flex items-center gap-1 font-semibold hover:bg-blue-50 px-2 py-1 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {viewMode === 'CARD' ? '返回列表' : '首页'}
          </button>
          <h1 className="text-xl font-bold text-slate-800">词汇学习 - {level}</h1>
        </div>
        
        {viewMode === 'LIST' && (
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {levels.map(l => (
              <button
                key={l}
                onClick={() => {
                  setLevel(l);
                  setSelectedWordIndex(null);
                }}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${level === l ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold text-slate-400 mb-1">
          <span>{level} 学习进度</span>
          <span>{knownWords.filter(w => currentLevelWords.some(cw => cw.word === w)).length} / {currentLevelWords.length} 词</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out" 
            style={{ width: `${(knownWords.filter(w => currentLevelWords.some(cw => cw.word === w)).length / currentLevelWords.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {viewMode === 'LIST' ? (
        <div className="space-y-2">
          {currentLevelWords.map((w, idx) => (
            <div 
              key={w.id} 
              onClick={() => handleWordClick(idx)}
              className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-6">
                <div className="flex flex-col min-w-[120px]">
                  <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{w.word}</span>
                  <span className="text-xs font-mono text-slate-400">{w.phonetic}</span>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); speak(w.word); }}
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#28a745] text-white rounded-full hover:bg-green-600 transition-colors shadow-sm"
                  title="播放发音"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                  </svg>
                </button>

                <span className="text-sm font-medium text-slate-600">{w.meaning}</span>
              </div>
              
              <div className="flex items-center">
                {knownWords.includes(w.word) && (
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">掌握</span>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-blue-400 transition-colors ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      ) : currentWord ? (
        <div className="animate-in slide-in-from-right-10 duration-500">
           {/* Flashcard Detail View */}
           <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100 min-h-[550px] flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-5xl font-black text-slate-900 mb-2 tracking-tight">{currentWord.word}</h2>
                  <p className="text-xl font-mono text-blue-500">{currentWord.phonetic}</p>
                </div>
                <button 
                  onClick={() => speak(currentWord.word)}
                  className="w-16 h-16 flex items-center justify-center bg-[#28a745] text-white rounded-2xl hover:bg-green-600 transition-all shadow-lg shadow-green-100 hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                  </svg>
                </button>
              </div>

              <div className="mb-10">
                <h3 className="text-3xl font-bold text-blue-600 border-b-4 border-blue-50 inline-block pb-1">{currentWord.meaning}</h3>
              </div>

              <div className="space-y-6 flex-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                   <span className="w-8 h-[2px] bg-slate-200"></span>
                   Exemples d'utilisation
                </h4>
                {currentWord.examples.map((ex, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors group/ex relative">
                    <div className="pr-12">
                      <p className="text-lg font-semibold text-slate-800 mb-1 leading-relaxed">{ex.sentence}</p>
                      {ex.ipa && (
                        <p className="text-xs font-mono text-slate-400 italic mb-2">[{ex.ipa}]</p>
                      )}
                      <p className="text-sm text-slate-500 font-medium">{ex.translation}</p>
                    </div>
                    <button 
                      onClick={() => speak(ex.sentence)}
                      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#28a745] text-white rounded-xl hover:bg-green-600 shadow-sm transition-all active:scale-90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex gap-4">
                 <button 
                   onClick={() => addToStrengthenSet(currentWord)}
                   className="flex-1 py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-colors border-2 border-red-100 flex items-center justify-center gap-2"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                   </svg>
                   加入强化库
                 </button>
                 <button 
                   onClick={() => markAsKnown(currentWord.word)}
                   className="flex-1 py-4 bg-emerald-50 text-emerald-600 rounded-2xl font-bold hover:bg-emerald-100 transition-colors border-2 border-emerald-100 flex items-center justify-center gap-2"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   掌握此词
                 </button>
              </div>
           </div>

           {/* Navigation Controls */}
           <div className="mt-8 flex gap-4">
              <button 
                onClick={prevWord} 
                disabled={selectedWordIndex === 0} 
                className="flex-1 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50 disabled:opacity-30 font-bold transition-all shadow-sm"
              >
                ← 上一个
              </button>
              <button 
                onClick={nextWord} 
                disabled={selectedWordIndex === currentLevelWords.length - 1} 
                className="flex-1 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 disabled:opacity-30 font-bold shadow-lg shadow-blue-100 transition-all"
              >
                下一个 →
              </button>
           </div>
        </div>
      ) : null}
    </div>
  );
};

export default VocabularyView;
