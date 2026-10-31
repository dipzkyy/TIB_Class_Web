import React from 'react';
import { Code2 } from 'lucide-react';
import logo from '../assets/logo.png';

const footerLinks = [
  { title: 'Home', id: 'home' },
  { title: 'Tentang', id: 'about' },
  { title: 'Jadwal', id: 'schedule' },
  { title: 'Galeri', id: 'gallery' },
  { title: 'Anggota', id: 'members' },
  { title: 'Kontak', id: 'contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = 72;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Top accent border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="p-2 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Kembali ke atas"
            >
              <img
                src={logo}
                alt="Logo 3B Teknik Informatika UNISBA"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  Teknik Informatika 3B
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-teal-300 border border-primary/30">
                  UNISBA
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Universitas Islam Balitar • Blitar, Jawa Timur
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-4 sm:gap-6">
            {footerLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs sm:text-sm font-heading font-medium text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1 py-0.5"
              >
                {item.title}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom copyright and developer credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} Kelas 3B Teknik Informatika UNISBA. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-1.5 font-medium text-slate-400">
            <Code2 size={15} className="text-primary" />
            <span>Dikembangkan dengan dedikasi oleh Tim Mahasiswa Kelas 3B</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;