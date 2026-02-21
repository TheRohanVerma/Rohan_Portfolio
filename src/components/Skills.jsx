import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skillCategories = [
    {
        title: "NLP, LLMs & Agentic AI",
        skills: ["Prompt Engineering", "Transformers (GPT, Gemini)", "Hugging Face", "LangChain", "RAG", "Text Mining", "Sentiment Analysis"]
    },
    {
        title: "Machine Learning Frameworks",
        skills: ["Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Predictive Modeling", "Anomaly Detection", "Statistical Modeling"]
    },
    {
        title: "Languages & Data Tools",
        skills: ["Python", "R", "SQL", "Pandas", "NumPy", "PySpark", "FastAPI", "Vertex AI Pipelines", "Data Cleaning"]
    },
    {
        title: "Cloud & MLOps",
        skills: ["Azure (Data Factory, Synapse)", "GCP (BigQuery, Vertex AI)", "MLflow", "Azure DevOps", "GitHub Actions", "Docker", "Spark"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 bg-background-deep/10">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title="Technical Skills" />

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <span className="text-6xl font-black">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, si) => (
                                    <span
                                        key={si}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-gray hover:text-white hover:border-primary/50 transition-all cursor-default"
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

export default Skills;
