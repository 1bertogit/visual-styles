import React from 'react';
import { X, ArrowLeftRight } from 'lucide-react';
import { StyleDefinition } from '../types';
import { getThemeById } from '../themes';

interface CompareModeProps {
  styles: [StyleDefinition, StyleDefinition];
  onClose: () => void;
}

const CompareMode: React.FC<CompareModeProps> = ({ styles, onClose }) => {
  const [styleA, styleB] = styles;
  const themeA = getThemeById(styleA.id, styleA.category);
  const themeB = getThemeById(styleB.id, styleB.category);

  return (
    <div className="fixed inset-0 z-50 bg-[#09090b] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <ArrowLeftRight size={18} className="text-accent" />
          <h2 className="text-sm font-bold text-white tracking-wider uppercase">Compare Mode</h2>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 rounded-md transition-all border border-zinc-700"
        >
          <X size={14} />
          Close <span className="text-zinc-600 ml-1">(Esc)</span>
        </button>
      </div>

      {/* Comparison Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-x divide-zinc-800 overflow-hidden">
        {/* Style A */}
        <div className="flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
            <h3 className="text-sm font-bold text-white">{styleA.name}</h3>
            <p className="text-[11px] text-zinc-500">{styleA.group}</p>
          </div>
          <div className={`flex-1 flex items-center justify-center p-6 transition-colors duration-500 ${themeA.container}`}>
            <div className={`w-full max-w-md p-6 ${themeA.card}`}>
              <h4 className={`text-2xl font-bold mb-2 ${themeA.text}`}>{styleA.name}</h4>
              <p className={`text-sm mb-4 ${themeA.subtext}`}>Visual preview</p>
              <button className={`px-4 py-2 text-xs font-semibold ${themeA.button}`}>
                BUTTON
              </button>
            </div>
          </div>
          <div className="px-4 py-3 bg-[#0c0c0e] border-t border-zinc-800 max-h-[150px] overflow-y-auto">
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Prompt</p>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">{styleA.prompt}</p>
          </div>
        </div>

        {/* Style B */}
        <div className="flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
            <h3 className="text-sm font-bold text-white">{styleB.name}</h3>
            <p className="text-[11px] text-zinc-500">{styleB.group}</p>
          </div>
          <div className={`flex-1 flex items-center justify-center p-6 transition-colors duration-500 ${themeB.container}`}>
            <div className={`w-full max-w-md p-6 ${themeB.card}`}>
              <h4 className={`text-2xl font-bold mb-2 ${themeB.text}`}>{styleB.name}</h4>
              <p className={`text-sm mb-4 ${themeB.subtext}`}>Visual preview</p>
              <button className={`px-4 py-2 text-xs font-semibold ${themeB.button}`}>
                BUTTON
              </button>
            </div>
          </div>
          <div className="px-4 py-3 bg-[#0c0c0e] border-t border-zinc-800 max-h-[150px] overflow-y-auto">
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Prompt</p>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">{styleB.prompt}</p>
          </div>
        </div>
      </div>

      {/* Footer with tags comparison */}
      <div className="grid grid-cols-2 divide-x divide-zinc-800 border-t border-zinc-800 bg-zinc-900/30">
        <div className="px-4 py-2 flex flex-wrap gap-1">
          {styleA.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-[10px] bg-accent/20 text-accent rounded-full">{tag}</span>
          ))}
        </div>
        <div className="px-4 py-2 flex flex-wrap gap-1">
          {styleB.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-400 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareMode;
