import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
    {
        provider: "Microsoft",
        title: "AI‑900 Azure AI Fundamentals",
        type: "Industry"
    },
    {
        provider: "Coursera",
        title: "Machine Learning Specialization",
        type: "Academic"
    },
    {
        provider: "Coursera",
        title: "Deep Learning Specialization",
        type: "Academic"
    },
    {
        provider: "Coursera",
        title: "IBM Data Science Professional",
        type: "Professional"
    },
    {
        provider: "Coursera",
        title: "TensorFlow in Practice",
        type: "Technical"
    },
    {
        provider: "Coursera",
        title: "Reinforcement Learning Specialization",
        type: "Academic"
    },
    {
        provider: "Coursera",
        title: "Big Data Specialization",
        type: "Technical"
    },
    {
        provider: "Coursera",
        title: "Data Visualization with Tableau",
        type: "Technical"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-4 max-w-6xl mx-auto">
            <SectionHeader title="Certifications" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <div className="mb-3 flex justify-between items-start">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Award size={18} />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-gray/50">{cert.provider}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors leading-tight">
                            {cert.title}
                        </h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
