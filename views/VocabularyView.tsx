import React, { useState, useMemo } from 'react';
import { ProficiencyLevel, VocabularyWord, VocabularyCategory } from '../types';
import { speak } from '../services/ttsService';
import { addToStrengthenSet, markAsKnown, getKnownWords } from '../services/storageService';
import { STATIC_VOCABULARY } from '../data/vocabularyData';

type ViewMode = 'LIST' | 'CARD';
type FilterDimension = 'LEVEL' | 'CATEGORY';

const VocabularyView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [dimension, setDimension] = useState<FilterDimension>('LEVEL');
  const [level, setLevel] = useState<ProficiencyLevel>('A1');
  const [category, setCategory] = useState<VocabularyCategory>('情绪类');
  const [viewMode, setViewMode] = useState<ViewMode>('LIST');
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  
  const levels: ProficiencyLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const categories: VocabularyCategory[] = ['情绪类', '日常生活类', '食物类', '时间类', '其他类'];

  // Cross-level or level-specific word collection
  const filteredWords = useMemo(() => {
    if (dimension === 'LEVEL') {
      return STATIC_VOCABULARY[level] || [];
    } else {
      // Aggregate from all levels for a category with defensive check
      return levels.flatMap(l => (STATIC_VOCABULARY[l] || []).filter(w => w.category === category));
    }
  }, [dimension, level, category]);

  const knownWords = useMemo(() => getKnownWords(), [level, category, dimension]);

  const handleWordClick = (index: number) => {
    setSelectedWordIndex(index);
    setViewMode('CARD');
  };

  const nextWord = () => {
    if (selectedWordIndex !== null && selectedWordIndex < filteredWords.length - 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
    }
  };

  const prevWord = () => {
    if (selectedWordIndex !== null && selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    }
  };

  const currentWord = selectedWordIndex !== null ? filteredWords[selectedWordIndex] : null;

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={viewMode === 'CARD' ? () => setViewMode('LIST') : onBack} 
            className="text-blue-600 flex items-center gap-1 font-semibold hover:bg-blue-50 px-2 py-1 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {viewMode === 'CARD' ? '返回列表' : '首页'}
          </button>
          <h1 className="text-xl font-black text-slate-800">
            {dimension === 'LEVEL' ? `词汇学习 - ${level}` : `主题词汇 - ${category}`}
          </h1>
        </div>
        
        {viewMode === 'LIST' && (
          <div className="space-y-3">
            <div className="flex bg-slate-200/50 p-1 rounded-xl w-fit">
              <button 
                onClick={() => setDimension('LEVEL')}
                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${dimension === 'LEVEL' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
              >
                按等级
              </button>
              <button 
                onClick={() => setDimension('CATEGORY')}
                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${dimension === 'CATEGORY' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
              >
                按分类
              </button>
            </div>

            <div className="flex overflow-x-auto pb-1 gap-2 no-scrollbar">
              {dimension === 'LEVEL' ? (
                levels.map(l => (
                  <button
                    key={l}
                    onClick={() => { setLevel(l); setSelectedWordIndex(null); }}
                    className={`flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold transition-all ${level === l ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-100' : 'bg-white text-slate-500 border border-slate-200'}`}
                  >
                    {l}
                  </button>
                ))
              ) : (
                categories.map(c => (
                  <button
                    key={c}
                    onClick={() => { setCategory(c); setSelectedWordIndex(null); }}
                    className={`flex-shrink-0 px-5 py-2 rounded-xl text-sm font-bold transition-all ${category === c ? (c === '时间类' ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-100' : 'bg-teal-600 text-white shadow-lg ring-2 ring-teal-100') : 'bg-white text-slate-500 border border-slate-200'}`}
                  >
                    {c}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold text-slate-400 mb-1">
          <span>{dimension === 'LEVEL' ? level : category} 掌握情况</span>
          <span>{knownWords.filter(w => filteredWords.some(fw => fw.word === w)).length} / {filteredWords.length} 词</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ease-out ${dimension === 'LEVEL' ? 'bg-blue-500' : 'bg-teal-500'}`} 
            style={{ width: `${filteredWords.length > 0 ? (knownWords.filter(w => filteredWords.some(fw => fw.word === w)).length / filteredWords.length) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      {viewMode === 'LIST' ? (
        <div className="space-y-2">
          {filteredWords.map((w, idx) => (
            <div 
              key={w.id} 
              onClick={() => handleWordClick(idx)}
              className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex flex-col min-w-[100px]">
                  <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{w.word}</span>
                  <span className="text-[10px] font-mono text-slate-400">{w.phonetic}</span>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); speak(w.word); }}
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#28a745]/10 text-[#28a745] rounded-full hover:bg-[#28a745] hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                  </svg>
                </button>

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-700">{w.meaning}</span>
                  {dimension === 'CATEGORY' && (
                    <span className="text-[9px] font-black text-blue-500 uppercase">Niveau {w.level}</span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase ${
                  w.category === '情绪类' ? 'bg-rose-50 text-rose-500' :
                  w.category === '食物类' ? 'bg-orange-50 text-orange-500' :
                  w.category === '日常生活类' ? 'bg-blue-50 text-blue-500' :
                  w.category === '时间类' ? 'bg-indigo-50 text-indigo-500' :
                  'bg-slate-50 text-slate-500'
                }`}>
                  {w.category.replace('类', '')}
                </span>
                {knownWords.includes(w.word) && (
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">掌握</span>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300 group-hover:text-blue-400 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
          {filteredWords.length === 0 && (
            <div className="py-20 text-center text-slate-400 font-medium bg-white rounded-2xl border-2 border-dashed">
              该分类下暂无词汇
            </div>
          )}
        </div>
      ) : currentWord ? (
        <div className="animate-in slide-in-from-right-10 duration-500">
           {/* Flashcard Detail View */}
           <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100 min-h-[550px] flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded uppercase">{currentWord.level}</span>
                    <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] font-black rounded uppercase">{currentWord.category}</span>
                  </div>
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
                        <p className="text-xs font-mono text-slate-400 italic mb-2">{ex.ipa}</p>
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

              {/* Added missing navigation controls and closed tags */}
              <div className="mt-10 flex items-center justify-between gap-4">
                 <button 
                  onClick={prevWord}
                  disabled={selectedWordIndex === 0}
                  className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold disabled:opacity-30 transition-all hover:bg-slate-200"
                >
                  上一个
                </button>
                <button 
                  onClick={() => addToStrengthenSet(currentWord)}
                  className="w-14 h-14 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-2xl hover:bg-indigo-100 transition-all"
                  title="加入强化库"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button 
                  onClick={() => { markAsKnown(currentWord.word); nextWord(); }}
                  className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
                >
                  掌握并下一个
                </button>
                <button 
                  onClick={nextWord}
                  disabled={selectedWordIndex === filteredWords.length - 1}
                  className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold disabled:opacity-30 transition-all hover:bg-slate-200"
                >
                  跳过
                </button>
              </div>
           </div>
        </div>
      ) : null}
    </div>
  );
};

// Fixed missing default export
export default VocabularyView;