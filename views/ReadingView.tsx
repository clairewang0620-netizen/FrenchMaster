
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ProficiencyLevel, ReadingArticle, ReadingParagraph } from '../types';
import { STATIC_READING } from '../data/readingData';
import { speak, pauseSpeech, resumeSpeech, stopSpeech } from '../services/ttsService';

const ReadingView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [level, setLevel] = useState<ProficiencyLevel>('A1');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  
  // Playback States
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeParagraphIndex, setActiveParagraphIndex] = useState<number | null>(null);
  
  // UI States
  const [showAllZh, setShowAllZh] = useState(false);
  const [zhVisibility, setZhVisibility] = useState<Record<number, boolean>>({});

  // Use refs for logic control to avoid stale closure issues
  const currentParagraphIndexRef = useRef<number | null>(null);
  const currentSentenceIndexRef = useRef<number>(0);
  const sentencesRef = useRef<string[]>([]);
  const isAutoPlayingRef = useRef<boolean>(false);

  const levelArticles = useMemo(() => STATIC_READING[level] || [], [level]);
  const currentArticle = useMemo(() => {
    if (selectedArticleId) return levelArticles.find(a => a.id === selectedArticleId);
    return null;
  }, [levelArticles, selectedArticleId]);

  // Utility to split text into sentences carefully
  const splitIntoSentences = (text: string): string[] => {
    return text.match(/[^.!?]+[.!?]+(?:\s|$)/g)?.map(s => s.trim()) || [text];
  };

  useEffect(() => {
    return () => {
      stopSpeech();
      isAutoPlayingRef.current = false;
    };
  }, []);

  useEffect(() => {
    handleStop();
    setZhVisibility({});
    setShowAllZh(false);
  }, [selectedArticleId]);

  const playNextChunk = () => {
    if (!currentArticle) return;
    
    if (currentSentenceIndexRef.current < sentencesRef.current.length) {
      const text = sentencesRef.current[currentSentenceIndexRef.current];
      
      speak(text, () => {
        if (currentParagraphIndexRef.current !== null && !window.speechSynthesis.paused) {
          currentSentenceIndexRef.current += 1;
          playNextChunk();
        }
      });
    } 
    else if (isAutoPlayingRef.current) {
      const nextParaIndex = (currentParagraphIndexRef.current || 0) + 1;
      if (nextParaIndex < currentArticle.paragraphs.length) {
        startParagraphPlayback(nextParaIndex, true);
      } else {
        handleStop();
      }
    } else {
      setActiveParagraphIndex(null);
      currentParagraphIndexRef.current = null;
    }
  };

  const startParagraphPlayback = (paraIndex: number, autoPlay: boolean) => {
    if (!currentArticle) return;
    
    setActiveParagraphIndex(paraIndex);
    currentParagraphIndexRef.current = paraIndex;
    currentSentenceIndexRef.current = 0;
    isAutoPlayingRef.current = autoPlay;
    sentencesRef.current = splitIntoSentences(currentArticle.paragraphs[paraIndex].fr);
    
    playNextChunk();
  };

  const handlePlayAll = () => {
    if (!currentArticle) return;
    
    if (isPaused) {
      resumeSpeech();
      setIsPaused(false);
    } else {
      stopSpeech();
      setIsPlayingAll(true);
      setIsPaused(false);
      startParagraphPlayback(0, true);
    }
  };

  const handlePause = () => {
    pauseSpeech();
    setIsPaused(true);
  };

  const handleStop = () => {
    stopSpeech();
    setIsPlayingAll(false);
    setIsPaused(false);
    setActiveParagraphIndex(null);
    currentParagraphIndexRef.current = null;
    currentSentenceIndexRef.current = 0;
    isAutoPlayingRef.current = false;
  };

  const handlePlaySingle = (index: number) => {
    stopSpeech();
    setIsPlayingAll(false);
    setIsPaused(false);
    startParagraphPlayback(index, false);
  };

  const toggleZh = (idx: number) => {
    setZhVisibility(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (!currentArticle) {
    return (
      <div className="animate-in fade-in duration-500 max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-slate-800">精选阅读 · Lecture Guidée</h1>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
          {(['A1', 'A2', 'B1', 'B2', 'C1'] as ProficiencyLevel[]).map(l => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${level === l ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4">
          {levelArticles.length > 0 ? levelArticles.map((article, idx) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticleId(article.id)}
              className="p-6 bg-white border-2 border-slate-100 rounded-2xl text-left hover:border-teal-500 hover:shadow-lg transition-all group flex justify-between items-center"
            >
              <div className="flex-1 pr-4">
                <span className="text-[10px] font-black text-teal-500 uppercase tracking-widest block mb-1">Article {idx + 1}</span>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{article.title.fr}</h3>
                <p className="text-sm text-slate-400">{article.title.zh}</p>
              </div>
              <span className="text-teal-500 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">阅读全文 →</span>
            </button>
          )) : (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
               <p className="text-slate-400 font-medium">该级别内容正在建设中...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl mx-auto pb-24">
      <div className="flex items-center justify-between mb-8 sticky top-20 z-10 bg-slate-50/90 backdrop-blur py-4 border-b border-slate-200">
        <button onClick={() => setSelectedArticleId(null)} className="text-teal-600 font-bold flex items-center gap-1 hover:underline text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回列表
        </button>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowAllZh(!showAllZh)}
            className={`px-4 py-2 rounded-full text-[12px] font-bold transition-all border-2 ${showAllZh ? 'bg-teal-50 border-teal-500 text-teal-600' : 'bg-white border-slate-200 text-slate-500'}`}
          >
            {showAllZh ? '隐藏全文翻译' : '显示全文翻译'}
          </button>

          {!isPlayingAll || isPaused ? (
            <button 
              onClick={handlePlayAll}
              className="px-6 py-2 bg-teal-600 text-white rounded-full text-sm font-bold shadow-lg hover:bg-teal-700 active:scale-95 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {isPaused ? '继续' : '播放全文'}
            </button>
          ) : (
            <button 
              onClick={handlePause}
              className="px-6 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-lg hover:bg-slate-900 active:scale-95 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              暂停
            </button>
          )}

          {(isPlayingAll || activeParagraphIndex !== null) && (
            <button 
              onClick={handleStop}
              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
              title="停止播放"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <article className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-10">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">{currentArticle.title.fr}</h2>
          <p className="text-xl font-bold text-teal-600">{currentArticle.title.zh}</p>
          <div className="mt-4 inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest">
            Niveau {level}
          </div>
        </header>

        <div className="space-y-12">
          {currentArticle.paragraphs.map((p, idx) => (
            <section 
              key={idx} 
              className={`relative group/section transition-all duration-500 rounded-3xl p-4 -mx-4 ${activeParagraphIndex === idx ? 'bg-teal-50 ring-2 ring-teal-500/20 shadow-sm' : ''}`}
            >
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Paragraphe {idx + 1}</span>
                      {activeParagraphIndex === idx && !isPaused && (
                        <span className="flex gap-0.5 h-3 items-end">
                          <span className="w-0.5 bg-teal-500 animate-[bounce_1s_infinite_0ms]"></span>
                          <span className="w-0.5 bg-teal-500 animate-[bounce_1s_infinite_200ms]"></span>
                          <span className="w-0.5 bg-teal-500 animate-[bounce_1s_infinite_400ms]"></span>
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => toggleZh(idx)}
                        className={`text-[10px] font-black px-2 py-1 rounded transition-colors ${zhVisibility[idx] ? 'bg-teal-100 text-teal-700' : 'bg-slate-50 text-slate-400'}`}
                      >
                        {zhVisibility[idx] ? '隐藏翻译' : '查看翻译'}
                      </button>
                      <button 
                        onClick={() => handlePlaySingle(idx)}
                        className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded transition-all ${activeParagraphIndex === idx && !isPlayingAll ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600 hover:bg-teal-100'}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                        </svg>
                        朗读
                      </button>
                    </div>
                  </div>
                  <p className={`text-[16px] leading-[1.6] font-serif transition-colors duration-300 ${activeParagraphIndex === idx ? 'text-teal-900 font-bold' : 'text-[#333333]'}`} style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                    {p.fr}
                  </p>
                  {(showAllZh || zhVisibility[idx]) && (
                    <div className="p-5 mt-4 bg-white shadow-inner rounded-2xl text-slate-700 text-sm font-medium border-l-4 border-teal-500 animate-in slide-in-from-top-2 duration-300">
                      {p.zh}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>

      {currentArticle.keywords.length > 0 && (
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-slate-100">
          <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <span className="p-2 bg-amber-100 text-amber-600 rounded-xl">🔑</span>
            核心词汇 · Mots-clés
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentArticle.keywords.map((kw, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-teal-200 transition-all">
                <button 
                  onClick={() => speak(kw.word)}
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white text-[#28a745] rounded-full shadow-sm hover:bg-[#28a745] hover:text-white transition-all active:scale-90"
                  style={{ width: '48px', height: '48px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                  </svg>
                </button>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <h4 className="text-lg font-bold text-slate-900">{kw.word}</h4>
                    <span className="text-xs font-mono text-slate-400 italic">[{kw.ipa}]</span>
                  </div>
                  <p className="text-sm font-bold text-teal-600">{kw.zh}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ReadingView;
