import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { Search, Hash, Sparkles, Star, Filter, Shuffle } from 'lucide-react';
import { StyleDefinition } from '../types';
import { useFavorites } from '../hooks/useLocalStorage';

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
  const { isFavorite, toggleFavorite, favorites } = useFavorites();
  const [groupFilter, setGroupFilter] = useState<string>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    
    // Get current index in filteredStyles
    const currentIndex = styles.findIndex(s => s.id === selectedId);
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex + 1;
      if (nextIndex >= styles.length) nextIndex = 0; // Loop to start
    } else {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) nextIndex = styles.length - 1; // Loop to end
    }

    e.preventDefault();
    onSelect(styles[nextIndex]);
  }, [selectedId, styles, onSelect]);

  // Attach keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Get unique groups
  const groups = useMemo(() => {
    const uniqueGroups = [...new Set(styles.map(s => s.group))];
    return uniqueGroups.sort();
  }, [styles]);

  const filteredStyles = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return styles.filter(s => {
      // Text search (name, group, tags)
      const matchesSearch = 
        s.name.toLowerCase().includes(term) || 
        s.group.toLowerCase().includes(term) ||
        s.tags.some(tag => tag.toLowerCase().includes(term));
      
      // Group filter
      const matchesGroup = groupFilter === 'all' || s.group === groupFilter;
      
      // Favorites filter
      const matchesFavorites = !showFavoritesOnly || favorites.includes(s.id);
      
      return matchesSearch && matchesGroup && matchesFavorites;
    });
  }, [styles, searchTerm, groupFilter, showFavoritesOnly, favorites]);

  const groupedStyles = useMemo(() => {
    const grouped: Record<string, StyleDefinition[]> = {};
    filteredStyles.forEach(style => {
      if (!grouped[style.group]) {
        grouped[style.group] = [];
      }
      grouped[style.group].push(style);
    });
    return grouped;
  }, [filteredStyles]);

  const handleRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * styles.length);
    onSelect(styles[randomIndex]);
  };

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

      {/* Search & Filters */}
      <div className="p-3 border-b border-sidebar-border bg-sidebar space-y-2">
        {/* Search Input */}
        <div className="relative group">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-accent transition-colors" />
          <input
            type="text"
            placeholder="Search styles, tags..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#18181b] border border-[#3f3f46] text-zinc-200 pl-9 pr-3 py-2 rounded-lg text-xs outline-none focus:border-accent transition-all placeholder:text-zinc-600"
            aria-label="Buscar estilos"
          />
        </div>

        {/* Filter Row */}
        <div className="flex gap-2">
          {/* Group Filter */}
          <div className="relative flex-1">
            <Filter size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <select
              value={groupFilter}
              onChange={(e) => setGroupFilter(e.target.value)}
              className="w-full bg-[#18181b] border border-[#3f3f46] text-zinc-300 pl-7 pr-2 py-1.5 rounded-md text-[11px] outline-none focus:border-accent appearance-none cursor-pointer"
            >
              <option value="all">All Groups</option>
              {groups.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>

          {/* Favorites Toggle */}
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`px-2.5 py-1.5 rounded-md border text-[11px] flex items-center gap-1 transition-all ${
              showFavoritesOnly 
                ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400' 
                : 'bg-[#18181b] border-[#3f3f46] text-zinc-500 hover:text-zinc-300'
            }`}
            title="Show favorites only"
          >
            <Star size={12} fill={showFavoritesOnly ? 'currentColor' : 'none'} />
            {favorites.length}
          </button>

          {/* Random Button */}
          <button
            onClick={handleRandomStyle}
            className="px-2.5 py-1.5 rounded-md border bg-[#18181b] border-[#3f3f46] text-zinc-500 hover:text-accent hover:border-accent/50 transition-all"
            title="Random style"
          >
            <Shuffle size={12} />
          </button>
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
                <div key={style.id} className="flex items-center group">
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(style.id);
                    }}
                    className={`p-1.5 rounded transition-all ${
                      isFavorite(style.id) 
                        ? 'text-yellow-400' 
                        : 'text-zinc-600 opacity-0 group-hover:opacity-100 hover:text-yellow-400'
                    }`}
                    title={isFavorite(style.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Star size={12} fill={isFavorite(style.id) ? 'currentColor' : 'none'} />
                  </button>

                  {/* Style Button */}
                  <button
                    onClick={() => onSelect(style)}
                    role="option"
                    aria-selected={selectedId === style.id}
                    className={`
                      flex-1 flex items-center justify-between px-2 py-2 rounded-md text-[13px] text-left transition-all duration-200
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
                </div>
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
