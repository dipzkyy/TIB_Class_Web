import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import fotoKelas from '../assets/fotokelas.png';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      title: "Instagram",
      detail: "@2b.teknikinformatika",
      link: "https://instagram.com",
      color: "hover:text-[#E1306C]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "kelas2bti@unisba.ac.id",
      link: "mailto:kelas2bti@unisba.ac.id",
      color: "hover:text-red-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      detail: "+62 812-3456-7890 (Ketua Kelas)",
      link: "https://wa.me/6281234567890",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="relative py-24 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={fotoKelas} 
          alt="Background Kontak Kelas" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark/85 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold tracking-wider text-sm uppercase">Tetap Terhubung</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Hubungi Kami</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                className="glass-dark bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 group hover:-translate-y-1 transition-all duration-300 hover:bg-white/10"
              >
                <div className={`p-4 rounded-full bg-white/5 text-slate-300 transition-colors duration-300 ${info.color} group-hover:bg-white/10 border border-white/5`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-200 transition-colors">{info.detail}</p>
                </div>
              </a>
            ))}

            <div className="glass-dark bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
              <div className="p-4 rounded-full bg-white/5 text-primary border border-white/5">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Alamat Kampus</h3>
                <p className="text-slate-400">Universitas Islam Balitar</p>
                <p className="text-slate-500 text-sm mt-1">Jl. Majapahit No.4, Sananwetan, Kota Blitar, Jawa Timur</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-full min-h-[400px] w-full"
          >
            <div className="w-full h-full glass-dark bg-white/5 p-2 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-dark/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10 rounded-[2rem]" />
              <iframe 
                title="Google Maps Universitas Islam Balitar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.419914488972!2d112.1645851147761!3d-8.058564194196144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec6df23dae27%3A0x600b3967d1ffcc83!2sUniversitas%20Islam%20Balitar!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
                className="w-full h-full min-h-[400px] rounded-[1.5rem] grayscale-[30%] contrast-[90%] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;