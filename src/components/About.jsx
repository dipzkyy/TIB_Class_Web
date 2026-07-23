import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import fotoKelas from '../assets/fotokelas.png';

const Counter = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    let start = 0;
    if (inView) {
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 md:mb-2">
        {count}+
      </span>
      <span className="text-xs sm:text-sm md:text-base text-slate-200 font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-16 md:py-24 min-h-[70vh] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fotoKelas} 
          alt="Foto Kelas 2B Teknik Informatika" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/85 md:backdrop-blur-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-dark rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 border border-white/20 shadow-2xl transform-gpu"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit">
                <span className="text-xs md:text-sm font-semibold text-secondary">Tentang Kami</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Solidaritas dalam <span className="text-secondary">Logika</span>, <br/>
                Kreativitas dalam <span className="text-accent">Sintaksis</span>.
              </h2>
              <p className="text-slate-300 text-sm md:text-lg leading-relaxed">
                Kelas 2B Teknik Informatika bukan sekadar ruang kuliah. Kami adalah wadah kolaborasi tempat ide-ide inovatif dirancang dan dieksekusi. Berfokus pada pengembangan *software*, desain antarmuka, dan pemecahan masalah teknologi modern.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 p-4 md:p-8 rounded-2xl bg-white/5 border border-white/10">
              <Counter end={30} duration={2000} label="Mahasiswa" />
              <Counter end={2} duration={1000} label="Semester" />
              <Counter end={12} duration={1500} label="Project Selesai" />
              <Counter end={8} duration={1500} label="Mata Kuliah" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;