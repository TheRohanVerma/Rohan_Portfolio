import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MouseTooltip from './MouseTooltip';

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
                    <MouseTooltip text="Click to email primary or secondary">
                        <div className="flex items-center gap-6 group">
                            <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Mail size={24} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-slate-gray font-medium uppercase tracking-widest">Email</p>
                                <a href="mailto:rv.97ad@gmail.com" target="_blank" rel="noreferrer" className="text-lg text-white font-semibold hover:text-primary transition-colors">rv.97ad@gmail.com</a>
                                <a href="mailto:rverma3@ualberta.ca" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-primary transition-colors border-t border-white/10 pt-1">rverma3@ualberta.ca</a>
                            </div>
                        </div>
                    </MouseTooltip>

                    <MouseTooltip text="+1 (780) 932-4161">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Phone</p>
                                <p className="text-lg text-white font-semibold">+1 (780) 932-4161</p>
                            </div>
                        </div>
                    </MouseTooltip>

                    <div className="flex items-center gap-6 group">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-gray font-medium uppercase tracking-widest mb-1">Location</p>
                            <p className="text-lg text-white font-semibold flex items-center gap-2">
                                Calgary, Canada <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-normal">Open to Relocate</span>
                            </p>
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
