import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
    icon: "💻"
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Node.js", "Express.js", "React.js", "Redux", "Tailwind CSS", "MUI", "Django"],
    icon: "⚛️"
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "AWS Lambda", "AWS SES", "AWS CloudWatch", "AWS EC2"],
    icon: "☁️"
  },
  {
    category: "Other",
    skills: ["DSA", "RESTful API", "Microservices", "OOP", "HTML", "CSS", "Git/GitHub"],
    icon: "🛠️"
  }
];

const About = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-12 bg-dark-bg relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-dark-muted max-w-2xl mx-auto text-lg">
                        My toolkit for building scalable, high-performance applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{group.icon}</span>
                                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill, sIndex) => (
                                    <span 
                                        key={sIndex} 
                                        className="px-4 py-2 bg-dark-bg text-dark-muted rounded-lg text-sm border border-dark-border hover:border-primary hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
