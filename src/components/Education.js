import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Jalpaiguri Government Engineering College",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "2019 - 2023",
    location: "Jalpaiguri, IN",
    score: "8.73/10"
  },
  {
    institution: "Rohini C. R. D. High School",
    degree: "Higher Secondary Education (Science)",
    duration: "2017 - 2019",
    location: "Kolkata, IN",
    score: "88%"
  }
];

const achievementsData = [
  "Solved 1200+ problems on Leetcode, demonstrating strong problem-solving skills.",
  "Achieved Leetcode Knight status with a max rating of 1862, placing in the top 5.5%.",
  "Secured Global Rank 807 in Leetcode Biweekly Contest 62.",
  "Ranked 468 out of 1170 in ICPC Gwalior-Pune 2020 Regionals, showcasing competitive programming expertise."
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-6 md:px-12 bg-dark-bg relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-primary inline-block pb-2">Education</h2>
                        <div className="space-y-8">
                            {educationData.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l w-full border-dark-border">
                                    <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-primary ring-4 ring-dark-bg"></span>
                                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                    <h4 className="text-md text-primary mt-1 font-medium">{edu.degree}</h4>
                                    <div className="flex justify-between items-center mt-2 group">
                                        <span className="text-xs font-semibold text-dark-muted uppercase tracking-wider">{edu.duration} | {edu.location}</span>
                                        <span className="text-sm font-bold text-white bg-dark-card px-2 py-1 rounded border border-dark-border">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-accent inline-block pb-2">Achievements</h2>
                        <div className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-colors">
                            <ul className="space-y-6">
                                {achievementsData.map((achievement, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                🏆
                                            </div>
                                        </div>
                                        <p className="text-dark-muted leading-relaxed">
                                            {achievement}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;