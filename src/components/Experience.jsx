import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { MapPin } from 'lucide-react';

const experiences = [
    {
        role: "Data Scientist",
        company: "Deloitte",
        location: "Calgary, CA",
        period: "Sept. 2023 – Present",
        tech: ["LLMs", "Azure AI Search", "Vertex AI", "GenAI", "Prompt Engineering"],
        bullets: [
            "Orchestrated an LLM-driven sensitive data redaction service, reducing review time by 65–80% for 2.5M documents.",
            "Built a geospatial platform using vision-language models to extract 35+ structured attributes, reducing analysis time by 50%+.",
            "Built an AI chatbot for the Ministry of Children & Family Development for question-answering and document retrieval.",
            "Designed and deployed Vertex AI pipelines for customer care workflows with automated validation and alerting.",
            "Created an Open Banking POC sold to a Tier-1 bank for over $3M using LLMs for transaction classification."
        ]
    },
    {
        role: "Machine Learning Developer / Team Lead",
        company: "AltaML",
        location: "Calgary, CA",
        period: "May 2022 – Aug. 2023",
        tech: ["Time-Series", "Computer Vision", "PySpark", "SQL", "Azure", "OpenAI"],
        bullets: [
            "Built time-series predictive models for SAGD well downtime (85%+ accuracy), saving $4.5M annually.",
            "Integrated OpenAI text-davinci-003 and Azure services for document Q&A and safety incident recommendations.",
            "Productionized CV pipelines with structured feature extraction (R² = 0.88), contributing $5M+ in client value.",
            "Processed 10M+ records using PySpark and SQL for production ML pipelines."
        ]
    },
    {
        role: "AI Scientist Intern",
        company: "Medo",
        location: "Edmonton, CA",
        period: "May 2021 – Aug. 2021",
        tech: ["CNN", "PyTorch", "Computer Vision", "U2Net"],
        bullets: [
            "Developed a U2Net CNN for thyroid-nodule segmentation (F1 = 0.94) using only 137 samples.",
            "Integrated the PyTorch model into a scalable remote diagnostic system for rapid ultrasound screening."
        ]
    },
    {
        role: "Data Scientist Intern",
        company: "Blackcoffer",
        location: "New Delhi, IN",
        period: "Sept. 2020 – Oct. 2020",
        tech: ["NLP", "Tableau", "Financial Analysis"],
        bullets: [
            "Conducted NLP analysis on financial reports from 107 European banks and delivered executive Tableau dashboards."
        ]
    },
    {
        role: "Machine Learning Assistant",
        company: "GNDU",
        location: "Amritsar, IN",
        period: "May 2019 – Dec. 2020",
        tech: ["Python", "Scikit-Learn", "NLP", "Data Visualization"],
        bullets: [
            "Developed data preprocessing pipelines and evaluated ML models for faculty-led research.",
            "Prepared technical documentation and visualizations to communicate model results to stakeholders."
        ]
    }
];

const Experience = () => {
    return (
        <section id="work" className="py-24 px-4 bg-background-deep/20">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title="Relevant Experiences" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-8 relative group border-white/5 hover:border-primary/30 transition-all"
                        >
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <span className="text-slate-gray font-mono text-sm">{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-gray mb-6 text-sm">
                                    <span className="font-semibold text-white/80">{exp.company}</span>
                                    <span className="text-white/20">|</span>
                                    <MapPin size={14} className="text-primary" />
                                    <span>{exp.location}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex gap-3 text-slate-gray text-sm leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Side: Skill Chips */}
                            <div className="md:w-1/4 flex flex-wrap content-start gap-2">
                                {exp.tech.map((skill, si) => (
                                    <motion.span
                                        key={si}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (si * 0.05) }}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-primary hover:bg-primary/10 hover:border-primary/30 transition-all"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
