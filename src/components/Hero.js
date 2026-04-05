import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import leetcodeIcon from "../images/leetcode.png";
import gfgIcon from "../images/GeeksForGeeks.jpeg";
import hrIcon from "../images/hackerRank.webp";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
            {/* Background Blob Elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '2s'}}></div>

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Hi, my name is</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Biswajit Ghosh.
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-dark-muted mb-8 tracking-tight">
                        I build scalable systems.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-dark-muted text-lg leading-relaxed mb-10">
                        I'm a Full Stack Software Engineer with 3 years of experience building scalable MERN Stack applications in production. I specialize in delivering real-time systems, microservices, and cloud-integrated pipelines on AWS. Strong problem-solver with <strong className="text-primary font-semibold">1,200+ LeetCode solutions</strong> (Knight, top 5.5%). Passionate about clean architecture and RESTful API design.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a href="mailto:ghosh.jgec@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors font-medium">
                        <EmailIcon fontSize="small" /> Email Me
                    </a>
                    <a href="tel:6295102811" className="flex items-center gap-2 px-6 py-3 rounded-full border border-dark-border hover:border-primary text-white transition-colors font-medium">
                        <PhoneIcon fontSize="small" /> 6295102811
                    </a>
                    <a href="https://drive.google.com/file/d/1hqbVRdBhgOqpPXu0sFj4zZW5N4hqMqcc/view" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-dark-border hover:border-accent text-white transition-colors font-medium">
                        Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 flex justify-center flex-wrap gap-6"
                >
                    <a href="https://www.linkedin.com/in/biswajit-ghosh-21a415209" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white transition-colors transform hover:scale-110" title="LinkedIn">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="https://github.com/Biswajit721159" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white transition-colors transform hover:scale-110" title="GitHub">
                        <GitHubIcon fontSize="large" />
                    </a>
                    <a href="https://leetcode.com/u/biswajit2329/" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white transition-colors transform hover:scale-110" title="LeetCode">
                         <img src={leetcodeIcon} alt="LeetCode" className="w-8 h-8 rounded" />
                    </a>
                    <a href="https://auth.geeksforgeeks.org/user/bg5050525/practice" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-primary transition-colors transform hover:scale-110" title="GeeksforGeeks">
                        <img src={gfgIcon} alt="GFG" className="w-8 h-8 rounded" />
                    </a>
                    <a href="https://www.hackerrank.com/profile/bg5050525" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-accent transition-colors transform hover:scale-110" title="HackerRank">
                        <img src={hrIcon} alt="HackerRank" className="w-8 h-8 rounded" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
