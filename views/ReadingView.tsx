import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ProficiencyLevel, ReadingArticle, ReadingParagraph } from '../types';
import { STATIC_READING } from '../data/readingData';
import { speak, pauseSpeech, resumeSpeech, stopAllAudio } from '../services/ttsService';

const ReadingView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [level, setLevel] = useState<ProficiencyLevel>('A1');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  
  // Playback States
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeParagraphIndex, setActiveParagraphIndex] = useState<number | null>(null);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  
  // Shadowing (Recording) States
  const [isRecording, setIsRecording] = useState(false);
  const [shadowingParaIndex, setShadowingParaIndex] = useState<number | null>(null);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // UI States
  const [showAllZh, setShowAllZh] = useState(false);
  const [zhVisibility, setZhVisibility] = useState<Record<number, boolean>>({});

  // Logic control using Refs for stability during rapid state changes
  const currentParagraphIndexRef = useRef<number | null>(null);
  const isAutoPlayingRef = useRef<boolean>(false);
  const isComponentMounted = useRef<boolean>(true);

  const levelArticles = useMemo(() => STATIC_READING[level] || [], [level]);
  const currentArticle = useMemo(() => {
    if (selectedArticleId) return levelArticles.find(a => a.id === selectedArticleId);
    return null;
  }, [levelArticles, selectedArticleId]);

  // GLOBAL CLEANUP & NAVIGATION STOP
  useEffect(() => {
    isComponentMounted.current = true;
    return () => {
      isComponentMounted.current = false;
      stopAllAudio();
      stopRecording();
    };
  }, []);

  // Stop everything when switching articles
  useEffect(() => {
    handleStop();
    setZhVisibility({});
    setShowAllZh(false);
    setRecordedUrl(null);
  }, [selectedArticleId]);

  /**
   * Sequence-locked paragraph playback.
   * Sending the whole paragraph text to the TTS engine ensures 
   * natural rhythm and native liaisons between sentences.
   */
  const startParagraphPlayback = (paraIndex: number, autoPlay: boolean) => {
    if (!currentArticle || !isComponentMounted.current) return;
    
    // Safety check for bounds
    if (paraIndex >= currentArticle.paragraphs.length) {
      handleStop();
      return;
    }

    // Immediate state preparation
    stopRecording();
    setShadowingParaIndex(null);
    setActiveParagraphIndex(paraIndex);
    
    // Ref-based locking
    currentParagraphIndexRef.current = paraIndex;
    isAutoPlayingRef.current = autoPlay;
    
    const textToSpeak = currentArticle.paragraphs[paraIndex].fr;
    
    speak(textToSpeak, playbackRate, () => {
      // Logic for sequencing: only proceed if we are still on the same track
      if (isComponentMounted.current && currentParagraphIndexRef.current === paraIndex) {
        if (isAutoPlayingRef.current) {
          const nextParaIndex = paraIndex + 1;
          if (nextParaIndex < currentArticle.paragraphs.length) {
            // Force a micro-delay for UI stability between transitions
            setTimeout(() => {
              if (isComponentMounted.current && isAutoPlayingRef.current) {
                startParagraphPlayback(nextParaIndex, true);
              }
            }, 100);
          } else {
            handleStop();
          }
        } else {
          setActiveParagraphIndex(null);
          currentParagraphIndexRef.current = null;
        }
      }
    });
  };

  const handlePlayAll = () => {
    if (!currentArticle) return;
    if (isPaused) {
      resumeSpeech();
      setIsPaused(false);
    } else {
      handleStop(); // Start fresh
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
    stopAllAudio();
    stopRecording();
    setIsPlayingAll(false);
    setIsPaused(false);
    setActiveParagraphIndex(null);
    currentParagraphIndexRef.current = null;
    isAutoPlayingRef.current = false;
  };

  /**
   * Toggles playback for a single paragraph.
   * Guaranteed to play from start to finish unless stopped.
   */
  const handlePlaySingle = (index: number) => {
    // If clicking same paragraph while playing (not in "Play All" mode) -> Toggle STOP
    if (activeParagraphIndex === index && !isPlayingAll) {
      handleStop();
      return;
    }
    
    // Interrupt current session and start this specific paragraph
    handleStop();
    startParagraphPlayback(index, false);
  };

  const startShadowing = async (index: number) => {
    if (!currentArticle) return;
    handleStop(); // Critical: Silence reading before starting microphone
    setShadowingParaIndex(index);
    setRecordedUrl(null);
    await initRecording();
  };

  const initRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        if (isComponentMounted.current) {
          setRecordedUrl(audioUrl);
          setIsRecording(false);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access denied:", err);
      setShadowingParaIndex(null);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
  };

  const playMyRecording = () => {
    if (recordedUrl) {
      const audio = new Audio(recordedUrl);
      audio.play().catch(e => console.warn('User recording playback failed:', e));
    }
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
      <div className="flex flex-col gap-4 mb-8 sticky top-20 z-10 bg-slate-50/90 backdrop-blur py-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <button onClick={() => setSelectedArticleId(null)} className="text-teal-600 font-bold flex items-center gap-1 hover:underline text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回列表
          </button>
          
          <div className="flex items-center gap-3">
            <div className="flex bg-white rounded-full border border-slate-200 p-1 shadow-sm">
              {[
                { label: '慢', val: 0.75 },
                { label: '常', val: 1.0 },
                { label: '快', val: 1.25 }
              ].map(s => (
                <button
                  key={s.val}
                  onClick={() => setPlaybackRate(s.val)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${playbackRate === s.val ? 'bg-teal-600 text-white shadow-md' : 'text-slate-400 hover:text-teal-600'}`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setShowAllZh(!showAllZh)}
              className={`px-4 py-2 rounded-full text-[12px] font-bold transition-all border-2 ${showAllZh ? 'bg-teal-50 border-teal-500 text-teal-600' : 'bg-white border-slate-200 text-slate-500'}`}
            >
              {showAllZh ? '隐藏全文' : '显示全文'}
            </button>

            {!isPlayingAll || isPaused ? (
              <button 
                onClick={handlePlayAll}
                className="px-6 py-2 bg-teal-600 text-white rounded-full text-sm font-bold shadow-lg hover:bg-teal-700 active:scale-95 transition-all flex items-center gap-2"
              >
                {isPaused ? '继续播放' : '播放全文'}
              </button>
            ) : (
              <button 
                onClick={handlePause}
                className="px-6 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-lg hover:bg-slate-900 active:scale-95 transition-all flex items-center gap-2"
              >
                暂停播放
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
      </div>

      <article className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-10">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">{currentArticle.title.fr}</h2>
          <p className="text-xl font-bold text-teal-600">{currentArticle.title.zh}</p>
        </header>

        <div className="space-y-12">
          {currentArticle.paragraphs.map((p, idx) => (
            <section 
              key={idx} 
              className={`relative transition-all duration-500 rounded-3xl p-6 -mx-6 ${activeParagraphIndex === idx ? 'bg-teal-50 ring-2 ring-teal-500/20' : shadowingParaIndex === idx ? 'bg-amber-50 ring-2 ring-amber-500/20' : ''}`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">段落 {idx + 1}</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleZh(idx)}
                      className={`text-[10px] font-black px-3 py-1 rounded-full transition-colors ${zhVisibility[idx] ? 'bg-teal-100 text-teal-700' : 'bg-slate-50 text-slate-400'}`}
                    >
                      {zhVisibility[idx] ? '隐藏翻译' : '查看翻译'}
                    </button>
                    <button 
                      onClick={() => handlePlaySingle(idx)}
                      className={`flex items-center gap-1 text-[10px] font-black px-3 py-1 rounded-full transition-all ${activeParagraphIndex === idx && !isPlayingAll ? 'bg-teal-600 text-white shadow-sm animate-pulse' : 'bg-teal-50 text-teal-600 hover:bg-teal-100'}`}
                    >
                      {activeParagraphIndex === idx && !isPlayingAll ? '停止' : '朗读'}
                    </button>
                    <button 
                      onClick={() => startShadowing(idx)}
                      className={`flex items-center gap-1 text-[10px] font-black px-3 py-1 rounded-full transition-all ${shadowingParaIndex === idx ? 'bg-amber-600 text-white shadow-sm' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'}`}
                    >
                      跟读
                    </button>
                  </div>
                </div>

                <p className={`text-[18px] leading-[1.7] font-serif transition-colors duration-300 ${activeParagraphIndex === idx ? 'text-teal-900 font-bold' : 'text-slate-800'}`} style={{ fontFamily: "'Georgia', serif" }}>
                  {p.fr}
                </p>

                {shadowingParaIndex === idx && (
                  <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm animate-in zoom-in-95 duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {isRecording ? (
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-black text-red-600 uppercase tracking-widest">正在录音中...</span>
                          </div>
                        ) : recordedUrl ? (
                          <span className="text-sm font-black text-emerald-600 uppercase tracking-widest">录音已完成</span>
                        ) : (
                          <span className="text-sm font-black text-slate-400 uppercase tracking-widest">正在初始化...</span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {isRecording ? (
                          <button onClick={stopRecording} className="px-4 py-1.5 bg-red-600 text-white rounded-full text-[10px] font-black shadow-sm">停止并保存</button>
                        ) : recordedUrl ? (
                          <div className="flex gap-2">
                            <button onClick={playMyRecording} className="px-4 py-1.5 bg-emerald-600 text-white rounded-full text-[10px] font-black shadow-sm">播放我的发音</button>
                            <button onClick={() => initRecording()} className="px-4 py-1.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black">重新录制</button>
                          </div>
                        ) : null}
                        <button onClick={() => { handleStop(); setShadowingParaIndex(null); }} className="p-1.5 hover:bg-slate-100 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                           </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {(showAllZh || zhVisibility[idx]) && (
                  <div className="p-5 bg-slate-50 rounded-2xl text-slate-600 text-sm font-medium border-l-4 border-teal-500 animate-in slide-in-from-top-2 duration-300">
                    {p.zh}
                  </div>
                )}
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
                  onClick={() => { stopRecording(); speak(kw.word, 0.9); }}
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white text-[#28a745] rounded-full shadow-sm hover:bg-[#28a745] hover:text-white transition-all active:scale-90"
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