import React from 'react';
import { StyleDefinition } from '../types';
import { getThemeById } from '../themes';

interface PreviewPaneProps {
  style: StyleDefinition;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ style }) => {
  const theme = getThemeById(style.id, style.category);

  return (
    <div className={`w-full h-full flex items-center justify-center p-8 transition-colors duration-500 ease-out relative ${theme.container}`}>
      {/* Background decorations */}
      {style.category === 't-medical' && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          aria-hidden="true"
        />
      )}
      {style.id === 8 && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at 20% 30%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(168,85,247,0.3) 0%, transparent 50%)'
          }}
          aria-hidden="true"
        />
      )}
      {style.id === 11 && (
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Visual Mockup Container */}
      <div className={`
        w-full max-w-4xl min-h-[400px] p-8 md:p-12
        ${style.id === 2 ? '' : 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center'}
        transition-all duration-500
        ${theme.card}
      `}>
        
        {/* Bento Grid Layout for ID 2 */}
        {style.id === 2 ? (
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full min-h-[350px]">
            <div className="col-span-2 row-span-1 bg-slate-100 rounded-2xl p-6 flex flex-col justify-center">
              <h1 className={`text-3xl font-bold mb-2 ${theme.text}`}>{style.name}</h1>
              <p className={`text-sm ${theme.subtext}`}>Modular bento grid layout</p>
            </div>
            <div className="col-span-1 row-span-2 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-400 text-xs font-bold">FEATURE</div>
            <div className="col-span-1 row-span-1 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-400 text-xs font-bold">STATS</div>
            <div className="col-span-1 row-span-1 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 text-xs font-bold">CTA</div>
          </div>
        ) : (
          <>
            {/* Content Side */}
            <div className="flex flex-col items-start gap-6">
              <div className="space-y-4">
                <h1 className={`text-4xl md:text-5xl font-bold leading-[1.1] transition-colors duration-300 ${theme.text}`}>
                  {style.name}
                </h1>
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${theme.subtext}`}>
                  Visual approximation of the {style.group} style.
                </p>
              </div>
              
              <button className={`px-8 py-3.5 text-sm md:text-base font-semibold transition-all duration-200 ${theme.button}`}>
                START BUILDING
              </button>
            </div>

            {/* Visual Asset Side */}
            <div className={`
              w-full aspect-square md:aspect-[4/3] flex items-center justify-center
              text-xs md:text-sm font-bold tracking-[0.2em] uppercase
              transition-all duration-500
              ${theme.visual}
            `}>
              {style.id === 6 ? '3D SHAPE' : 'VISUAL ASSET'}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviewPane;
