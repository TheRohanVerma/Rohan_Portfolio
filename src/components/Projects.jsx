import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ExternalLink, Code, Sparkles } from 'lucide-react';

const projects = [
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
                                <ExternalLink size={18} className="text-slate-gray hover:text-white cursor-pointer" />
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
