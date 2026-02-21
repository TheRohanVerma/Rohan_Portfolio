import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Copy, Check, ExternalLink } from 'lucide-react';
import MouseTooltip from './MouseTooltip';

const Hero = () => {
    const [activeContact, setActiveContact] = useState(null);
    const [copied, setCopied] = useState(null);

    const contactMethods = {
        github: {
            label: 'GitHub',
            value: 'https://github.com/TheRohanVerma',
            tooltip: 'GitHub /TheRohanVerma',
            icon: <Github size={28} />
        },
        linkedin: {
            label: 'LinkedIn',
            value: 'https://www.linkedin.com/in/therohanverma/',
            tooltip: 'LinkedIn /in/therohanverma',
            icon: <Linkedin size={28} />
        },
        mail: {
            label: 'Email',
            value: 'rv.97ad@gmail.com',
            secondary: 'rverma3@ualberta.ca',
            tooltip: 'rv.97ad@gmail.com',
            icon: <Mail size={28} />
        }
    };

    const handleCopy = (id, text) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-medium tracking-widest uppercase mb-4"
                >
                    Welcome to my digital space
                </motion.h2>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Hi, I am <span className="text-gradient">Rohan Verma</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-gray max-w-2xl mx-auto mb-10 leading-relaxed">
                    Data Scientist with 5+ years of experience | Delivering production-grade AI/ML & GenAI solutions | M.Sc CS @ University of Alberta. | Calgary, AB
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                    <MouseTooltip text="rv.97ad@gmail.com">
                        <a
                            href="mailto:rv.97ad@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            onMouseEnter={() => setActiveContact('mail')}
                            onMouseLeave={() => setActiveContact(null)}
                            className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25 inline-flex items-center gap-2"
                        >
                            Get in Touch
                        </a>
                    </MouseTooltip>
                    <MouseTooltip text="Explore my projects">
                        <a href="#work" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/10">
                            View My Work
                        </a>
                    </MouseTooltip>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div className="flex justify-center gap-6 text-2xl">
                        {Object.entries(contactMethods).map(([id, method]) => (
                            <MouseTooltip key={id} text={method.tooltip}>
                                <a
                                    href={id === 'mail' ? `mailto:${method.value}` : method.value}
                                    target="_blank"
                                    rel="noreferrer"
                                    onMouseEnter={() => setActiveContact(id)}
                                    onMouseLeave={() => setActiveContact(null)}
                                    className="text-slate-gray hover:text-white transition-colors"
                                >
                                    {method.icon}
                                </a>
                            </MouseTooltip>
                        ))}
                    </div>

                    {/* Interactive Contact Detail Card */}
                    <div className="h-20 flex items-center justify-center">
                        <AnimatePresence>
                            {activeContact && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    onMouseEnter={() => setActiveContact(activeContact)}
                                    onMouseLeave={() => setActiveContact(null)}
                                    className="glass p-3 px-6 rounded-2xl border border-white/10 flex items-center gap-6 shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none" />

                                    <div className="flex flex-col items-start min-w-[150px] gap-1">
                                        <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                                            {contactMethods[activeContact].label}
                                        </span>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-medium text-white/90 truncate max-w-[200px]">
                                                    {contactMethods[activeContact].value}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <button
                                                        onClick={() => handleCopy(`${activeContact}-primary`, contactMethods[activeContact].value)}
                                                        className="p-1 hover:bg-white/10 rounded transition-colors text-slate-gray hover:text-white relative group/btn"
                                                    >
                                                        {copied === `${activeContact}-primary` ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                                    </button>
                                                    <a
                                                        href={activeContact === 'mail' ? `mailto:${contactMethods[activeContact].value}` : contactMethods[activeContact].value}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="p-1 hover:bg-white/10 rounded transition-colors text-slate-gray hover:text-white"
                                                    >
                                                        <ExternalLink size={12} />
                                                    </a>
                                                </div>
                                            </div>
                                            {contactMethods[activeContact].secondary && (
                                                <div className="flex items-center gap-3 border-t border-white/5 pt-1">
                                                    <span className="text-sm font-medium text-white/70 truncate max-w-[200px]">
                                                        {contactMethods[activeContact].secondary}
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        <button
                                                            onClick={() => handleCopy(`${activeContact}-secondary`, contactMethods[activeContact].secondary)}
                                                            className="p-1 hover:bg-white/10 rounded transition-colors text-slate-gray hover:text-white relative group/btn"
                                                        >
                                                            {copied === `${activeContact}-secondary` ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                                        </button>
                                                        <a
                                                            href={`mailto:${contactMethods[activeContact].secondary}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="p-1 hover:bg-white/10 rounded transition-colors text-slate-gray hover:text-white"
                                                        >
                                                            <ExternalLink size={12} />
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 animate-bounce cursor-pointer text-slate-gray hover:text-primary transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
