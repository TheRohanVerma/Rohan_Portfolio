import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
    const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 });

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
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-obsidian/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <a href="#home" className="flex items-center gap-2 group">
                        <motion.img
                            src="/Rohan_Portfolio/profile.jpg"
                            alt="Rohan Verma"
                            onClick={(e) => {
                                e.preventDefault();
                                const rect = e.currentTarget.getBoundingClientRect();
                                setClickOrigin({ x: rect.left, y: rect.bottom + 8 });
                                setIsPhotoZoomed(true);
                            }}
                            className="w-9 h-9 rounded-full object-cover object-top border-2 border-primary/40 group-hover:border-primary transition-colors shadow-md cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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

            {/* Zoomed Profile Photo Overlay */}
            <AnimatePresence>
                {isPhotoZoomed && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-start justify-start pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Backdrop blur */}
                        <motion.div
                            className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setIsPhotoZoomed(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Zoomed image — anchored at photo's position, grows downward/rightward */}
                        <motion.div
                            className="relative z-10 pointer-events-auto"
                            style={{
                                position: 'fixed',
                                left: clickOrigin.x,
                                top: clickOrigin.y,
                                transformOrigin: 'top left',
                            }}
                            onMouseLeave={() => setIsPhotoZoomed(false)}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                        >
                            <div className="relative">
                                <img
                                    src="/Rohan_Portfolio/profile.jpg"
                                    alt="Rohan Verma"
                                    className="w-52 h-52 rounded-full object-cover object-top border-4 border-primary shadow-2xl shadow-primary/30"
                                />
                                {/* Subtle ring glow */}
                                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 animate-pulse" />
                            </div>
                            <p className="text-center text-white font-semibold mt-3 text-sm tracking-wide">Rohan Verma</p>
                            <p className="text-center text-primary text-xs mt-0.5">Data Scientist</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
