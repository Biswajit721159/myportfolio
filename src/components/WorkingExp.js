import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: "Software Engineer",
        company: "Riktam Technologies",
        period: "Jun 2023 - Present",
        location: "Hyderabad, IN",
        tech: [
            "React Js", "Node Js", "Express Js", "Redux Js", "Open AI", 
            "HTML", "CSS", "MUI", "Tailwind Css", "MongoDb", 
            "Git / Github", "Socket.io", "AWS SES", "AWS Lambda", "AWS CloudWatch"
        ],
        achievements: [
            "Architected and delivered a full-stack DSA coding assessment platform serving 500+ candidates, enabling admins to configure problems, code stubs, test cases, and secure assessment links — reducing manual screening effort by ~60%.",
            "Engineered a dynamic form-builder module supporting 9 custom field types (Text, Email, File, Dropdown, Date, etc.) with client-side validation and flexible MongoDB schema, cutting registration configuration time by ~70% for non-technical admins.",
            "Built a low-latency real-time support chat system using WebSocket (Socket.io) within a dedicated Node.js microservice, establishing dynamic room-based sessions that reduced average candidate issue-resolution time to under 2 minutes per interaction.",
            "Designed an event-driven email notification pipeline using AWS SES, Lambda, and CloudWatch scheduled triggers, delivering 99.9% on-time reminders (24hr, 6hr, 1hr pre-assessment) across 1,000+ monthly assessment notifications."
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Riktam Technologies",
        period: "Feb 2023 - Mar 2023",
        location: "Hyderabad, IN",
        tech: ["React", "TypeScript", "Django", "AWS EC2", "RESTful API"],
        achievements: [
            "Built a full-stack property listing platform using React, TypeScript, and Django, featuring search and filtering by price range, location, property type, and number of bedrooms across houses, flats, and villas.",
            "Developed both frontend and backend services, implementing responsive UI components in React with TypeScript and RESTful APIs in Django.",
            "Deployed the application on AWS EC2, configuring the server environment for reliable hosting and scalable production deployment."
        ]
    }
];

const WorkingExp = () => {
    return (
        <section id="experience" className="py-20 px-6 md:px-12 bg-dark-bg relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Work <span className="text-primary">Experience</span></h2>
                    <p className="text-dark-muted max-w-2xl mx-auto text-lg">
                        My professional journey and key impact areas.
                    </p>
                </motion.div>

                <div className="relative border-l border-dark-border ml-3 md:ml-6 mt-8">
                    {experienceData.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-12 ml-8 md:ml-12 relative"
                        >
                            <span className="absolute -left-[45px] md:-left-[57px] top-1 h-6 w-6 rounded-full bg-dark-bg border border-primary flex items-center justify-center z-10">
                                <span className="h-3 w-3 rounded-full bg-primary"></span>
                            </span>
                            
                            <div className="bg-dark-card border border-dark-border p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                                        <h4 className="text-lg text-primary font-medium mt-1">{exp.company}</h4>
                                    </div>
                                    <div className="mt-2 md:mt-0 md:text-right">
                                        <span className="inline-block px-3 py-1 bg-dark-bg text-dark-muted rounded-full text-xs font-semibold tracking-wider uppercase border border-dark-border mb-1">{exp.period}</span>
                                        <p className="text-sm text-dark-muted">{exp.location}</p>
                                    </div>
                                </div>
                                
                                <ul className="space-y-3 mt-6 mb-6">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-dark-muted flex items-start text-[15px]">
                                            <span className="text-primary mr-3 mt-1 text-sm">▹</span>
                                            <span className="leading-relaxed">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dark-border/50">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-[#38bdf8] bg-[#0ea5e9]/10 px-2.5 py-1.5 rounded border border-[#0ea5e9]/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkingExp;
