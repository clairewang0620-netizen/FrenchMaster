
import React, { useState } from 'react';
import { saveAccess } from '../services/storageService';

const VALID_CODES = [
  "FM-A1X9K2",
  "FM-B7LQ82",
  "FM-C93KLM"
];

interface AccessCodeViewProps {
  onUnlock: () => void;
}

const AccessCodeView: React.FC<AccessCodeViewProps> = ({ onUnlock }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedCode = code.trim();
    
    if (VALID_CODES.includes(trimmedCode)) {
      saveAccess(trimmedCode);
      onUnlock();
    } else {
      setError('访问码无效，请检查后重试');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-8 border border-slate-100 text-center animate-in zoom-in-95 duration-500">
        <div className="text-5xl mb-6">🔐</div>
        <h1 className="text-2xl font-black text-slate-800 mb-2">欢迎使用 FrenchMaster</h1>
        <p className="text-slate-500 mb-8 text-sm px-4">
          请输入您购买后获得的访问码以继续学习。<br />访问码可在确认邮件或个人中心中查看。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError('');
              }}
              placeholder="例如: FM-XXXXXX"
              className={`w-full p-4 rounded-2xl border-2 text-center text-xl font-bold transition-all outline-none ${
                error ? 'border-red-500 bg-red-50 focus:border-red-600' : 'border-slate-100 bg-slate-50 focus:border-blue-500'
              }`}
            />
            {error && (
              <p className="text-red-600 text-xs font-bold mt-2 animate-in fade-in slide-in-from-top-1">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!code.trim()}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-30"
          >
            解锁课程内容
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-50">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            FrenchMaster v2.0 · Pro Edition
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessCodeView;
