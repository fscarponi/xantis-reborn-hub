import React from 'react';
import { PROJECTS } from '../constants';
import { View } from '../types';

interface SidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
  isSidebarOpen: boolean;
}

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate, isSidebarOpen }) => {
  const baseItemClass = "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200";
  const inactiveItemClass = "text-slate-300 hover:bg-slate-700 hover:text-white";
  const activeItemClass = "bg-sky-600 text-white font-semibold shadow-lg";

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-800 p-4 flex flex-col space-y-4 shadow-xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="text-2xl font-bold text-white text-center py-4 border-b border-slate-700">
        Xantis Hub
      </div>
      <nav className="flex flex-col space-y-2">
        <div
          onClick={() => onNavigate(View.HOME)}
          className={`${baseItemClass} ${activeView === View.HOME ? activeItemClass : inactiveItemClass}`}
        >
          <HomeIcon />
          <span>Home</span>
        </div>
        
        <div className="pt-4 mt-2 border-t border-slate-700">
          <span className="px-3 text-xs font-semibold uppercase text-slate-500">Tools</span>
        </div>
        
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => onNavigate(project.id)}
            className={`${baseItemClass} ${activeView === project.id ? activeItemClass : inactiveItemClass}`}
          >
            {project.icon}
            <span>{project.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;