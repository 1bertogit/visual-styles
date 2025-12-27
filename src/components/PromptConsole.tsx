import React, { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { Terminal, Copy, CheckCircle, RotateCcw } from 'lucide-react';
import { StyleDefinition } from '../types';

interface PromptConsoleProps {
  style: StyleDefinition;
}

export interface PromptConsoleRef {
  copyPrompt: () => void;
}

const PromptConsole = forwardRef<PromptConsoleRef, PromptConsoleProps>(({ style }, ref) => {
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  // Generate original base prompt
  const generateBasePrompt = useCallback((s: StyleDefinition) => {
    return `Act as an Expert Front-End Engineer.
GOAL: Create a website section or UI component in HTML/CSS using the '${s.name}' aesthetic.

VISUAL STYLE PROMPT:
${s.prompt}

REQUIREMENTS:
1. Use semantic HTML5.
2. Use embedded CSS (<style>).
3. Be pixel-perfect regarding the visual style details.
4. Use Flexbox or Grid for layout.
5. Ensure accessibility and responsiveness.`;
  }, []);

  useEffect(() => {
    const newPrompt = generateBasePrompt(style);
    setPromptText(newPrompt);
    setOriginalPrompt(newPrompt);
    setIsEdited(false);
    setCopied(false);
  }, [style, generateBasePrompt]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [promptText]);

  // Expose copy function to parent via ref
  useImperativeHandle(ref, () => ({
    copyPrompt: handleCopy
  }), [handleCopy]);

  const handleReset = () => {
    setPromptText(originalPrompt);
    setIsEdited(false);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptText(e.target.value);
    setIsEdited(e.target.value !== originalPrompt);
  };

  return (
    <div className="bg-[#0c0c0e] border-t border-sidebar-border flex flex-col h-[280px] shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-sidebar-border/50 gap-3">
        <div className="flex items-center gap-2 text-zinc-400 shrink-0">
          <Terminal size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider">Prompt</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {isEdited && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-md hover:bg-amber-500/20 transition-all"
              title="Reset to original"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          )}

          <button 
            onClick={handleCopy}
            aria-label={copied ? 'Copiado' : 'Copiar prompt'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold transition-all
              ${copied ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-white text-black hover:bg-zinc-200'}`}
          >
            {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
            {copied ? 'COPIED' : 'COPY'}
            <span className="text-zinc-500 font-normal hidden sm:inline">(C)</span>
          </button>
        </div>
      </div>
      
      {/* Editable Textarea */}
      <div className="flex-1 relative">
        <textarea
          value={promptText}
          onChange={handleTextChange}
          className={`w-full h-full bg-[#0c0c0e] text-zinc-300 font-mono text-xs leading-relaxed p-4 resize-none focus:outline-none focus:ring-1 focus:ring-accent/50 scrollbar-thin transition-all ${
            isEdited ? 'border-l-2 border-l-amber-500' : ''
          }`}
          spellCheck={false}
          placeholder="Your prompt will appear here..."
        />
        {isEdited && (
          <div className="absolute top-2 right-4 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
            Edited
          </div>
        )}
      </div>
    </div>
  );
});

PromptConsole.displayName = 'PromptConsole';

export default PromptConsole;
