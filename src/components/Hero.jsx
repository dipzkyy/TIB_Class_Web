import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, ArrowRight } from 'lucide-react';
import codingGif from '../assets/coding.gif';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      
      {/* Background Decorators - Disembunyikan di Mobile untuk Performa */}
      <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-primary/10 rounded-full blur-[100px] -z-10 transform-gpu" />
      <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-[90px] -z-10 transform-gpu" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10 my-auto">
        
        {/* Layout 12 Kolom: Kiri (Text) & Kanan (GIF) Selalu Bersisian */}
        <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center">
          
          {/* Left Content (Kolom 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-7 sm:col-span-7 lg:col-span-7 flex flex-col gap-2.5 sm:gap-4 md:gap-6 text-left"
          >
            <div className="inline-block px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full glass w-fit shadow-sm border border-primary/20">
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-primary tracking-wide">
                Student Community
              </span>
            </div>
            
            <h1 className="text-base sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Selamat Datang di Kelas <br />
              <span className="text-gradient">2B Teknik Informatika</span>
            </h1>
            
            <p className="text-slate-600 text-[11px] sm:text-base md:text-xl max-w-2xl leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
              Kami adalah komunitas mahasiswa pengembang teknologi dari Universitas Islam Balitar. Mengubah barisan kode menjadi solusi inovatif.
            </p>
            
            <div className="flex flex-row items-center gap-2 sm:gap-4 mt-1 sm:mt-2">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer group relative inline-flex items-center justify-center px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3.5 text-[11px] sm:text-sm md:text-base font-semibold text-white bg-primary rounded-lg sm:rounded-xl overflow-hidden transition-all hover:scale-105 shadow-md transform-gpu"
              >
                <span>Kenali Kami</span>
                <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="gallery" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3.5 text-[11px] sm:text-sm md:text-base font-semibold text-slate-700 glass rounded-lg sm:rounded-xl hover:bg-slate-50 transition-all shadow-sm"
              >
                Galeri
              </Link>
            </div>
          </motion.div>

          {/* Right Content - GIF (Kolom 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-5 sm:col-span-5 lg:col-span-5 flex justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="relative w-full max-w-[130px] sm:max-w-[240px] md:max-w-[360px] lg:max-w-[460px] transform-gpu"
            >
              <div className="glass p-1.5 sm:p-3 md:p-4 rounded-xl sm:rounded-[2rem] border border-white/40 shadow-lg">
                <img 
                  src={codingGif} 
                  alt="Coding Penguin Illustration" 
                  className="w-full h-auto object-cover rounded-lg sm:rounded-[1.5rem]"
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1"
      >
        <span className="text-xs font-medium text-slate-500">Scroll ke bawah</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-primary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;