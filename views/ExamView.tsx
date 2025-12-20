
import React, { useState, useEffect, useMemo } from 'react';
import { ProficiencyLevel, ExamQuestion } from '../types';
import { recordWrongAnswer } from '../services/storageService';
import { speak } from '../services/ttsService';
import { STATIC_EXAM_DATA } from '../data/examData';

const ExamView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [level, setLevel] = useState<ProficiencyLevel | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showCurrentHint, setShowCurrentHint] = useState(false);

  const startExam = (lvl: ProficiencyLevel) => {
    const data = [...(STATIC_EXAM_DATA[lvl] || [])];
    if (data.length === 0) {
      alert("该等级测试内容正在准备中...");
      return;
    }
    setLevel(lvl);
    setQuestions(data);
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    setIsAnswered(false);
    setSelectedAnswer('');
    setShowCurrentHint(false);
  };

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
  };

  const submitAnswer = () => {
    if (!selectedAnswer.trim()) return;
    const current = questions[currentIndex];
    const isCorrect = selectedAnswer.trim().toLowerCase() === current.answer.toLowerCase();
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Record to memory section if wrong (Standard behavior)
    if (!isCorrect) {
      recordWrongAnswer({ 
        ...current, 
        selectedAnswer, 
        date: new Date().toISOString(),
        level: level!,
        explanation: current.explanation || `正确答案是: ${current.answer}`
      });
    }
    
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setShowCurrentHint(false);
    } else {
      setFinished(true);
    }
  };

  const handlePlayAudio = (text?: string) => {
    const current = questions[currentIndex];
    if (text) {
      speak(text);
    } else if (current.type === 'listening' && current.audio) {
      speak(current.audio);
    } else {
      speak(current.question);
    }
  };

  const handleReturnToLevels = () => {
    setLevel(null);
    setQuestions([]);
    setCurrentIndex(0);
    setFinished(false);
    setShowCurrentHint(false);
  };

  if (finished) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-2xl animate-in zoom-in duration-500">
        <h2 className="text-6xl mb-6">🏆</h2>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-2">挑战完成！</h3>
        <p className="text-lg text-slate-500 mb-8">
          正确率: <span className="text-red-600 font-bold text-4xl">{Math.round((score / questions.length) * 100)}%</span>
          <br />
          <span className="text-sm">({score} / {questions.length} 题)</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 px-8">
          <button onClick={handleReturnToLevels} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">重新选择等级</button>
          <button onClick={onBack} className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 shadow-lg shadow-red-100 transition-all">返回首页</button>
        </div>
      </div>
    );
  }

  if (!level) {
    return (
      <div className="max-w-xl mx-auto space-y-8 animate-in fade-in duration-500">
        <section className="text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">法语能力挑战</h2>
          <p className="text-slate-500 font-medium">选择等级开始 10 道题目的多维能力测试</p>
        </section>
        <div className="grid grid-cols-1 gap-4">
          {(['A1', 'A2', 'B1', 'B2', 'C1'] as ProficiencyLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => startExam(lvl)}
              className="p-6 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-between hover:border-red-500 hover:scale-[1.01] transition-all group shadow-sm"
            >
              <div className="text-left">
                <span className="text-2xl font-black text-slate-300 group-hover:text-red-500/20 transition-colors">{lvl}</span>
                <h4 className="text-lg font-bold text-slate-800">Niveau {lvl}</h4>
                <p className="text-xs text-slate-400">词汇 · 语法 · 听力</p>
              </div>
              <div className="flex items-center gap-2 text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                开始挑战
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const current = questions[currentIndex];
  const isCorrect = selectedAnswer.trim().toLowerCase() === current.answer.toLowerCase();

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
         <div className="flex items-center gap-3">
            <button 
              onClick={handleReturnToLevels}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition-all text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
              返回挑战首页
            </button>
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black ring-1 ring-red-100 uppercase tracking-wider">{level}</span>
         </div>
         <div className="flex items-center flex-1 gap-4">
           <div className="h-2 flex-1 bg-slate-200 rounded-full overflow-hidden">
             <div 
               className="h-full bg-red-600 transition-all duration-500" 
               style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
             ></div>
           </div>
           <span className="text-[10px] font-black text-slate-400 font-mono whitespace-nowrap">{currentIndex + 1} / {questions.length}</span>
         </div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative">
        <div className="flex justify-between items-start mb-8 gap-4">
           <div className="flex-1">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2 block">{current.type.replace('_', ' ')}</span>
              <h3 className="text-2xl font-bold text-slate-900 leading-relaxed pr-4 mb-4">
                {current.type === 'listening' ? "点击播放按钮收听并作答" : current.question}
              </h3>
              
              <div className="flex items-center gap-3">
                {current.question_cn_hint && (
                  <button 
                    onClick={() => setShowCurrentHint(!showCurrentHint)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${showCurrentHint ? 'bg-amber-100 text-amber-700 shadow-inner' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {showCurrentHint ? '隐藏中文提示' : '显示中文提示'}
                  </button>
                )}
                {showCurrentHint && current.question_cn_hint && (
                  <p className="text-amber-600 text-sm font-bold animate-in fade-in slide-in-from-left-2 duration-300">
                    {current.question_cn_hint}
                  </p>
                )}
              </div>
           </div>
           <button 
            onClick={() => handlePlayAudio()}
            className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl transition-all shadow-lg active:scale-95 ${current.type === 'listening' ? 'bg-red-600 text-white shadow-red-100 hover:bg-red-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            title="播放音频"
           >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
           </button>
        </div>

        <div className="space-y-4 mb-10">
          {current.type === 'fill_in_blank' ? (
            <div className="relative">
              <input
                autoFocus
                disabled={isAnswered}
                type="text"
                placeholder="请输入拼写..."
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !isAnswered && submitAnswer()}
                className={`w-full p-5 rounded-2xl border-2 text-xl font-bold transition-all outline-none text-center ${
                  !isAnswered ? 'border-slate-100 bg-slate-50 focus:border-red-500' :
                  isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-red-50 border-red-500 text-red-700'
                }`}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {current.options?.map((opt, i) => {
                let stateClass = "border-slate-100 bg-white hover:border-red-200 shadow-sm";
                if (isAnswered) {
                   if (opt === current.answer) stateClass = "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold ring-2 ring-emerald-100";
                   else if (opt === selectedAnswer) stateClass = "border-red-500 bg-red-50 text-red-700 opacity-80";
                   else stateClass = "opacity-40 border-slate-100";
                } else if (opt === selectedAnswer) {
                   stateClass = "border-red-600 bg-red-50 text-red-700 ring-2 ring-red-100 shadow-md font-bold";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all text-lg flex items-center justify-between group/opt ${stateClass}`}
                  >
                    <div className="flex items-center gap-4">
                       <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black uppercase transition-colors ${selectedAnswer === opt ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-400 group-hover/opt:bg-red-100 group-hover/opt:text-red-500'}`}>
                          {String.fromCharCode(65 + i)}
                       </span>
                       {opt}
                    </div>
                    {isAnswered && opt === current.answer && (
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {isAnswered ? (
          <div className="animate-in slide-in-from-top-4 duration-500 space-y-6">
            <div className={`p-6 rounded-3xl border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`p-2 rounded-xl text-white ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`}>
                  {isCorrect ? '✓' : '✗'}
                </span>
                <h4 className="font-black text-slate-800 uppercase tracking-widest text-sm">
                   {isCorrect ? '回答正确' : '错题解析'}
                </h4>
              </div>

              <div className="space-y-4">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-2xl border ${isCorrect ? 'bg-emerald-100/30 border-emerald-200' : 'bg-red-100/30 border-red-200'}`}>
                        <span className={`text-[10px] font-black uppercase ${isCorrect ? 'text-emerald-500' : 'text-red-400'}`}>你的回答</span>
                        <p className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>{selectedAnswer || "(未填写)"}</p>
                    </div>
                    <div className="p-4 bg-white/60 rounded-2xl border border-slate-200">
                        <span className="text-[10px] font-black text-slate-400 uppercase">正确答案</span>
                        <p className="text-slate-700 font-bold">{current.answer}</p>
                    </div>
                 </div>

                 {current.detailedExplanation ? (
                   <div className="pt-2 border-t border-slate-200/50 space-y-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">解析原因</span>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {current.detailedExplanation.analysis}
                        </p>
                      </div>

                      <div className="bg-white/60 p-4 rounded-2xl border border-slate-200/50">
                        <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">相关知识点</span>
                        <p className="text-slate-700 text-sm font-semibold">{current.detailedExplanation.grammarPoint}</p>
                      </div>

                      <div className="bg-slate-900 text-white p-5 rounded-2xl relative group/ex">
                         <span className="text-[10px] font-black text-slate-500 uppercase block mb-2">学习例句</span>
                         <p className="text-lg font-bold mb-1 pr-10">{current.detailedExplanation.example.fr}</p>
                         <p className="text-xs text-slate-400">{current.detailedExplanation.example.zh}</p>
                         <button 
                           onClick={() => handlePlayAudio(current.detailedExplanation?.example.fr)}
                           className="absolute top-5 right-5 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                         >
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z" clipRule="evenodd" />
                           </svg>
                         </button>
                      </div>
                   </div>
                 ) : (
                   <p className="text-slate-600 font-medium pt-2 border-t border-slate-200/50">
                      {current.explanation || (isCorrect ? "太棒了！你的回答完全正确。" : `很遗憾，答错了。正确答案是：${current.answer}`)}
                   </p>
                 )}
              </div>
            </div>
            <button 
              onClick={nextQuestion}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-black transition-all transform active:scale-95"
            >
              {currentIndex === questions.length - 1 ? '查看挑战结果' : '进入下一题挑战'}
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
             <button 
              onClick={() => {
                if (currentIndex < questions.length - 1) {
                  setCurrentIndex(prev => prev + 1);
                  setSelectedAnswer('');
                  setShowCurrentHint(false);
                } else {
                  setFinished(true);
                }
              }}
              className="flex-1 py-4 bg-slate-100 text-slate-400 rounded-2xl font-bold hover:bg-slate-200 transition-all"
             >
               跳过
             </button>
             <button 
              disabled={!selectedAnswer.trim()}
              onClick={submitAnswer}
              className="flex-[2] py-5 bg-red-600 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all transform active:scale-95"
            >
              验证挑战回答
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamView;
