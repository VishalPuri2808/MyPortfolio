import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  
  const skills = [
    "Java", "Python", "JavaScript", "TypeScript", "React", "Node.js", 
    "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "MongoDB"
  ];

  return (
    <section id="about" className="min-h-screen pt-24 md:pl-16 px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-darker z-0"></div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="code-block mb-6">
              <pre className="text-sm md:text-base">
{`{
  "name": "Vishal Puri ",
  "role": "Software Engineer",
  "experience": "3 years",
  "skills": [
    "Java", "Python", "AWS", 
    "DevOps", "React", "Kubernetes"
  ],
  "education": {
    "degree": "M.S. Computer Science",
    "university": "University of Texas at Arlington",
    "year": 2025
  }
}`}
              </pre>
            </div>
            
            <p className="text-gray-300 mb-6">
              I'm a passionate software engineer with expertise in full-stack development and cloud technologies. 
              With 5 years of experience building scalable applications and implementing DevOps practices, 
              I enjoy solving complex problems and creating efficient, user-friendly solutions.
            </p>
            
            <button 
              className="btn-outline flex items-center gap-2"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'More About Me'}
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-200">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-code-bg border border-gray-700 rounded-full text-sm text-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {expanded && (
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-200">My Journey</h3>
                <p className="text-gray-300 mb-4">
                  My journey in software development began during my undergraduate studies when I built my first web application.
                  Since then, I've worked with startups and enterprise companies, developing everything from mobile apps to cloud infrastructure.
                </p>
                <p className="text-gray-300">
                  Outside of work, I contribute to open-source projects and mentor junior developers.
                  I'm constantly learning new technologies and methodologies to stay at the forefront of the industry.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;