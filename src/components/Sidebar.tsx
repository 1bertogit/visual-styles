import React, { useMemo } from 'react';
import { Search, Hash, Sparkles } from 'lucide-react';
import { StyleDefinition } from '../types';

interface SidebarProps {
  styles: StyleDefinition[];
  selectedId: number;
  onSelect: (style: StyleDefinition) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  styles, 
  selectedId, 
  onSelect, 
  searchTerm, 
  onSearchChange,
  isOpen
}) => {
  const filteredStyles = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return styles.filter(s => 
      s.name.toLowerCase().includes(term) || 
      s.group.toLowerCase().includes(term)
    );
  }, [styles, searchTerm]);

  const groupedStyles = useMemo(() => {
    const groups: Record<string, StyleDefinition[]> = {};
    filteredStyles.forEach(style => {
      if (!groups[style.group]) {
        groups[style.group] = [];
      }
      groups[style.group].push(style);
    });
    return groups;
  }, [filteredStyles]);

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-20 w-[340px] bg-sidebar border-r border-sidebar-border
        flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}
      role="navigation"
      aria-label="Navegação de estilos"
    >
      {/* Header */}
      <div className="p-5 bg-black/40 border-b border-sidebar-border backdrop-blur-md">
        <div className="flex justify-between items-center mb-0.5">
          <h1 className="text-sm font-bold text-white tracking-widest flex items-center gap-2">
            <Sparkles size={14} className="text-accent" />
            DESIGN GRIMOIRE
          </h1>
          <span className="bg-accent/20 text-accent text-[10px] font-bold px-2 py-0.5 rounded border border-accent/20">
            {styles.length}
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-sidebar-border bg-sidebar">
        <div className="relative group">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-accent transition-colors" />
          <input
            type="text"
            placeholder="Search styles (e.g., Neon, Kids...)"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#18181b] border border-[#3f3f46] text-zinc-200 pl-9 pr-3 py-2 rounded-lg text-xs outline-none focus:border-accent transition-all placeholder:text-zinc-600"
            aria-label="Buscar estilos"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
        {Object.entries(groupedStyles).map(([groupName, groupItems]) => (
          <div key={groupName} className="mb-4">
            <h3 className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider sticky top-0 bg-sidebar z-10">
              {groupName}
            </h3>
            <div className="space-y-0.5" role="listbox" aria-label={groupName}>
              {(groupItems as StyleDefinition[]).map(style => (
                <button
                  key={style.id}
                  onClick={() => onSelect(style)}
                  role="option"
                  aria-selected={selectedId === style.id}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-md text-[13px] text-left transition-all duration-200
                    ${selectedId === style.id 
                      ? 'bg-accent text-white font-medium shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                      : 'text-zinc-400 hover:bg-[#27272a] hover:text-zinc-100'}
                  `}
                >
                  <span className="truncate pr-2">{style.name}</span>
                  <span className={`text-[9px] font-mono opacity-50 flex items-center gap-0.5 ${selectedId === style.id ? 'text-white' : 'text-zinc-600'}`}>
                    <Hash size={8} /> {style.id}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {filteredStyles.length === 0 && (
          <div className="p-8 text-center text-zinc-500 text-xs">
            No spells found matching your query.
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
