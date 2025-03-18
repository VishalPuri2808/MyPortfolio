import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
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
      period: "Feburary 2022 - July 2023",
      responsibilities: [
        "Developed and deployed serverless functions to automate tasks and integrate services, resulting in reduced infrastructure costs and improved performance.",
        "Implemented monitoring and logging for Lambda functions to ensure reliability.",
        "Established automated backup processes and disaster recovery plans to ensure data integrity and availability.? Regularly tested recovery procedures to validate the effectiveness and reliability of DR plans.",
        "Developed and maintained Terraform scripts to manage infrastructure as code, enabling version control and collaborative infrastructure development.",
        "Deployed and managed Kubernetes clusters using EKS to orchestrate containerized applications, ensuring scalability and reliability. Implemented CI/CD pipelines to streamline the deployment process and reduce downtime.",
        "Provided comprehensive day-to-day support for AWS environments, including troubleshooting, performance tuning, and security management. Implemented monitoring and alerting solutions to proactively identify and resolve issues.",
        "Contributed significantly to the DevOps toolchain, specializing in end-to-end CI/CD pipelines in Jenkins, integration of Ansible for automation, and management of Ansible playbooks.",
        "Experienced in Docker container snapshots, attaching to a running container, managing directory structures, and managing containers."
      ],
      technologies: [
        "Terraform",
        "Kubernetes",
        "EKS",
        "Docker",
        "CI/CD",
        "Jenkins",
        "Ansible",
        "CloudWatch",
        "Backup",
        "Recovery",
        "Security",
        "Performance"]
    },
    {
      id: 2,
      title: "Associate Software Developer",
      company: "GlobalStep Pvt Ltd",
      period: "March 2021 - February 2022",
      responsibilities: [
        "Developed robust front-end solutions using Python, TypeScript, NextJs, and ReactJs, focusing on enhancing user experience while ensuring code maintainability and scalability.",
"Leveraged OpenAI API, to develop applications with Natural Language Processing and Machine Learning functionalities.",
"Led comprehensive testing and debugging procedures to seamlessly integrate TypeScript, Next.js, and React.js components with the OpenAI API, validating prompt engineering strategies and delivering top-tier software solutions.",
"Orchestrated rigorous regression testing protocols, including unit, integration, and end-to-end testing, throughout development and production phases to ensure build stability and reliability.",
"Developed a personalized video recommendation system using Large Language Models (LLM) to analyze video content and match it with user queries and chat interactions via prompts, focused on leadership principles and coaching.",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker","Large Language Models (LLM)", "Testing", "Debugging", "Regression Testing"]
    },
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Market Trend Analysis Using ML-LSTM Model",
      description: "Developed a Market Trend prediction web application using an LSTM (Long Short-Term Memory) model trained on historical stock data. ",
      technologies: ["JavaScript (ES6)", "Flask (app.py)", "Python", "TensorFlow/Keras", "Yahoo Finance API"],
      githubUrl: "https://github.com/VishalPuri2808/Market-Trend-Analysis-Using_ML_LSTM_Model",
      image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "WEBCHATGPT - AI-POWERED CHATBOT",
      description: "ChatEngine with the advanced AI capabilities of OpenAI's GPT-3.5 model.",
      technologies: ["React", "Firebase", "Material UI", "Node.js"],
      githubUrl: "https://github.com/VishalPuri2808/Web-ChatBot",
      image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "CHEF-MATE: ANDROID APPLICATION - KOTLIN",
      description: "A comprehensive dashboard for monitoring CI/CD pipelines and infrastructure metrics.",
      technologies: ["Vue.js", "D3.js", "Express", "Docker", "Prometheus"],
      githubUrl: "https://github.com/VishalPuri2808/chef_mate",
      demoUrl: "https://www.youtube.com/watch?v=VqT-8U_wFT8",
      image: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "REMOTE STORAGE APPLICATION (Cloud based file storage)",
      description: " Created the storage system such that user can store file or data to cloud system.",
      technologies: ["Amazon Web Services (AWS)", "Front-End Development"],
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "HEART DISEASE PREDICTION SYSTEM",
      description: "A machine learning-powered web application using Django and Decision Tree to predict heart disease risk, with patient-doctor appointment management.",
      technologies: ["Python", "Django", "Scikit-learn", "Pandas", "HTML", "CSS", "JavaScript", "Streamlit", "CSV"],
      githubUrl: "https://github.com/VishalPuri2808/Heart-Disease-Prediction-system",
      image: "https://images.unsplash.com/photo-1623134915837-d2fdb4f59035?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "THE CONNECT4 GAME",
      description: "Implemented Connect4 game using depth-limited alpha beta pruning with minimax algorithm",
      technologies: ["Java"],
      githubUrl: "https://github.com/VishalPuri2808/Connect4",
      image: "https://images.unsplash.com/photo-1605712916066-e143c317df72?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-code-bg rounded-full text-xs text-gray-300"
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