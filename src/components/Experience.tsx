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
      title: "AI SOFTWARE DEVELOPER",
      company: "AMOTIONS AI",
      period: "Feb 2025 - Present",
      responsibilities: [
        "Built customer-facing modules in React with TypeScript/JavaScript backed by Java Spring Boot REST APIs, lifting conversion by 11% and improving LCP by 38%.",
        "Orchestrated containerized microservices on AWS EKS (Kubernetes) using Docker, and engineered automated CI/CD via GitHub Actions cutting change lead time by 30%.", 
        "Migrated reporting from MySQL to PostgreSQL; rewrote critical SQL using window functions and proper indexing, cutting p95 response from 420ms to 230ms.",
        "Optimized a Node.js (Express) notification service using backpressure, batching, and idempotent retries, reducing message lag by 54% at peak.",
        "Implemented cross-cloud backups from AWS S3 to GCP Cloud Storage with lifecycle/retention policies, achieving 99.95% restore success in drills.",
        "Standardized branching, reviews and sprint rituals, mentored juniors and aligned stakeholders, lowering merge defects 22% and raising on-time sprint delivery 9%."
],
      technologies: [
        "Java",
        "TypeScript",
        "NextJs",
        "ReactJs",
        "OpenAI ",
        "JSON",
        "MySQL",
        "Large Language Models"]
    },
    {
      id: 1,
      title: "Software Developer",
      company: "ACCENTURE PVT LTD",
      period: "Feb 2022 - July 2023",
      responsibilities: [
        "Designed and implemented cloud-native solutions on AWS (EC2, EKS, Lambda, S3) using Terraform and Python, cutting infrastructure deployment cycles by 40% while ensuring compliance with security and scalability standards.",
        "Engineered microservices in Java/Spring Boot exposing REST APIs, increasing order-processing throughput 19% while sustaining 99.9% availability.",
        "Architected a React + Node.js portal with typed interfaces, boosting SUS usability scores 17% and reducing front-end defects 28%.",
        "Constructed MySQL schemas, foreign keys, and stored routines; tuned SQL with composite indexes to raise reconciliation accuracy from 92% to 99%.",
        "Containerized workloads with Docker and orchestrated rollouts on Kubernetes (EKS), trimming infra costs 14% through autoscaling and right-sizing.",
        "Streamlined CI/CD using GitHub Actions and contract-first API design, accelerating cadence from biweekly to weekly with zero rollback incidents.",
        "Coordinated requirements workshops with product and QA to clarify acceptance criteria, reducing requirement churn 23% and stabilizing sprint velocity."
  ],
      technologies: [
        "Terraform",
        "Kubernetes",
        "S3 Services",
        "AWS IAM",
        "CI/CD",
        "CLI",
        "Ansible",
        "CloudWatch",
        "Backup",
        "CloudWatch",
        "CloudTrail",
        "ORR"]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "GLOBALSTEP",
      period: "April 2021 - Feb 2022",
      responsibilities: [
        "Designed and executed manual, functional, regression, and smoke test cases to validate application workflows, identify defects, and support stable release cycles.", 
        "Delivered practical demonstrations on AWS services (S3, EC2, Lambda, RDS) and GCP to support new joiners' comprehension of cloud architecture, security, and data management.",
        "Logged, tracked, and verified defects using structured QA processes, collaborating with developers and product teams to reproduce issues and confirm fixes before deployment.",
        "•	Supported end-to-end software quality assurance activities across SDLC phases, improving test coverage, release readiness, and overall product reliability.",
"Assisted in the delivery of cloud computing and big data curriculum, ensuring smooth lab sessions and hands-on assignments for 50+ students, fostering understanding of cloud service models, storage solutions, and data processing frameworks."
],
      technologies: ["Regression","Testing","Cloud", "AWS", "S3","GCP", "EC2", "Lambda","RDS", "Terraform", "CloudFormation"]
    }
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
                <ul className="list-disc  space-y-2 text-gray-400 mb-4">
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
