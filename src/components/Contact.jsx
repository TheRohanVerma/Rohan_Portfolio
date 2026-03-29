import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin } from 'lucide-react';


const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
            <SectionHeader title="Get in Touch" subtitle="Let's connect and share ideas!" />

            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl grid md:grid-cols-2 gap-8"
                >
                    <div className="flex items-center gap-6 group">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Mail size={24} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest">Email</p>
                            <a href="mailto:rv.97ad@gmail.com" target="_blank" rel="noreferrer" className="text-lg text-white font-semibold hover:text-primary transition-colors">rv.97ad@gmail.com</a>
                            <a href="mailto:rverma3@ualberta.ca" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors border-t border-white/10 pt-1 text-xs">rverma3@ualberta.ca</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Phone</p>
                            <a href="tel:+17809324161" className="text-lg text-white font-semibold hover:text-primary transition-colors">+1 (780) 932-4161</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group md:col-span-2 md:justify-center mt-4 pt-8 border-t border-white/5">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Location</p>
                            <p className="text-lg text-white font-semibold flex items-center gap-2">
                                Calgary, Canada <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-normal flex-shrink-0">Open to Relocate</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
