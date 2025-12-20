
import React, { useState, useEffect } from 'react';
import { AppRoute } from './types';
import { hasAccess } from './services/storageService';
import HomeView from './views/HomeView';
import VocabularyView from './views/VocabularyView';
import DailyConversationView from './views/DailyConversationView';
import GrammarView from './views/GrammarView';
import ReadingView from './views/ReadingView';
import DictationView from './views/DictationView';
import ExamView from './views/ExamView';
import MistakesView from './views/MistakesView';
import AccessCodeView from './views/AccessCodeView';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(hasAccess());

  // Simple hash-based router simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (Object.values(AppRoute).includes(hash as AppRoute)) {
        setCurrentRoute(hash as AppRoute);
      } else {
        setCurrentRoute(AppRoute.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: AppRoute) => {
    window.location.hash = `#/${route}`;
  };

  if (!isAuthorized) {
    return <AccessCodeView onUnlock={() => setIsAuthorized(true)} />;
  }

  const renderView = () => {
    switch (currentRoute) {
      case AppRoute.VOCABULARY: return <VocabularyView onBack={() => navigate(AppRoute.HOME)} />;
      case AppRoute.DAILY_CONVERSATION: return <DailyConversationView onBack={() => navigate(AppRoute.HOME)} />;
      case AppRoute.GRAMMAR: return <GrammarView onBack={() => navigate(AppRoute.HOME)} />;
      case AppRoute.READING: return <ReadingView onBack={() => navigate(AppRoute.HOME)} />;
      case AppRoute.DICTATION: return <DictationView onBack={() => navigate(AppRoute.HOME)} />;
      case AppRoute.TEST: return <ExamView onBack={() => navigate(AppRoute.HOME)} />;
      case AppRoute.MISTAKES: return <MistakesView onBack={() => navigate(AppRoute.HOME)} onNavigate={navigate} />;
      default: return <HomeView onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate(AppRoute.HOME)}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent flex items-center gap-2"
          >
            <span className="text-2xl">🇫🇷</span>
            FrenchMaster
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 pb-24">
        {renderView()}
      </main>

      {/* Mobile Navigation Dock */}
      {currentRoute !== AppRoute.HOME && (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-full px-6 py-3 border border-slate-200 flex items-center gap-6 md:hidden">
           <button onClick={() => navigate(AppRoute.HOME)} className="text-slate-500 hover:text-blue-600" title="首页">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7m-7 7h18" />
             </svg>
           </button>
           <button onClick={() => navigate(AppRoute.VOCABULARY)} className="text-slate-500 hover:text-blue-600" title="词库">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
             </svg>
           </button>
           <button onClick={() => navigate(AppRoute.MISTAKES)} className="text-slate-500 hover:text-blue-600" title="强化记忆">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
             </svg>
           </button>
        </nav>
      )}
    </div>
  );
};

export default App;
