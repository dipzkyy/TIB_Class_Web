import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { title: 'Home', to: 'home' },
  { title: 'Tentang', to: 'about' },
  { title: 'Jadwal', to: 'schedule' },
  { title: 'Galeri', to: 'gallery' },
  { title: 'Anggota', to: 'members' },
  { title: 'Kontak', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-3">
            <img src={logo} alt="Logo 3B TI" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-dark">3B Teknik Informatika</span>
              <span className="text-xs text-slate-500 font-medium">Universitas Islam Balitar</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-primary font-semibold"
                className="text-slate-600 hover:text-primary transition-colors cursor-pointer text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 p-2 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, h: 0 }}
            animate={{ opacity: 1, h: 'auto' }}
            exit={{ opacity: 0, h: 0 }}
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/20"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-primary font-medium text-lg cursor-pointer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;