import React, { useState, useMemo } from 'react';
import { ProficiencyLevel } from '../types';
import { STATIC_GRAMMAR } from '../data/grammarData';
import { speak } from '../services/ttsService';

// Structured Parser for Grammar Explanation
const GrammarContentRenderer: React.FC<{ content: string }> = ({ content }) => {
  const blocks = content.split(/\n\n+/);

  const renderTable = (lines: string[]) => {
    const tableData = lines.filter(l => l.includes('|')).map(l => 
      l.split('|').map(cell => cell.trim()).filter(cell => cell !== '')
    );
    if (tableData.length < 2) return <pre className="whitespace-pre-wrap">{lines.join('\n')}</pre>;

    return (
      <div className="overflow-x-auto my-4 rounded-xl border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-700 font-bold">
            <tr>
              {tableData[0].map((cell, i) => (
                <th key={i} className="px-4 py-3 border-b border-slate-200">{cell.replace(/\*\*/g, '')}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {tableData.slice(1).filter(row => !row.every(c => c.includes('---'))).map((row, i) => (
              <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-slate-600 font-medium">
                    {cell.startsWith('**') ? <strong className="text-blue-600">{cell.replace(/\*\*/g, '')}</strong> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const lines = block.trim().split('\n');
        const firstLine = lines[0];

        // Headers based on numeric pattern (e.g., "1. 核心规则")
        if (/^[0-9]+\.\s/.test(firstLine)) {
          const text = firstLine.replace(/\*\*/g, '');
          
          return (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 text-slate-800">
                <h4 className="text-lg font-black tracking-tight border-l-4 border-purple-500 pl-3">{text}</h4>
              </div>
              <div className="pl-4 space-y-2">
                {lines.slice(1).map((line, lidx) => {
                  if (line.includes('|')) return null; // Handle table separately
                  if (line.startsWith('❌')) return <div key={lidx} className="text-red-500 font-bold bg-red-50 p-2 rounded-lg border border-red-100">{line}</div>;
                  if (line.startsWith('✅')) return <div key={lidx} className="text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-100">{line}</div>;
                  if (line.startsWith('-')) return <li key={lidx} className="list-disc ml-4 text-slate-600 leading-relaxed">{line.replace(/^-\s*/, '').replace(/\*\*/g, '')}</li>;
                  return <p key={lidx} className="text-slate-600 leading-relaxed font-medium">{line.replace(/\*\*/g, '')}</p>;
                })}
                {lines.some(l => l.includes('|')) && renderTable(lines)}
              </div>
            </div>
          );
        }

        // Simple Block or Table outside numeric header
        if (block.includes('|')) {
          return <div key={idx}>{renderTable(lines)}</div>;
        }

        return (
          <div key={idx} className="text-slate-600 leading-relaxed space-y-2">
            {lines.map((line, lidx) => (
              <p key={lidx} className="font-medium">{line.replace(/\*\*/g, '')}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const GrammarView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [level, setLevel] = useState<ProficiencyLevel>('A1');
  const [selectedPointId, setSelectedPointId] = useState<string | null>(null);

  const currentLevelPoints = useMemo(() => STATIC_GRAMMAR[level] || [], [level]);
  
  const selectedPoint = useMemo(() => {
    if (selectedPointId) return currentLevelPoints.find(p => p.id === selectedPointId);
    return currentLevelPoints[0];
  }, [currentLevelPoints, selectedPointId]);

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <button onClick={onBack} className="text-purple-600 flex items-center gap-1 font-bold hover:bg-purple-50 px-2 py-1 rounded-lg self-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          返回首页
        </button>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          {(['A1', 'A2', 'B1', 'B2', 'C1'] as ProficiencyLevel[]).map(l => (
            <button
              key={l}
              onClick={() => { setLevel(l); setSelectedPointId(null); }}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${level === l ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        {currentLevelPoints.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedPointId(p.id)}
            className={`flex-shrink-0 px-6 py-4 rounded-2xl border-2 transition-all font-bold text-center ${
              (selectedPointId === p.id || (!selectedPointId && currentLevelPoints[0]?.id === p.id))
                ? 'border-purple-600 bg-purple-50 text-purple-700 shadow-md'
                : 'border-slate-100 bg-white text-slate-400 hover:border-purple-200'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {selectedPoint && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-[10px] font-black rounded-full mb-6 uppercase tracking-widest">
               Grammaire {level}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">{selectedPoint.title}</h2>
            
            <div className="space-y-6">
              <p className="text-slate-400 text-sm font-bold italic tracking-wide">OBJECTIF: {selectedPoint.explanation}</p>
              <div className="p-1">
                <GrammarContentRenderer content={selectedPoint.explanationZh} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
              <span className="p-2 bg-purple-100 text-purple-600 rounded-xl shadow-sm">Ex</span>
              实用例句 (Exemples)
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {selectedPoint.examples.map((ex, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-6 group hover:border-purple-200 transition-all hover:shadow-lg">
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors leading-relaxed">{ex.sentence}</p>
                    <p className="text-sm font-mono text-slate-400 mb-3 italic">{ex.ipa}</p>
                    <div className="h-px bg-slate-100 w-12 mb-3"></div>
                    <p className="text-lg text-slate-500 font-bold">{ex.translation}</p>
                  </div>
                  <button 
                    onClick={() => speak(ex.sentence)}
                    className="p-5 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all shadow-lg shadow-green-100 active:scale-90 hover:rotate-3"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.414 0A5.982 5.982 0 0115 10a5.982 5.982 0 01-1.757 4.243 1 1 0 01-1.414-1.414A3.981 3.981 0 0013 10c0-1.104-.448-2.104-1.172-2.828a1 1 0 010-1.414z" clipRule="evenodd" />
                     </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default GrammarView;