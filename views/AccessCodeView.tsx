
import React, { useState } from 'react';
import { saveAccess } from '../services/storageService';

const VALID_CODES = [
  // —— 旧访问码 ——
  "FM-A1X9K2",
  "FM-B7LQ82",
  "FM-C93KLM",

  // —— 2025年7月批量访问码 ——
  "FM-2507-A9KQ", "FM-2507-7LXM", "FM-2507-Z82P", "FM-2507-Q4TN", "FM-2507-M8LA",
  "FM-2507-KP93", "FM-2507-XR7C", "FM-2507-2JQW", "FM-2507-9FZL", "FM-2507-WM8T",

  "FM-2507-C7AQ", "FM-2507-4RKM", "FM-2507-TL29", "FM-2507-ZQ6F", "FM-2507-8MJP",
  "FM-2507-YW7C", "FM-2507-P2KR", "FM-2507-FM9A", "FM-2507-Q7LX", "FM-2507-AK8Z",

  "FM-2507-M7WQ", "FM-2507-R29K", "FM-2507-JF8T", "FM-2507-ZM4C", "FM-2507-LP7Q",
  "FM-2507-82XA", "FM-2507-TWKM", "FM-2507-FR9Z", "FM-2507-QP2M", "FM-2507-7ZKL",

  "FM-2507-X4FQ", "FM-2507-M9KA", "FM-2507-W2ZR", "FM-2507-QT8L", "FM-2507-7CPM",
  "FM-2507-ZK9A", "FM-2507-FQ2T", "FM-2507-RM8W", "FM-2507-PL7Z", "FM-2507-4KQA",

  "FM-2507-9MZW", "FM-2507-K2FP", "FM-2507-T7RQ", "FM-2507-AZ4M", "FM-2507-WP9K",
  "FM-2507-QM7L", "FM-2507-8ZFR", "FM-2507-PK2A", "FM-2507-7TQM", "FM-2507-MZ9F",

  "FM-2507-RQ47", "FM-2507-KM8A", "FM-2507-ZT2P", "FM-2507-9FQM", "FM-2507-W7LA",
  "FM-2507-QZK2", "FM-2507-M4RP", "FM-2507-A8TF", "FM-2507-KQ9M", "FM-2507-ZP7L",

  "FM-2507-2FMQ", "FM-2507-T9KA", "FM-2507-WQ7Z", "FM-2507-MP48", "FM-2507-R7FQ",
  "FM-2507-AZKM", "FM-2507-9TQP", "FM-2507-KW2F", "FM-2507-QM7A", "FM-2507-ZL8R"
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
