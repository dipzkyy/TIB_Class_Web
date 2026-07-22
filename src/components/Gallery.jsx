import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';
import fotoKelas from '../assets/fotokelas.png';

// Data dummy untuk foto galeri
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
    <section id="gallery" className="relative py-24 min-h-screen flex items-center">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fotoKelas} 
          alt="Background Galeri Kelas" 
          className="w-full h-full object-cover object-center fixed-attachment" 
        />
        <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Memori Kelas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Galeri Kami</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-dark/50 border border-white/10"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="text-white w-8 h-8 mb-3 opacity-80" />
                  <h3 className="text-white font-medium text-lg">{item.caption}</h3>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-dark/95 backdrop-blur-lg"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption} 
                className="w-full h-full object-contain bg-dark"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/90 to-transparent">
                <h3 className="text-white text-xl font-semibold">{selectedImage.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;