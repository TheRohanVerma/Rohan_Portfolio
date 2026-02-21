import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { BookOpen } from 'lucide-react';

const publications = [
    {
        authors: "Saini, M., Chahal, K.K., Verma, R., & Singh, A.",
        year: "2021",
        title: "Customer reviews as the measure of software quality",
        journal: "IET Software",
        link: "https://doi.org/10.1049/ietsen.2019.0309"
    },
    {
        authors: "Saini, M., Verma, R., Singh, A., & Chahal, K.K.",
        year: "2020",
        title: "Investigating diversity and impact of the popularity metrics for ranking software packages",
        journal: "Journal of Software: Evolution and Process, 32(9)",
        link: "https://doi.org/10.1002/smr.2265"
    }
];

const Publications = () => {
    return (
        <section id="publications" className="py-24 px-4 max-w-6xl mx-auto">
            <SectionHeader title="Publications" />

            <div className="grid gap-8">
                {publications.map((pub, index) => (
                    <motion.a
                        key={index}
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-8 rounded-2xl flex items-start gap-8 group hover:bg-white/5 transition-all border-white/5"
                    >
                        <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all hidden sm:block">
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <div className="flex gap-3 mb-2">
                                <span className="text-primary font-mono text-sm uppercase tracking-widest">{pub.journal}</span>
                                <span className="text-slate-gray font-mono text-sm">• {pub.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all leading-tight">
                                {pub.title}
                            </h3>
                            <p className="text-slate-gray italic">{pub.authors}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Publications;
