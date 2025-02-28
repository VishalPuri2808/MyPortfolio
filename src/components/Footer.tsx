import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle dark mode in the app
  };
  
  return (
    <footer className="bg-dark border-t border-gray-800 py-6 md:pl-16 px-4 md:px-8 lg:px-16 relative">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          <p>&copy; 2025 Vishal Puri | Built with ❤️ and Code</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 bg-code-bg rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-300" />}
          </button>
          
          <div className="text-sm text-gray-400">
            Press <kbd className="px-2 py-1 bg-code-bg rounded text-xs">help</kbd> for Easter egg
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;