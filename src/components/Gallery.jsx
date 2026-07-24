import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";

import fotoKelas from "../assets/fotokelas.png";

import afterUTS from "../assets/Gallery/afterUTS.png";
import bukber from "../assets/Gallery/bukber.jpeg";
import fotbar1 from "../assets/Gallery/fotbar1.jpeg";
import fotbar2 from "../assets/Gallery/fotbar2.jpeg";
import momenMaba from "../assets/Gallery/MomenMaba.jpeg";
import teknik2025 from "../assets/Gallery/Teknik2025.jpeg";

const galleryItems = [
  {
    id: 1,
    src: afterUTS,
    caption: "After UTS 1",
  },
  {
    id: 2,
    src: bukber,
    caption: "Bukber 2026",
  },
  {
    id: 3,
    src: fotbar1,
    caption: "Fotbar 2025",
  },
  {
    id: 4,
    src: momenMaba,
    caption: "Maba 2025",
  },
  {
    id: 5,
    src: teknik2025,
    caption: "Maba Teknik 2025",
  },
  {
    id: 6,
    src: fotbar2,
    caption: "After UTS 2",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-24 min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={fotoKelas}
          alt="Background Galeri Kelas"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-dark/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-semibold tracking-wider text-xs md:text-sm uppercase">
              Memori Kelas
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">
              Galeri Kami
            </h2>

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
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-dark/50 border border-white/10 shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <ZoomIn
                  size={26}
                  className="text-white mb-2 opacity-90"
                />

                <h3 className="text-white font-semibold text-base">
                  {item.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X className="text-white" size={26} />
            </button>

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-full object-contain bg-black"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                <h3 className="text-white text-xl font-semibold">
                  {selectedImage.caption}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;