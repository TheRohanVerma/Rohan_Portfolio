import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#work' },
        { name: 'Projects', href: '#projects' },
        { name: 'Publications', href: '#publications' },
        { name: 'Certs', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-obsidian/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 group">
                    <img
                        src="/Rohan_Portfolio/profile.png"
                        alt="Rohan Verma"
                        className="w-9 h-9 rounded-full object-cover border-2 border-primary/40 group-hover:border-primary transition-colors shadow-md"
                    />
                    <span className="text-2xl font-bold text-white tracking-tighter hover:text-primary transition-colors">
                        RV<span className="text-primary">.</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-gray hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-obsidian border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-slate-gray hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
