import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { toast } from 'react-toastify';
import { sendMessage } from '../utilities/mesageApi';

const Contact = () => {
    const copyEmail = (Email) => {
        navigator.clipboard.writeText(Email)
            .then(() => toast.success('Email copied to clipboard!'))
            .catch(() => toast.error("Failed to copy Email!"));
    }

    const copyMobile = (mobile) => {
        navigator.clipboard.writeText(mobile)
            .then(() => toast.success('Mobile number copied to clipboard!'))
            .catch(() => toast.error("Failed to copy mobile number!"));
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let response = await sendMessage(formData);
            setFormData({ name: '', email: '', message: '' });
            toast.success(response?.message || "Message sent successfully!");
        } catch (e) {
            toast.warn(e.message || "Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-12 bg-dark-bg relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-dark-muted max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 bg-dark-card border border-dark-border rounded-3xl p-8 md:p-12">
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-dark-muted mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dark-muted mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-dark-muted mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex flex-col justify-center space-y-8 pl-0 lg:pl-12 lg:border-l border-dark-border"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Contact Info</h3>
                        
                        <div 
                            className="bg-dark-bg border border-dark-border p-6 rounded-xl cursor-copy hover:border-primary transition-colors group"
                            onClick={() => copyEmail('ghosh.jgec@gmail.com')}
                        >
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MarkunreadIcon />
                            </div>
                            <h4 className="text-white font-bold mb-1">Email</h4>
                            <p className="text-dark-muted text-sm break-all">ghosh.jgec@gmail.com</p>
                        </div>

                        <div 
                            className="bg-dark-bg border border-dark-border p-6 rounded-xl cursor-copy hover:border-primary transition-colors group"
                            onClick={() => copyMobile('+91 6295102811')}
                        >
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <LocalPhoneIcon />
                            </div>
                            <h4 className="text-white font-bold mb-1">Mobile</h4>
                            <p className="text-dark-muted text-sm">+91 6295102811</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;