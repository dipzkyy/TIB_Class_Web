import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Network, Users2, Sparkles } from 'lucide-react';
import fotoKelas from '../assets/fotokelas.png';

const Counter = ({ end, duration = 1500, label, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="p-4 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/70 text-center shadow-md">
      <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-1 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-teal-300 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const pillars = [
  {
    icon: <Code2 className="w-5 h-5 text-primary-light" />,
    title: "Software Engineering",
    desc: "Mendalami algoritma, arsitektur perangkat lunak modern, dan pemrograman web berbasis teknologi mutakhir.",
  },
  {
    icon: <Network className="w-5 h-5 text-teal-400" />,
    title: "Jaringan Komputer",
    desc: "Mempelajari topologi, protokol komunikasi data, routing, dan implementasi infrastruktur komputasi handal.",
  },
  {
    icon: <Users2 className="w-5 h-5 text-sky-400" />,
    title: "Kolaborasi & Kebersamaan",
    desc: "Membangun kekompakan 35 mahasiswa melalui pengerjaan proyek kelompok, praktikum, dan kegiatan sosial.",
  },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden tech-grid-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-teal-300 border border-primary/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Identitas & Profil Kelas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
            Solidaritas dalam Logika, <br />
            <span className="text-gradient">Kreativitas dalam Sintaksis.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Kelas 3B Teknik Informatika Universitas Islam Balitar bukan sekadar ruang kuliah. Kami adalah wadah kolaborasi tempat gagasan teknologi dirancang, diuji, dan dieksekusi menjadi portofolio nyata yang siap berkontribusi bagi masyarakat digital.
          </p>
        </div>

        {/* Content Grid: Photo + Counters */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Real Class Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img
                src={fotoKelas}
                alt="Foto Kelas 3B Teknik Informatika UNISBA"
                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">UNISBA Blitar</span>
                <span className="text-lg font-heading font-bold text-white">Teknik Informatika Angkatan 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Academic Counters Matrix (Projector Legible) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6"
          >
            <Counter end={35} duration={1200} label="Mahasiswa Aktif" suffix="" />
            <Counter end={4} duration={800} label="Semester Berjalan" suffix="" />
            <Counter end={12} duration={1400} label="Praktikum & Proyek" suffix="+" />
            <Counter end={8} duration={1000} label="Mata Kuliah Unggulan" suffix="" />
          </motion.div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;