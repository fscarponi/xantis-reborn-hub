
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { View } from '../types';
import Welcome from './Welcome';

interface MainContentProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeView, onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when view changes
    setIsLoading(true);
  }, [activeView]);

  if (activeView === View.HOME) {
    return <Welcome onNavigate={onNavigate} />;
  }

  const project = PROJECTS.find((p) => p.id === activeView);

  if (!project) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 bg-slate-900">
        <h2 className="text-2xl text-red-400">Progetto non trovato.</h2>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-slate-900 p-2 md:p-4 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-500"></div>
        </div>
      )}
      <iframe
        key={project.id}
        src={project.url}
        title={project.name}
        className={`w-full h-full border-0 rounded-lg shadow-inner bg-slate-800 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        onLoad={() => setIsLoading(false)}
      />
    </main>
  );
};

export default MainContent;