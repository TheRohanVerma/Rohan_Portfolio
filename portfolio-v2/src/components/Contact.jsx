import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
            <SectionHeader title="Get in Touch" subtitle="Let's connect and share ideas!" />

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-6 group">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Email</p>
                            <p className="text-lg text-white font-semibold">rv.97ad@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Phone</p>
                            <p className="text-lg text-white font-semibold">+1 (780) 932-4161</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Location</p>
                            <p className="text-lg text-white font-semibold">Edmonton, Alberta, CA</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl"
                >
                    <form className="space-y-6">
                        <div>
                            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div>
                            <textarea placeholder="Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
