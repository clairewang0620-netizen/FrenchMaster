
import React, { useState, useEffect, useMemo } from 'react';
import { VocabularyWord, ErrorBookItem } from '../types';
import { STATIC_VOCABULARY } from '../data/vocabularyData';
import { speak } from '../services/ttsService';
import { manualAddToErrorBook, updateErrorBookStreak, getErrorBook } from '../services/storageService';

type DictationMode = 'NORMAL' | 'ERROR_BOOK';

const DictationView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [mode, setMode] = useState<DictationMode>('NORMAL');
  const [addedToErrorBook, setAddedToErrorBook] = useState<Record<string, boolean>>({});
  
  const allWords = useMemo(() => {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1'] as const;
    return levels.flatMap(level => STATIC_VOCABULARY[level]);
  }, []);

  const groups = useMemo(() => {
    const result = [];
    for (let i = 0; i < allWords.length; i += 20) {
      result.push(allWords.slice(i, i + 20));
    }
    return result;
  }, [allWords]);

  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const errorBook = useMemo(() => getErrorBook(), [isFinished, mode, addedToErrorBook]);
  const errorBookWords = useMemo(() => errorBook.map(item => item.word), [errorBook]);

  const currentGroup = useMemo(() => {
    if (mode === 'ERROR_BOOK') return errorBookWords;
    return selectedGroupIndex !== null ? groups[selectedGroupIndex] : null;
  }, [mode, selectedGroupIndex, groups, errorBookWords]);

  const currentWord = currentGroup ? currentGroup[currentIndex] : null;

  const handlePlayWord = () => {
    if (currentWord) speak(currentWord.word);
  };

  const handleSubmit = () => {
    if (userInput.trim() === '' || !currentWord) return;
    setIsSubmitted(true);
    
    const isCorrect = userInput.trim().toLowerCase() === currentWord.word.toLowerCase();
    
    if (mode === 'ERROR_BOOK') {
      updateErrorBookStreak(currentWord, isCorrect);
    }
  };

  const handleAddToErrorBook = () => {
    if (currentWord) {
      manualAddToErrorBook(currentWord);
      setAddedToErrorBook(prev => ({ ...prev, [currentWord.word]: true }));
    }
  };

  const handleNext = () => {
    if (currentGroup && currentIndex < currentGroup.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserInput('');
      setIsSubmitted(false);
      setShowHint(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleBackToMenu = () => {
    setSelectedGroupIndex(null);
    setCurrentIndex(0);
    setUserInput('');
    setIsSubmitted(false);
    setIsFinished(false);
    setShowHint(false);
    setMode('NORMAL');
    setAddedToErrorBook({});
  };

  if (selectedGroupIndex === null && mode === 'NORMAL') {
    return (
      <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-slate-800">听写测试 (Dictation)</h1>
          </div>
          <button 
            onClick={() => { setMode('ERROR_BOOK'); setSelectedGroupIndex(0); }}
            disabled={errorBook.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl font-bold border border-red-100 hover:bg-red-100 transition-all disabled:opacity-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            错题集 ({errorBook.length})
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {groups.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedGroupIndex(idx)}
              className="p-6 bg-white border-2 border-slate-100 rounded-2xl text-left hover:border-[#4CAF50] hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Dictation Group {idx + 1}</h3>
                  <p className="text-sm text-slate-400 font-medium">包含 20 个核心词汇</p>
                </div>
                <span className="text-[#4CAF50] font-bold opacity-0 group-hover:opacity-100 transition-opacity">开始 →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="max-w-md mx-auto text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-2xl animate-in zoom-in duration-500">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">{mode === 'ERROR_BOOK' ? '复习完成！' : '听写完成！'}</h2>
        <p className="text-slate-500 mb-8 px-6">
          {mode === 'ERROR_BOOK' ? `您已复习完当前错题。` : `您已完成 Group ${selectedGroupIndex! + 1} 的全部测试。`}
        </p>
        <div className="flex flex-col gap-3 px-8">
          <button onClick={handleBackToMenu} className="w-full py-4 bg-[#4CAF50] text-white rounded-2xl font-bold text-[15px] hover:bg-[#43a047] transition-colors shadow-lg">
            返回菜单
          </button>
          <button onClick={onBack} className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold text-[15px] hover:bg-slate-200 transition-colors">
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = userInput.trim().toLowerCase() === currentWord?.word.toLowerCase();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center animate-in fade-in duration-500 bg-[#f9f9f9] -mx-4 px-4 py-10 rounded-[3rem]">
      <div className="w-full max-w-xl">
        <div className="mb-8 flex items-center justify-between">
          <button onClick={handleBackToMenu} className="text-slate-600 font-bold flex items-center gap-1 text-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            退出
          </button>
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest ${mode === 'ERROR_BOOK' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
            {mode === 'ERROR_BOOK' ? 'ERROR BOOK' : `GROUP ${selectedGroupIndex! + 1}`} • {currentIndex + 1} / {currentGroup?.length}
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_2px_6px_rgba(0,0,0,0.1)] border border-slate-100 text-center space-y-8">
          <div className="space-y-4">
            <button 
              onClick={handlePlayWord}
              className={`w-32 h-32 text-white rounded-full hover:scale-105 transition-all flex items-center justify-center mx-auto shadow-xl ring-8 active:scale-95 group ${mode === 'ERROR_BOOK' ? 'bg-red-500 ring-red-50' : 'bg-[#4CAF50] ring-green-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <input
              autoFocus
              disabled={isSubmitted}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (isSubmitted ? handleNext() : handleSubmit())}
              placeholder="在此拼写单词..."
              className={`w-full p-5 rounded-2xl border-2 text-center text-2xl font-bold transition-all outline-none ${
                !isSubmitted ? 'border-slate-200 focus:border-[#4CAF50] bg-slate-50' :
                isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700'
              }`}
            />
            {!isSubmitted && (
              <div className="h-10">
                {showHint ? (
                  <div className="animate-in fade-in duration-300">
                    <span className="text-sm font-bold text-slate-500 px-3 py-1 bg-slate-100 rounded-lg">提示: {currentWord?.meaning}</span>
                  </div>
                ) : (
                  <button onClick={() => setShowHint(true)} className="text-xs font-bold text-slate-400 hover:text-[#4CAF50] underline decoration-dotted transition-colors">显示中文提示词</button>
                )}
              </div>
            )}
          </div>

          {isSubmitted && currentWord && (
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-3">
                   <span className="text-3xl font-black text-slate-900">{currentWord.word}</span>
                   <button onClick={handlePlayWord} className="p-2 bg-white rounded-full shadow-sm text-slate-500 hover:text-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                   </button>
                </div>
                <p className="text-lg font-mono text-slate-400 italic">{currentWord.phonetic}</p>
                <div className="h-px bg-slate-200 w-12 mx-auto my-1"></div>
                <p className="text-xl font-bold text-slate-600">{currentWord.meaning}</p>
                
                {!isCorrect && mode === 'NORMAL' && !addedToErrorBook[currentWord.word] && (
                  <button 
                    onClick={handleAddToErrorBook}
                    className="mt-4 py-2 px-4 bg-white border border-red-200 text-red-600 rounded-xl text-xs font-black hover:bg-red-50 transition-all flex items-center justify-center gap-2 mx-auto shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    加入错题集
                  </button>
                )}
                {(addedToErrorBook[currentWord.word] || (mode === 'ERROR_BOOK' && errorBook.find(i => i.word.word === currentWord.word))) && (
                  <p className="mt-4 text-xs font-bold text-emerald-600">已在错题集中 ✓</p>
                )}
                {mode === 'ERROR_BOOK' && (
                  <p className="text-[10px] text-slate-400 mt-1 font-bold">连续正确 3 次后自动移出 (当前: {errorBook.find(i => i.word.word === currentWord.word)?.correctStreak || 0}/3)</p>
                )}
              </div>
            </div>
          )}

          <div className="pt-4">
            {!isSubmitted ? (
              <button disabled={userInput.trim() === ''} onClick={handleSubmit} className="w-full py-5 bg-[#4CAF50] text-white rounded-2xl font-bold text-[15px] hover:bg-[#43a047] shadow-xl transition-all">提交答案</button>
            ) : (
              <button onClick={handleNext} className={`w-full py-5 text-white rounded-2xl font-bold text-[15px] shadow-xl transition-all ${mode === 'ERROR_BOOK' ? 'bg-red-600 hover:bg-red-700' : 'bg-[#4CAF50] hover:bg-[#43a047]'}`}>
                {currentIndex === currentGroup!.length - 1 ? '完成本轮' : '下一个单词'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictationView;