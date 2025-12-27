import React, { useState, useRef, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PreviewPane from './components/PreviewPane';
import PromptConsole, { PromptConsoleRef } from './components/PromptConsole';
import CompareMode from './components/CompareMode';
import { styles } from './data/styles';
import { StyleDefinition } from './types';
import { Menu, X, ArrowLeftRight, Keyboard } from 'lucide-react';
import { useKeyboardShortcuts, keyboardHints } from './hooks/useKeyboardShortcuts';
import { useFavorites } from './hooks/useLocalStorage';

const App: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Compare mode state
  const [compareMode, setCompareMode] = useState(false);
  const [compareStyles, setCompareStyles] = useState<[StyleDefinition, StyleDefinition] | null>(null);
  const [compareSelection, setCompareSelection] = useState<StyleDefinition | null>(null);
  
  // Show keyboard hints
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);

  // Refs
  const searchInputRef = useRef<HTMLInputElement>(null);
  const promptConsoleRef = useRef<PromptConsoleRef>(null);

  // Favorites hook
  const { toggleFavorite } = useFavorites();

  // Keyboard shortcuts handlers
  const handleFocusSearch = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(selectedStyle.id);
  }, [selectedStyle.id, toggleFavorite]);

  const handleCopyPrompt = useCallback(() => {
    promptConsoleRef.current?.copyPrompt();
  }, []);

  const handleEscape = useCallback(() => {
    if (compareMode) {
      setCompareMode(false);
      setCompareStyles(null);
      setCompareSelection(null);
    }
    setShowKeyboardHints(false);
  }, [compareMode]);

  const handleNextStyle = useCallback(() => {
    const currentIndex = styles.findIndex(s => s.id === selectedStyle.id);
    const nextIndex = (currentIndex + 1) % styles.length;
    setSelectedStyle(styles[nextIndex]);
  }, [selectedStyle.id]);

  const handlePrevStyle = useCallback(() => {
    const currentIndex = styles.findIndex(s => s.id === selectedStyle.id);
    const prevIndex = currentIndex === 0 ? styles.length - 1 : currentIndex - 1;
    setSelectedStyle(styles[prevIndex]);
  }, [selectedStyle.id]);

  // URL state synchronization
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const styleId = params.get('style');
    if (styleId) {
      const style = styles.find(s => s.id === parseInt(styleId));
      if (style && style.id !== selectedStyle.id) {
        setSelectedStyle(style);
      }
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (selectedStyle.id.toString() !== params.get('style')) {
      params.set('style', selectedStyle.id.toString());
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [selectedStyle.id]);

  // Register keyboard shortcuts
  useKeyboardShortcuts({
    onSearch: handleFocusSearch,
    onFavorite: handleToggleFavorite,
    onCopy: handleCopyPrompt,
    onEscape: handleEscape,
    onNextStyle: handleNextStyle,
    onPrevStyle: handlePrevStyle,
  });

  // Handle compare mode selection
  const handleCompareSelect = (style: StyleDefinition) => {
    if (!compareSelection) {
      // First selection
      setCompareSelection(style);
    } else if (compareSelection.id !== style.id) {
      // Second selection - start comparison
      setCompareStyles([compareSelection, style]);
      setCompareMode(true);
      setCompareSelection(null);
    }
  };

  const handleCancelCompare = () => {
    setCompareSelection(null);
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    setSidebarOpen(true); // Open sidebar to show filtered results
    searchInputRef.current?.focus();
  };

  return (
    <div className="flex h-screen w-full bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      
      {/* Compare Mode Overlay */}
      {compareMode && compareStyles && (
        <CompareMode 
          styles={compareStyles} 
          onClose={() => {
            setCompareMode(false);
            setCompareStyles(null);
          }} 
        />
      )}

      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-sidebar border border-sidebar-border rounded-md text-white shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <Sidebar 
        styles={styles} 
        selectedId={selectedStyle.id} 
        onSelect={(style) => {
          setSelectedStyle(style);
          setSidebarOpen(false);
        }}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isOpen={sidebarOpen}
        searchInputRef={searchInputRef}
        compareSelection={compareSelection}
        onCompareSelect={handleCompareSelect}
        onCancelCompare={handleCancelCompare}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Compare Selection Banner */}
        {compareSelection && (
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-accent/20 border-b border-accent/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-accent text-sm">
              <ArrowLeftRight size={16} />
              <span>Comparing: <strong>{compareSelection.name}</strong></span>
              <span className="text-accent/60">— Select another style to compare</span>
            </div>
            <button 
              onClick={handleCancelCompare}
              className="text-xs text-accent/80 hover:text-accent px-2 py-1 rounded border border-accent/30 hover:bg-accent/10"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Visual Preview */}
        <div className={`flex-1 overflow-hidden relative ${compareSelection ? 'pt-10' : ''}`}>
          <PreviewPane style={selectedStyle} onTagClick={handleTagClick} />
        </div>

        {/* Prompt Output */}
        <PromptConsole ref={promptConsoleRef} style={selectedStyle} />

        {/* Keyboard Hints Toggle */}
        <button
          onClick={() => setShowKeyboardHints(!showKeyboardHints)}
          className="fixed bottom-[300px] right-4 p-2 bg-zinc-800/80 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all z-20"
          title="Keyboard shortcuts"
        >
          <Keyboard size={16} />
        </button>

        {/* Keyboard Hints Panel */}
        {showKeyboardHints && (
          <div className="fixed bottom-[340px] right-4 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl p-3 z-20">
            <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2 font-bold">Shortcuts</h4>
            <div className="space-y-1">
              {keyboardHints.map(hint => (
                <div key={hint.key} className="flex items-center justify-between gap-4 text-xs">
                  <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-600 rounded text-[10px] text-zinc-300 font-mono">
                    {hint.key}
                  </kbd>
                  <span className="text-zinc-400">{hint.action}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

