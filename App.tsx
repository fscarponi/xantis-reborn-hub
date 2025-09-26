import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { View } from './types';

const HamburgerIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);


const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (view: View) => {
    setActiveView(view);
    setIsSidebarOpen(false); // Close sidebar on navigation
  };

  return (
    <div className="relative min-h-screen md:flex bg-slate-900 text-slate-100 font-sans">
      <Sidebar
        activeView={activeView}
        onNavigate={handleNavigate}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          aria-hidden="true"
        ></div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden h-screen md:h-auto">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700 shadow-md">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-slate-300 hover:text-white"
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
          <div className="text-xl font-bold text-white">
            Xantis Hub
          </div>
        </header>
        <MainContent activeView={activeView} onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;