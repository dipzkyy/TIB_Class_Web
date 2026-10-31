import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Terminal, ChevronDown, Sparkles, Code2 } from 'lucide-react';
import codingGif from '../assets/coding.gif';

const Hero = () => {
  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = 72;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden tech-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="hidden lg:block absolute top-16 right-[-5%] w-80 h-80 bg-accent/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Academic Editorial Headline & Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm mb-6 border border-slate-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="tracking-wide">Kelas 3B Teknik Informatika • UNISBA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5">
              Ruang Kolaborasi, <br />
              <span className="text-gradient">Eksplorasi Teknologi</span> & Solidaritas Mahasiswa.
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Selamat datang di portal resmi kelas 3B Teknik Informatika Universitas Islam Balitar. Wadah interaktif informasi akademik, jadwal perkuliahan, dokumentasi kegiatan, dan profil 35 mahasiswa calon talenta IT masa depan.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('schedule')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Calendar size={18} />
                <span>Jadwal Perkuliahan</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollTo('members')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Users size={18} className="text-slate-500" />
                <span>Daftar Anggota</span>
              </button>
            </div>

            {/* Key Academic Badges (Projector & Mobile Friendly) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-200/80 w-full max-w-xl">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-slate-900">35</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Mahasiswa Aktif</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-primary">Semester 3</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Tahun 2025/2026</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-accent-dark">A2-</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Ruang Kuliah</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with coding.gif only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Developer Window Frame */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full max-w-md rounded-2xl sm:rounded-3xl bg-slate-900 p-2 sm:p-3 border border-slate-800 shadow-elevated"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-850 rounded-xl mb-2 border border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300 font-medium">tib-developer-mode.tsx</span>
                </div>
                <span className="text-[10px] font-semibold text-teal-400 bg-teal-950/60 border border-teal-800/60 px-2 py-0.5 rounded-md">
                  Active
                </span>
              </div>

              {/* Main Illustration: coding.gif */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center border border-slate-800/80">
                <img
                  src={codingGif}
                  alt="Animasi Coding Developer Kelas 3B TI"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle overlay badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-teal-400" />
                    <span className="font-heading font-bold text-xs text-white">TIB Developer Session</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">UNISBA TI</span>
                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-slate-950 text-slate-200 p-3 rounded-xl border border-slate-800 shadow-xl items-center gap-2.5 max-w-[240px]">
                <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary-light flex items-center justify-center shrink-0">
                  <Terminal size={15} />
                </div>
                <div className="text-left font-mono text-[11px] leading-tight">
                  <span className="text-teal-400 font-semibold">// TIB_Class</span>
                  <div className="text-slate-300 mt-0.5 font-medium">code: "Compile & Run"</div>
                </div>
              </div>

              {/* Floating Top-Right Badge */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-white text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 shadow-md items-center gap-1.5">
                <Sparkles size={13} className="text-primary" />
                <span className="text-xs font-heading font-bold">Mahasiswa IT 3B</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Down indicator */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center text-slate-400 hover:text-primary transition-colors focus:outline-none"
          aria-label="Scroll ke profil tentang kelas"
        >
          <span className="text-[11px] font-semibold tracking-wider uppercase">Tentang Kami</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;