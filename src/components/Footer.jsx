import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-10 md:py-14 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-6"
          >
            <Link to="home" smooth={true} duration={500} className="cursor-pointer mb-4 group inline-block">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Logo Kelas 2B" 
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              2B Teknik Informatika
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium">
              Universitas Islam Balitar
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-5 md:gap-8 mb-8"
          >
            {['Home', 'Tentang', 'Jadwal', 'Galeri', 'Anggota', 'Kontak'].map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase() === 'tentang' ? 'about' : item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-slate-400 hover:text-primary transition-colors cursor-pointer font-medium text-xs md:text-sm tracking-wide uppercase"
              >
                {item}
              </Link>
            ))}
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
        >
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Kelas 2B Teknik Informatika. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Dibuat dengan <span className="text-red-500 animate-pulse">❤</span> oleh Tim Developer Kelas.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;