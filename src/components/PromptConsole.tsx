import React, { useState, useEffect } from 'react';
import { Terminal, Copy, CheckCircle } from 'lucide-react';
import { StyleDefinition } from '../types';

interface PromptConsoleProps {
  style: StyleDefinition;
}

const PromptConsole: React.FC<PromptConsoleProps> = ({ style }) => {
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState('');

  useEffect(() => {
    const fullPrompt = `Act as an Expert Front-End Engineer.
GOAL: Create a Hero Section in HTML/CSS based on the '${style.name}' style.

VISUAL STYLE PROMPT:
${style.prompt}

REQUIREMENTS:
1. Use semantic HTML5.
2. Use embedded CSS (<style>).
3. Be pixel-perfect regarding the prompt's details.
4. Use Flexbox or Grid for layout.
5. Ensure accessibility and responsiveness.`;

    setPromptText(fullPrompt);
    setCopied(false);
  }, [style]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-[#0c0c0e] border-t border-sidebar-border flex flex-col h-[280px] shrink-0">
      <div className="flex items-center justify-between px-6 py-3 border-b border-sidebar-border/50">
        <div className="flex items-center gap-2 text-zinc-400">
          <Terminal size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider">Prompt Console</span>
        </div>
        
        <button 
          onClick={handleCopy}
          aria-label={copied ? 'Copiado' : 'Copiar prompt'}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold transition-all
            ${copied ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-white text-black hover:bg-zinc-200'}`}
        >
          {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
          {copied ? 'COPIED' : 'COPY PROMPT'}
        </button>
      </div>
      
      <div className="flex-1 relative">
        <textarea
          readOnly
          value={promptText}
          className="w-full h-full bg-[#0c0c0e] text-zinc-300 font-mono text-xs leading-relaxed p-6 resize-none focus:outline-none scrollbar-thin"
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default PromptConsole;
