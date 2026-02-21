import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background-obsidian text-white min-h-screen selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />

      <footer className="py-12 text-center text-slate-gray border-t border-white/5 bg-background-obsidian">
        <p className="text-sm uppercase tracking-widest font-medium mb-2">Developed by Rohan Verma</p>
        <p className="text-xs opacity-50">Built with React, Tailwind v4, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
