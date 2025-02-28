import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-16 md:pt-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker to-dark z-0"></div>
      
      <motion.div 
        className="w-full md:w-1/2 mb-10 md:mb-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-wrap items-center">
        <TypeAnimation
            sequence={[
              'Hi,',
              1000,
              'Namaste,',
              1000,
              'Bonjour,',
              1000,
              'Ciao,',
              1000,
              'Hallo,',
              1000,
              'Hola,',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
          />
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold"> I'm <span className="text-primary">V</span>ishal Puri</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineer | Cloud & DevOps | Full Stack Developer
        </h2>
        
        <div className="text-lg text-gray-400 mb-8 font-mono">
          <TypeAnimation
            sequence={[
              'Java',
              1000,
              'Python',
              1000,
              'JavaScript',
              1000,
              'React',
              1000,
              'NodeJS',
              1000,
              'AWS',
              1000,
              'Docker',
              1000,
              'Kubernetes',
              1000,
              'DevOps',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent"
          />
        </div>
        
        <div className="flex flex-wrap gap-4 mb-2">
          <button className="btn-primary">Contact Me</button>
          <button className="btn-outline flex items-center gap-2">
            <Download className="w-4 h-4" /> Resume
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
          <div className="relative bg-dark rounded-full overflow-hidden border border-gray-800 w-64 h-64 md:w-80 md:h-80">
            <img 
              src="src\components\phto.png" 
              alt="Vishal Puri" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;