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
        
        
      </div>
    </footer>
  );
};

export default Footer;