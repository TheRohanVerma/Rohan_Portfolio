import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import MouseTooltip from './MouseTooltip';

const Hero = () => {
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
                    Data Scientist with 5+ years of experience | Delivering production-grade AI/ML & GenAI solutions | M.Sc CS @ University of Alberta.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                    <MouseTooltip text="rv.97ad@gmail.com">
                        <a href="mailto:rv.97ad@gmail.com" className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25">
                            Get in Touch
                        </a>
                    </MouseTooltip>
                    <MouseTooltip text="Explore my projects">
                        <a href="#work" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/10">
                            View My Work
                        </a>
                    </MouseTooltip>
                </div>

                <div className="flex justify-center gap-6 text-2xl">
                    <MouseTooltip text="GitHub /TheRohanVerma">
                        <a href="https://github.com/TheRohanVerma" target="_blank" rel="noreferrer" className="text-slate-gray hover:text-white transition-colors">
                            <Github size={28} />
                        </a>
                    </MouseTooltip>
                    <MouseTooltip text="LinkedIn /in/therohanverma">
                        <a href="https://www.linkedin.com/in/therohanverma/" target="_blank" rel="noreferrer" className="text-slate-gray hover:text-white transition-colors">
                            <Linkedin size={28} />
                        </a>
                    </MouseTooltip>
                    <MouseTooltip text="rv.97ad@gmail.com">
                        <a href="mailto:rv.97ad@gmail.com" className="text-slate-gray hover:text-white transition-colors">
                            <Mail size={28} />
                        </a>
                    </MouseTooltip>
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
