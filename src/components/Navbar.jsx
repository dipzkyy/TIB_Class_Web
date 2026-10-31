import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { title: 'Home', id: 'home' },
  { title: 'Tentang', id: 'about' },
  { title: 'Jadwal', id: 'schedule' },
  { title: 'Galeri', id: 'gallery' },
  { title: 'Anggota', id: 'members' },
  { title: 'Kontak', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Throttled / passive scroll listener for navbar glass styling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for efficient active section detection without scroll lag
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Instant navigation with exact offset calculation
  const scrollToSection = useCallback((id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    const target = document.getElementById(id);
    if (!target) return;
    
    const navHeight = 72;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label="TIB Class Homepage"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200/80 shadow-sm flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-md transition-all">
                <img src={logo} alt="Logo 3B TI UNISBA" className="w-full h-full object-contain" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white ring-1 ring-accent/30" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base md:text-lg leading-none text-slate-900 group-hover:text-primary transition-colors">
                  Teknik Informatika 3B
                </span>
                <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  UNISBA
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium tracking-tight mt-0.5">
                Universitas Islam Balitar
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center bg-slate-100/80 backdrop-blur-sm p-1 rounded-full border border-slate-200/60 shadow-inner" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'text-white bg-primary shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {link.title}
                </button>
              );
            })}
          </nav>

          {/* Right Action Badge / CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('schedule')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100 transition-colors shadow-xs"
            >
              <Calendar size={14} className="text-emerald-600" />
              <span>Jadwal Aktif</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
            aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-2">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigasi Halaman</span>
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles size={11} /> Kelas 3B TI
                </span>
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                    }`}
                  >
                    <span>{link.title}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                );
              })}
              <div className="pt-3 mt-1 border-t border-slate-100">
                <button
                  onClick={() => scrollToSection('schedule')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-dark hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Calendar size={14} />
                  <span>Lihat Jadwal Kuliah Hari Ini</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;