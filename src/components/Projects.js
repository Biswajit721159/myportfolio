import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from '@mui/icons-material/Launch';

const projectsData = [
  {
    name: "NOTE BOOK",
    type: "Personal Project",
    description: "Built a scalable multi-tenant SaaS platform featuring dynamic schema design, customizable templates, advanced search, role-based access control, and secure authentication with flexible data handling via dynamic forms and grids.",
    tech: ["React", "Node.js", "Express", "MongoDB", "SaaS"],
    liveUrl: "https://esheet-3k6k.vercel.app/"
  },
  {
    name: "QUALITY-FURNITURE",
    type: "Personal Project",
    description: "Developed a full-featured e-commerce platform for furniture shopping with user functionalities including authentication, cart, wishlist, orders, profile, and recent views, along with an admin panel supporting complete product and order management via CRUD operations.",
    tech: ["MERN Stack", "Redux", "Tailwind CSS", "Admin Panel"],
    githubUrl: "https://github.com/Biswajit721159/quality-furniture", 
    liveUrl: "https://quality-furnitureforkolkata.vercel.app/"
  },
  {
    name: "BUS-BOOKING",
    type: "Personal Project",
    description: "I created a bus ticket booking application where users can book a ticket by specifying the source and destination stations. Features such as login, register, booking list, wishlist, and master list are present. Additionally, there are bus owner admin panels and an app admin panel.",
    tech: ["React", "Node.js", "Express", "Redux", "MongoDB", "MUI", "Tailwind CSS"],
    githubUrl: "https://github.com/Biswajit721159/Book_Bus",
    liveUrl: "https://book-bus-forkolkata.vercel.app/"
  },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-dark-bg relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-dark-muted max-w-2xl mx-auto text-lg">
                        Some of my recent personal projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="h-48 bg-dark-border/30 relative flex items-center justify-center overflow-hidden">
                                {/* Abstract Placeholder for project image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500"></div>
                                <h3 className="text-3xl font-bold text-white/20 z-10 tracking-widest">{project.name}</h3>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                                        <p className="text-sm font-medium text-primary mt-1">{project.type}</p>
                                    </div>
                                    <div className="flex space-x-3">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="text-dark-muted hover:text-white transition-colors" target="_blank" rel="noreferrer" title="View Source">
                                                <GitHubIcon fontSize="small" />
                                            </a>
                                        )}
                                        <a href={project.liveUrl} className="text-dark-muted hover:text-white transition-colors" target="_blank" rel="noreferrer" title="Live Preview">
                                            <LaunchIcon fontSize="small" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium text-dark-muted bg-dark-bg px-2.5 py-1 rounded border border-dark-border">
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

export default Projects;