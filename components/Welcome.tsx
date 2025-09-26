
import React from 'react';
import { PROJECTS } from '../constants';
import { View } from '../types';

interface WelcomeProps {
  onNavigate: (view: View) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start text-center p-6 bg-slate-900 text-slate-300 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <div className="my-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Xantis Hub: Le Tue Preghiere Sono State Ascoltate. Forse.
          </h1>
          <p className="text-lg text-slate-400">
            Sei stanco di tenere 27 fogli di calcolo aperti per gestire il tuo personaggio? Anche noi. Ecco la soluzione, o almeno un nobile tentativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate(project.id)}
              className="bg-slate-800 rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transform hover:scale-105 hover:bg-slate-700 transition-all duration-300 shadow-lg"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && onNavigate(project.id)}
            >
              <div className="text-sky-400 mb-4 bg-slate-700/50 p-4 rounded-full">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-slate-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <p className="text-lg text-slate-500 italic">
            "Ricorda: non è un bug, è una feature inaspettata. E qui dentro, la creatività abbonda."
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Welcome;
