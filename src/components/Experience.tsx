import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Software Developer",
      company: "Accenture Pvt Ltd",
      period: "2022 - Present",
      description: "Leading the development of cloud-native applications and implementing CI/CD pipelines. Mentoring junior developers and architecting scalable solutions.",
      technologies: ["AWS", "Kubernetes", "React", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Associate Software Developer",
      company: "GlobalStep Pvt Ltd",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack web applications. Collaborated with cross-functional teams to deliver high-quality software products.",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"]
    }
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Cloud Task Manager",
      description: "A task management application with real-time collaboration features and cloud synchronization.",
      technologies: ["React", "Firebase", "Material UI", "Node.js"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo-link.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "DevOps Dashboard",
      description: "A comprehensive dashboard for monitoring CI/CD pipelines and infrastructure metrics.",
      technologies: ["Vue.js", "D3.js", "Express", "Docker", "Prometheus"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 3,
      title: "AI Code Assistant",
      description: "An AI-powered code assistant that helps developers write better code with real-time suggestions.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "WebSockets"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo-link.com",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="min-h-screen pt-24 md:pl-16 px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker to-dark z-0"></div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12">
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id} 
                className="card relative border-l-4 border-primary pl-6"
                variants={item}
              >
                <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold text-light">{exp.title}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-code-bg rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <h2 className="section-title mt-20">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="card overflow-hidden flex flex-col h-full"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden rounded-md mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-code-bg rounded-md text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;