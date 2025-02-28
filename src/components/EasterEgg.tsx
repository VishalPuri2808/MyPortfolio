import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EasterEgg: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'h' && e.altKey) {
        setIsVisible(true);
      }
      
      // Also show when typing "help"
      if (e.key === 'p' && 
          e.timeStamp - (window as any).lastKeyTime < 500 && 
          (window as any).lastKey === 'l' && 
          (window as any).secondLastKey === 'e' && 
          (window as any).thirdLastKey === 'h') {
        setIsVisible(true);
      }
      
      (window as any).thirdLastKey = (window as any).secondLastKey;
      (window as any).secondLastKey = (window as any).lastKey;
      (window as any).lastKey = e.key;
      (window as any).lastKeyTime = e.timeStamp;
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-dark border border-gray-700 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-mono text-primary">Developer Console</h3>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-white">help</span>
              </div>
              
              <div className="text-gray-300 mb-6">
                <p className="mb-2">Available commands:</p>
                <ul className="space-y-2 ml-4">
                  <li><span className="text-yellow-400">about</span> - Display detailed information about me</li>
                  <li><span className="text-yellow-400">skills</span> - List all my technical skills</li>
                  <li><span className="text-yellow-400">contact</span> - Show contact information</li>
                  <li><span className="text-yellow-400">projects</span> - Display my featured projects</li>
                  <li><span className="text-yellow-400">clear</span> - Clear the console</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-white">about</span>
              </div>
              
              <div className="text-gray-300 mb-6">
                <p>Hello! I'm Vishal Puri, a passionate software engineer with 3 years of experience.</p>
                <p className="mt-2">I specialize in building scalable web applications and implementing DevOps practices.</p>
                <p className="mt-2">When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.</p>
              </div>
              
              <div className="mb-4">
                <span className="text-green-400">$ </span>
                <span className="text-white">skills</span>
              </div>
              
              <div className="text-gray-300">
                <pre className="overflow-x-auto">
{`{
  "languages": ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  "frontend": ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
  "backend": ["Node.js", "Express", "Spring Boot", "Django"],
  "cloud": ["AWS", "GCP", "Azure"],
  "devops": ["Docker", "Kubernetes", "CI/CD", "Terraform"],
  "databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;