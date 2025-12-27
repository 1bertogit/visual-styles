import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PreviewPane from './components/PreviewPane';
import PromptConsole from './components/PromptConsole';
import { styles } from './data/styles';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      
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
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Visual Preview */}
        <div className="flex-1 overflow-hidden relative">
          <PreviewPane style={selectedStyle} />
        </div>

        {/* Prompt Output */}
        <PromptConsole style={selectedStyle} />
      </main>
    </div>
  );
};

export default App;
