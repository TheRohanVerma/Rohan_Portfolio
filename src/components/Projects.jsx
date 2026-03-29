import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ExternalLink, Code, Sparkles, Coffee } from 'lucide-react';

const projects = [
    {
        title: "Interactive Personal Portfolio",
        desc: "Designed and developed a responsive, dynamic digital resume and portfolio using React, Tailwind CSS, and Framer Motion for smooth animations.",
        tags: ["React", "Tailwind", "Framer Motion", "Vite"],
        year: "2026",
        type: "Personal",
        link: "https://github.com/TheRohanVerma/Rohan_Portfolio"
    },
    {
        title: "Nutrition Fitness Coach",
        desc: "Built a GPT-powered meal planner using OpenAI API and FastAPI to align nutrition with fitness goals and BMI.",
        tags: ["GenAI", "FastAPI", "OpenAI API", "Nutrition"],
        year: "2025",
        type: "Personal"
    },
    {
        title: "LLM-Powered Expense Manager",
        desc: "Developed a GPT-4 based app to auto-categorize 200+ transactions and visualize monthly spend; reduced overspending by 40%.",
        tags: ["GPT-4", "Data Visualization", "FinTech"],
        year: "2024",
        type: "Personal"
    },
    {
        title: "Mental Health Chatbot",
        desc: "Created a BERT-based chatbot fine-tuned on limited corpora to guide Punjabi newcomers in Canada with mental health resources.",
        tags: ["BERT", "NLP", "Mental Health"],
        year: "2022",
        type: "Academic"
    },
    {
        title: "EEG Signal Regression with BERT",
        desc: "Predicted BERT activation scores from EEG signals using ridge regression, validating cognitive plausibility.",
        tags: ["EEG", "BERT", "Regression", "Neuroscience"],
        year: "2022",
        type: "Academic"
    },
    {
        title: "Fairness in ML",
        desc: "Benchmarked fairness-aware oversampling (Fair-SMOTE) and analyzed trade-offs in accuracy vs. fairness on UCI datasets.",
        tags: ["ML Fairness", "Research", "Python"],
        year: "2022",
        type: "Research"
    },
    {
        title: "Code Search: CodeBERT vs Word2Vec",
        desc: "Built retrieval pipelines on CodeSearchNet; CodeBERT outperformed Word2Vec in query-to-code precision.",
        tags: ["CodeBERT", "Information Retrieval", "NLP"],
        year: "2022",
        type: "Research"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
            <SectionHeader title="Key Projects" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 glass p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center gap-8 justify-between"
            >
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Portfolio & Client Work</h3>
                    <p className="text-slate-gray leading-relaxed">
                        Most of my projects and client work are non-public due to confidentiality agreements and other reasons. However, I am always happy to discuss my work, past experiences, and how I can deliver value to your team over a chat!
                    </p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                    <a
                        href="mailto:rv.97ad@gmail.com?subject=Coffee%20Chat"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-xl transition-all group"
                    >
                        <Coffee size={18} className="group-hover:rotate-12 transition-transform" />
                        Book a Coffee Chat
                    </a>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass rounded-2xl overflow-hidden group hover:translate-y-[-5px] transition-all duration-300 flex flex-col"
                    >
                        <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center relative overflow-hidden">
                            <Code size={40} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 flex gap-2">
                                <span className="text-[10px] uppercase tracking-widest font-bold bg-background-obsidian/60 px-2 py-1 rounded text-primary">
                                    {proj.year}
                                </span>
                                {proj.type === "Personal" && <Sparkles size={14} className="text-accent" />}
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{proj.title}</h3>
                                {proj.link ? (
                                    <a href={proj.link} target="_blank" rel="noreferrer" className="block p-1 transform hover:scale-110 transition-transform">
                                        <ExternalLink size={18} className="text-primary hover:text-white drop-shadow-[0_0_8px_rgba(var(--color-primary),0.8)]" />
                                    </a>
                                ) : (
                                    <ExternalLink size={18} className="text-slate-gray/30" />
                                )}
                            </div>
                            <p className="text-slate-gray text-sm mb-6 leading-relaxed flex-1">
                                {proj.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
