import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Cpu, Cloud, Layers, GitBranch, Terminal, Smartphone, PenTool as Tool, Shield, Settings, Box } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <Code2 />, color: 'bg-blue-600' },
        { name: 'Java', icon: <Code2 />, color: 'bg-red-600' },
        { name: 'C++', icon: <Code2 />, color: 'bg-purple-600' },
        { name: 'JavaScript', icon: <Code2 />, color: 'bg-yellow-600' },
        { name: 'SQL', icon: <Database />, color: 'bg-green-600' },
        { name: 'PostgreSQL', icon: <Database />, color: 'bg-blue-600' }

      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      skills: [
        { name: 'Spring MVC', icon: <Layers />, color: 'bg-green-500' },
        { name: 'Spring Boot', icon: <Layers />, color: 'bg-green-600' },
        { name: 'Microservices', icon: <Box />, color: 'bg-blue-500' },
        { name: 'Spring Security', icon: <Shield />, color: 'bg-red-500' }
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: <Globe />, color: 'bg-orange-600' },
        { name: 'CSS', icon: <Layers />, color: 'bg-blue-500' },
        { name: 'JavaScript', icon: <Code2 />, color: 'bg-yellow-500' },
        { name: 'Bootstrap', icon: <Layers />, color: 'bg-purple-500' },
        { name: 'jQuery', icon: <Code2 />, color: 'bg-blue-400' }
      ]
    },
    {
      id: 'tools',
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <Box />, color: 'bg-blue-600' },
        { name: 'Kubernetes', icon: <Settings />, color: 'bg-blue-500' },
        { name: 'Terraform', icon: <Tool />, color: 'bg-purple-600' },
        { name: 'Jenkins', icon: <Settings />, color: 'bg-red-500' },
        { name: 'ArgoCD', icon: <GitBranch />, color: 'bg-blue-400' },
        { name: 'Ansible', icon: <Terminal />, color: 'bg-red-600' },
        { name: 'Git', icon: <GitBranch />, color: 'bg-orange-600' },
        { name: 'Maven', icon: <Tool />, color: 'bg-orange-500' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms & Services',
      skills: [
        { name: 'AWS', icon: <Cloud />, color: 'bg-orange-500' },
        { name: 'Azure', icon: <Cloud />, color: 'bg-blue-600' },
        { name: 'GCP', icon: <Cloud />, color: 'bg-red-500' }
      ]
    },
    {
      id: 'aws-services',
      title: 'AWS Services',
      skills: [
        { name: 'EKS/ECS', icon: <Cpu />, color: 'bg-orange-600' },
        { name: 'Lambda', icon: <Server />, color: 'bg-orange-500' },
        { name: 'S3/CloudFront', icon: <Database />, color: 'bg-orange-400' },
        { name: 'RDS', icon: <Database />, color: 'bg-blue-500' },
        { name: 'API Gateway', icon: <Globe />, color: 'bg-purple-500' },
        { name: 'CloudWatch', icon: <Terminal />, color: 'bg-blue-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen pt-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker to-dark z-0"></div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-light mb-6">{category.title}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className={`w-16 h-16 ${skill.color} rounded-lg flex items-center justify-center mb-2 shadow-lg`}>
                      <div className="text-darker">
                        {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-8 h-8' })}
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 card">
          <h3 className="text-xl font-bold text-light mb-6">Skill Proficiency</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Cloud & DevOps</span>
                <span className="text-accent">95%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Backend Development</span>
                <span className="text-primary">90%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Infrastructure as Code</span>
                <span className="text-secondary">85%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Frontend Development</span>
                <span className="text-accent">80%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Database Management</span>
                <span className="text-primary">85%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;