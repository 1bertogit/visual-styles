import { useEffect, useCallback } from 'react';

interface KeyboardShortcutHandlers {
  onSearch?: () => void;
  onFavorite?: () => void;
  onCopy?: () => void;
  onEscape?: () => void;
  onNextStyle?: () => void;
  onPrevStyle?: () => void;
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isInputFocused = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT';
    
    // Cmd/Ctrl + K → Focus search (always works)
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      handlers.onSearch?.();
      return;
    }

    // Escape → Exit modes
    if (event.key === 'Escape') {
      handlers.onEscape?.();
      return;
    }

    // Skip other shortcuts if input is focused
    if (isInputFocused) return;

    // F → Toggle favorite
    if (event.key === 'f' || event.key === 'F') {
      event.preventDefault();
      handlers.onFavorite?.();
      return;
    }

    // C → Copy prompt
    if (event.key === 'c' || event.key === 'C') {
      event.preventDefault();
      handlers.onCopy?.();
      return;
    }

    // Arrow keys for navigation
    if (event.key === 'ArrowDown' || event.key === 'j') {
      event.preventDefault();
      handlers.onNextStyle?.();
      return;
    }

    if (event.key === 'ArrowUp' || event.key === 'k') {
      event.preventDefault();
      handlers.onPrevStyle?.();
      return;
    }
  }, [handlers]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// Helper component to show keyboard hints
export const keyboardHints = [
  { key: '⌘K', action: 'Search' },
  { key: 'F', action: 'Favorite' },
  { key: 'C', action: 'Copy' },
  { key: '↑↓', action: 'Navigate' },
  { key: 'Esc', action: 'Close' },
];
