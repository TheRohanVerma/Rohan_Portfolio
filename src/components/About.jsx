import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
            <SectionHeader title="About Me" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-lg text-slate-gray leading-relaxed text-justify"
                >
                    <p>
                        I am a <span className="text-white font-medium">Data Scientist</span> based in <span className="text-white font-medium">Calgary, AB</span>, with over 5 years of experience delivering end-to-end AI/ML and Generative AI solutions.
                    </p>
                    <p>
                        From applied research and modeling to deployment and monitoring in production, I have a proven track record of operationalizing production-grade systems in cloud environments.
                    </p>
                    <p>
                        I hold an <span className="text-white font-medium">M.Sc in Computing Science</span> from the University of Alberta and am passionate about translating complex data science solutions into measurable business outcomes.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20" />
                    <h3 className="text-2xl font-bold mb-6 text-white">Research Interests</h3>
                    <ul className="space-y-4">
                        {['Computer Vision', 'Software Engineering', 'Deep Learning', 'Data Analysis'].map((skill) => (
                            <li key={skill} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-slate-gray">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
