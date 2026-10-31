import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, MapPin, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5 text-pink-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const contactInfo = [
    {
      icon: <InstagramIcon className="w-5 h-5 text-pink-400" />,
      title: "Instagram Resmi",
      detail: "@3B.teknikinformatika",
      actionText: "Buka Profil Instagram",
      link: "https://www.instagram.com/whois_inf_enginering2b?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      available: true,
      color: "hover:border-pink-500/50 hover:bg-pink-500/5",
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      title: "Email Kelas",
      detail: "Official Inbox (Dalam Konfirmasi)",
      actionText: "Hubungi Email",
      link: "-",
      available: false,
      color: "hover:border-blue-500/50 hover:bg-blue-500/5",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      title: "WhatsApp ",
      detail: "Grup Mahasiswa (Private)",
      actionText: "Chat WhatsApp",
      link: "-",
      available: false,
      color: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
    }
  ];

  const handleContactClick = (e, item) => {
    if (!item.available) {
      e.preventDefault();
      setWarningMessage(`Jalur komunikasi ${item.title} saat ini masih dalam pengelolaan internal pengurus kelas.`);
      setShowWarning(true);
    }
  };

  return (
    <>
      <section id="contact" className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden tech-grid-dark">
        {/* Background ambient lighting */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-teal-300 border border-primary/30 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Komunikasi & Informasi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-3">
              Hubungi Kelas 3B TI
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Memiliki pertanyaan seputar perkuliahan, kolaborasi proyek, atau ingin terhubung dengan mahasiswa Teknik Informatika 3B? Silakan kontak kami melalui kanal resmi berikut.
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-4"
            >
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.available ? item.link : "#"}
                  target={item.available ? "_blank" : undefined}
                  rel={item.available ? "noreferrer" : undefined}
                  onClick={(e) => handleContactClick(e, item)}
                  className={`block p-5 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all duration-200 shadow-md ${item.color} group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading font-bold text-white text-base">
                            {item.title}
                          </h3>
                          {!item.available && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                              Segera Hadir
                            </span>
                          )}
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    <div className="text-slate-500 group-hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </a>
              ))}

              {/* Campus Address Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-teal-400 shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1">
                      Kampus Universitas Islam Balitar
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                      JL. Imam Bonjol No. 16, Jl. Majapahit No.2-4, Sananwetan, Kec. Sananwetan, Kota Blitar, Jawa Timur 66137
                    </p>
                    <a
                      href="https://maps.google.com/?q=Universitas+Islam+Balitar+Blitar"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <span>Buka Petunjuk Arah Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 h-full min-h-[380px]"
            >
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl relative flex flex-col">
                <div className="p-3.5 bg-slate-850 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold flex items-center gap-2">
                    <MapPin size={14} className="text-teal-400" />
                    Lokasi Kampus UNISBA Blitar
                  </span>
                  <span className="text-slate-500 text-[11px]">Kota Blitar, Jawa Timur</span>
                </div>
                <iframe
                  title="Google Maps Universitas Islam Balitar"
                  src="https://maps.google.com/maps?q=JL.+Imam+Bonjol+No.+16,+Jl.+Majapahit+No.2-4,+Sananwetan,+Kota+Blitar,+Jawa+Timur+66137&output=embed"
                  className="w-full flex-1 min-h-[320px] border-0 filter saturate-[0.9] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modern Feedback Modal */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
            onClick={() => setShowWarning(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                <AlertCircle size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Informasi Kontak
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                {warningMessage}
              </p>
              <button
                onClick={() => setShowWarning(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-heading font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
              >
                Mengerti & Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;