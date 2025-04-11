import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University of Texas at Arlington",
      location: "Arlington, TX",
      period: "2023-2025",
      description: "Specialized in Software Engineering and Cloud Computing with a focus on distributed systems and machine learning algorithms.",
      achievements: [
        "GPA: 3.8/4.0",
        "Course Work - Design and Analysis of Algorithms , Software Engineering - Analysis, Design, and Testing, Distributed Systems, Machine Learning, Data Mining "
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Dr. D Y Patil School of Engineering and Technology",
      location: "Pune, India",
      period: "2017 - 2021",
      description: "Comprehensive program covering both hardware and software aspects of computing systems with emphasis on software development methodologies.",
      achievements: [
        "Member of the Students Core Committee 'KAIZEN' for two years, managed technical and cultural festivals.",
        "As CSI(Computer Society of India) President, organized a workshop for 50+ students on website basics using HTML, CSS, JavaScript, and jQuery.", 
        "Actively participated in multiple social service events as an NSS member, including a state-level camp."
      ]
    },
    {
      id: 3,
      degree: "AWS Certified Developer Associate",
      institution: "Amazon Web Services",
      location: "Online",
      period: "2024",
      description: "Professional certification validating expertise in designing distributed systems on AWS.",
      achievements: [
        "Scored 869",
        "Completed advanced labs on serverless architecture"
      ]
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
    <section id="education" className="min-h-screen pt-24 px-4 md:px-8 lg:px-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-darker z-0"></div>
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12">
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {educationItems.map((edu) => (
              <motion.div 
              key={edu.id} 
              className="card relative border-l-4 border-accent pl-6"
              variants={item}
            >
              <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-accent"></div>
            
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Icon + Description */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="hidden md:block mt-1">
                    {edu.id === 3 ? (
                      <Award className="w-10 h-10 text-accent" />
                    ) : (
                      <GraduationCap className="w-10 h-10 text-accent" />
                    )}
                  </div>
            
                  <div>
                    <h3 className="text-xl font-bold text-light">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}, {edu.location}</p>
                    <p className="text-gray-400 mb-4">{edu.description}</p>
            
                    {edu.achievements && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold text-accent mb-2">ACHIEVEMENTS</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
            
                {/* Middle: Badge */}
                {edu.id === 3 && (
                  <div className="flex items-left justify-center md:w-32">
                    <img 
                      src="/badge.png" 
                      alt="AWS Developer Badge"
                      className="w-32 h-auto"
                    />
                  </div>
                )}
            
                {/* Right: Year */}
                <div className="flex items-center text-sm text-gray-400 min-w-fit">
                  <Calendar className="w-4 h-4 mr-1" /> {edu.period}
                </div>
              </div>
            </motion.div>
            
              
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;