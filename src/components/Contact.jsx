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
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Email",
      detail: "kelas2bti@unisba.ac.id",
      link: "mailto:kelas2bti@unisba.ac.id",
      color: "hover:text-red-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: "WhatsApp",
      detail: "+62 812-3456-7890 (Ketua Kelas)",
      link: "https://wa.me/6281234567890",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-24 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={fotoKelas} 
          alt="Background Kontak Kelas" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold tracking-wider text-xs md:text-sm uppercase">Tetap Terhubung</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Hubungi Kami</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:gap-5"
          >
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                className="glass-dark bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-5 group hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                <div className={`p-3.5 rounded-full bg-white/5 text-slate-300 transition-colors duration-300 ${info.color} border border-white/5`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-0.5">{info.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm group-hover:text-slate-200 transition-colors">{info.detail}</p>
                </div>
              </a>
            ))}

            <div className="glass-dark bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-1 transform-gpu">
              <div className="p-3.5 rounded-full bg-white/5 text-primary border border-white/5">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-0.5">Alamat Kampus</h3>
                <p className="text-slate-400 text-xs md:text-sm">
                  JL. Imam Bonjol No. 16, Jl. Majapahit No.2-4, Sananwetan, Kec. Sananwetan, Kota Blitar, Jawa Timur 66137
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full min-h-[350px] w-full"
          >
            <div className="w-full h-full glass-dark bg-white/5 p-2 rounded-2xl md:rounded-[2rem] border border-white/10 shadow-xl relative overflow-hidden group transform-gpu">
              <iframe 
                title="Google Maps Universitas Islam Balitar"
                src="https://maps.google.com/maps?q=JL.+Imam+Bonjol+No.+16,+Jl.+Majapahit+No.2-4,+Sananwetan,+Kota+Blitar,+Jawa+Timur+66137&output=embed"
                className="w-full h-full min-h-[350px] rounded-xl md:rounded-[1.5rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;