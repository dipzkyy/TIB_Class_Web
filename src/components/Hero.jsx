import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, ArrowRight } from 'lucide-react';
import codingGif from '../assets/coding.gif';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-secondary/15 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full glass w-fit mx-auto lg:mx-0 shadow-sm border border-primary/20">
              <span className="text-sm font-semibold text-primary">Student Community</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Selamat Datang di Kelas <br />
              <span className="text-gradient">2B Teknik Informatika</span>
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kami adalah komunitas mahasiswa pengembang teknologi dari Universitas Islam Balitar. Mengubah barisan kode menjadi solusi inovatif untuk masa depan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <span>Kenali Kami</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="gallery" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer px-8 py-3.5 text-base font-semibold text-slate-700 glass rounded-xl hover:bg-slate-50 transition-all hover:shadow-soft"
              >
                Lihat Galeri
              </Link>
            </div>
          </motion.div>

          {/* Right Content - GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-[400px] lg:max-w-[500px]"
            >
              {/* Dekorasi Glass dibelakang GIF */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] transform rotate-3 scale-105 blur-lg -z-10" />
              <div className="glass p-4 rounded-[2rem] border border-white/40 shadow-xl">
                <img 
                  src={codingGif} 
                  alt="Coding Penguin Illustration" 
                  className="w-full h-auto object-cover rounded-[1.5rem]"
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
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-slate-500">Scroll ke bawah</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-primary w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;