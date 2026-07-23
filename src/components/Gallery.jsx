import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';
import fotoKelas from '../assets/fotokelas.png';

const galleryItems = [
  { id: 1, src: "https://picsum.photos/800/600?random=1", caption: "Diskusi Project Kelas" },
  { id: 2, src: "https://picsum.photos/800/600?random=2", caption: "Presentasi Algoritma" },
  { id: 3, src: "https://picsum.photos/800/600?random=3", caption: "Kerja Kelompok PBO" },
  { id: 4, src: "https://picsum.photos/800/600?random=4", caption: "Praktikum Jaringan" },
  { id: 5, src: "https://picsum.photos/800/600?random=5", caption: "Sesi Mentoring" },
  { id: 6, src: "https://picsum.photos/800/600?random=6", caption: "Kumpul Himpunan" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="gallery" className="relative py-20 md:py-24 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={fotoKelas} 
          alt="Background Galeri Kelas" 
          className="w-full h-full object-cover object-center" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/90" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold tracking-wider text-xs md:text-sm uppercase">Memori Kelas</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">Galeri Kami</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-dark/50 border border-white/10 transform-gpu"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="text-white w-6 h-6 mb-2 opacity-80" />
                  <h3 className="text-white font-medium text-base">{item.caption}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-dark/95"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption} 
                className="w-full h-full object-contain bg-dark"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/90 to-transparent">
                <h3 className="text-white text-lg font-semibold">{selectedImage.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;