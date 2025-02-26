import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Server, Globe, Cpu, Cloud, 
  Layers, GitBranch, Terminal, Smartphone, Figma, 
  LineChart, ShieldCheck, Workflow, Zap
} from 'lucide-react';

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
        { name: 'JavaScript', icon: <Code2 />, color: 'bg-yellow-600' },
        { name: 'TypeScript', icon: <Code2 />, color: 'bg-blue-600' },
        { name: 'Python', icon: <Code2 />, color: 'bg-green-600' },
        { name: 'Java', icon: <Code2 />, color: 'bg-red-600' },
        { name: 'SQL', icon: <Database />, color: 'bg-purple-600' },
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <Code2 />, color: 'bg-blue-400' },
        { name: 'Vue.js', icon: <Code2 />, color: 'bg-green-400' },
        { name: 'HTML5', icon: <Globe />, color: 'bg-orange-600' },
        { name: 'CSS3', icon: <Layers />, color: 'bg-blue-500' },
        { name: 'Tailwind CSS', icon: <Figma />, color: 'bg-teal-500' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <Server />, color: 'bg-green-600' },
        { name: 'Express', icon: <Server />, color: 'bg-gray-600' },
        { name: 'Spring Boot', icon: <Zap />, color: 'bg-green-500' },
        { name: 'Django', icon: <Server />, color: 'bg-emerald-700' },
        { name: 'GraphQL', icon: <Database />, color: 'bg-pink-600' },
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <Cloud />, color: 'bg-orange-500' },
        { name: 'Docker', icon: <Cpu />, color: 'bg-blue-600' },
        { name: 'Kubernetes', icon: <Workflow />, color: 'bg-blue-500' },
        { name: 'CI/CD', icon: <GitBranch />, color: 'bg-green-600' },
        { name: 'Terraform', icon: <ShieldCheck />, color: 'bg-purple-600' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <Database />, color: 'bg-blue-700' },
        { name: 'MongoDB', icon: <Database />, color: 'bg-green-700' },
        { name: 'Redis', icon: <Database />, color: 'bg-red-600' },
        { name: 'MySQL', icon: <Database />, color: 'bg-blue-600' },
        { name: 'DynamoDB', icon: <Database />, color: 'bg-yellow-600' },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <GitBranch />, color: 'bg-orange-600' },
        { name: 'VS Code', icon: <Terminal />, color: 'bg-blue-500' },
        { name: 'Jira', icon: <LineChart />, color: 'bg-blue-600' },
        { name: 'Figma', icon: <Figma />, color: 'bg-purple-500' },
        { name: 'Mobile Dev', icon: <Smartphone />, color: 'bg-gray-600' },
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
                <span className="text-gray-300">Frontend Development</span>
                <span className="text-accent">90%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Backend Development</span>
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
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Cloud & DevOps</span>
                <span className="text-secondary">80%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-secondary"
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
                <span className="text-accent">75%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">UI/UX Design</span>
                <span className="text-primary">70%</span>
              </div>
              <div className="h-2 bg-code-bg rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
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