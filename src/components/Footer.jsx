import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[20rem] h-[20rem] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[15rem] h-[15rem] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12 md:py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-8"
          >
            <Link to="home" smooth={true} duration={500} className="cursor-pointer mb-6 group inline-block">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 group-hover:bg-white/10 transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Logo Kelas 2B" 
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              2B Teknik Informatika
            </h2>
            <p className="text-slate-400 font-medium text-lg">
              Universitas Islam Balitar
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
          >
            {['Home', 'Tentang', 'Jadwal', 'Galeri', 'Anggota', 'Kontak'].map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase() === 'tentang' ? 'about' : item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-slate-400 hover:text-primary transition-colors cursor-pointer font-medium text-sm tracking-wide uppercase"
              >
                {item}
              </Link>
            ))}
          </motion.div>

        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Kelas 2B Teknik Informatika. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Dibuat dengan <span className="text-red-500 animate-pulse">❤</span> oleh Tim Developer Kelas.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;