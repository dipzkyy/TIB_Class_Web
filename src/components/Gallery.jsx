import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from "lucide-react";

// Assets asli project
import afterUTS from "../assets/Gallery/afterUTS.png";
import bukber from "../assets/Gallery/bukber.jpeg";
import fotbar1 from "../assets/Gallery/Fotbar1.jpeg";
import fotbar2 from "../assets/Gallery/fotbar2.jpeg";
import momenMaba from "../assets/Gallery/MomenMaba.jpeg";
import teknik2025 from "../assets/Gallery/Teknik2025.jpeg";
import campJamburono from "../assets/Gallery/CampJamburono.jpeg";
import inFrame from "../assets/Gallery/inFrame.jpeg";

const galleryItems = [
  { id: 1, src: afterUTS, caption: "After UTS 1", category: "Akademik", date: "Semester 1" },
  { id: 2, src: bukber, caption: "Bukber Kebersamaan", category: "Kebersamaan", date: "Tahun 2026" },
  { id: 3, src: fotbar1, caption: "Fotbar Semester 1", category: "Akademik", date: "Semester 1" },
  { id: 4, src: momenMaba, caption: "Momen Maba 2025", category: "Orientasi", date: "Awal Kuliah" },
  { id: 5, src: teknik2025, caption: "Maba Teknik 2025", category: "Orientasi", date: "Fakultas Teknik" },
  { id: 6, src: fotbar2, caption: "After UTS 2", category: "Akademik", date: "Semester 2" },
  { id: 7, src: campJamburono, caption: "Camp Jamburono", category: "Outdoor", date: "Kegiatan Alam" },
  { id: 8, src: inFrame, caption: "In Frame Kelas 3B", category: "Kebersamaan", date: "Dokumentasi" },
];

const categories = ["Semua", "Akademik", "Kebersamaan", "Orientasi", "Outdoor"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredItems = selectedCategory === "Semua"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const selectedImage = selectedIndex !== null ? filteredItems[selectedIndex] : null;
  const totalItems = filteredItems.length;

  const handleOpen = useCallback((index) => {
    previousFocusRef.current = document.activeElement;
    setSelectedIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + totalItems) % totalItems : 0
    );
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % totalItems : 0
    );
  }, [totalItems]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-slate-900 text-white overflow-hidden tech-grid-dark"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera size={14} />
            <span>Dokumentasi Visual</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-3">
            Galeri Memori Kelas 3B
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kumpulan rekam jejak momen perkuliahan, praktikum, ujian, dan kebersamaan di luar kelas bersama keluarga besar Teknik Informatika 3B.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/80"
                }`}
              >
                {cat === "Semua" ? "Semua Momen (8)" : cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-800/90 border border-slate-700/70 shadow-lg hover:border-slate-500 hover:shadow-2xl transition-all"
              onClick={() => handleOpen(index)}
              role="button"
              tabIndex={0}
              aria-label={`Buka foto ${item.caption}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(index);
                }
              }}
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {/* Category Pill Tag on Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-sm text-teal-300 border border-slate-700/80">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 font-medium block">{item.date}</span>
                      <h3 className="text-white font-heading font-bold text-sm leading-snug">{item.caption}</h3>
                    </div>
                    <div className="p-2 rounded-full bg-white/20 text-white">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Caption for Accessibility & Clear Viewing */}
              <div className="p-3 bg-slate-850 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200 truncate pr-2">
                  {item.caption}
                </span>
                <span className="text-[10px] text-slate-400 shrink-0">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Tampilan penuh foto galeri"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
              aria-label="Tutup foto"
            >
              <X size={22} />
            </button>

            {/* Previous button */}
            {totalItems > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next button */}
            {totalItems > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Lightbox content card */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex flex-col"
            >
              <div className="relative flex-1 flex items-center justify-center bg-black overflow-hidden max-h-[72vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain max-h-[72vh]"
                />
              </div>
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-white">
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg">
                    {selectedImage.caption}
                  </h3>
                  <span className="text-xs text-teal-400 font-medium">
                    {selectedImage.category} • {selectedImage.date}
                  </span>
                </div>
                <div className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  {selectedIndex + 1} / {totalItems}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;