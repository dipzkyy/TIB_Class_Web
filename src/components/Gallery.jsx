import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// Assets
import fotoKelas from "../assets/fotokelas.png";

import afterUTS from "../assets/Gallery/afterUTS.png";
import bukber from "../assets/Gallery/bukber.jpeg";
import fotbar1 from "../assets/Gallery/Fotbar1.jpeg";
import fotbar2 from "../assets/Gallery/fotbar2.jpeg";
import momenMaba from "../assets/Gallery/MomenMaba.jpeg";
import teknik2025 from "../assets/Gallery/Teknik2025.jpeg";
import campJamburono from "../assets/Gallery/CampJamburono.jpeg";
import inFrame from "../assets/Gallery/inFrame.jpeg";

// Data galeri (statis, tidak berubah)
const galleryItems = [
  { id: 1, src: afterUTS, caption: "After UTS 1" },
  { id: 2, src: bukber, caption: "Bukber 2026" },
  { id: 3, src: fotbar1, caption: "Fotbar Semester 1" },
  { id: 4, src: momenMaba, caption: "Maba 2025" },
  { id: 5, src: teknik2025, caption: "Maba Teknik 2025" },
  { id: 6, src: fotbar2, caption: "After UTS 2" },
  { id: 7, src: campJamburono, caption: "Camp Jamburono" },
  { id: 8, src: inFrame, caption: "In Frame" },
];

/**
 * LazyImage - Komponen gambar dengan:
 * - Skeleton placeholder saat belum terlihat atau belum dimuat
 * - Intersection Observer via useInView agar gambar hanya dirender saat mendekati viewport
 * - Transisi opacity yang halus setelah gambar selesai dimuat
 */
const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px", // mulai render 200px sebelum masuk viewport
  });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={`${className} relative overflow-hidden`}>
      {/* Skeleton placeholder */}
      {(!inView || !loaded) && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      {/* Gambar hanya dirender jika sudah masuk area pandang */}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

const Gallery = () => {
  // Indeks gambar yang sedang ditampilkan di lightbox, null = tertutup
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Observer untuk animasi masuk section (judul + grid)
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const selectedImage =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;
  const totalItems = galleryItems.length;

  // Callback stabil untuk navigasi lightbox
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

  // Efek untuk: keyboard navigation, body scroll lock, fokus manajemen
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
      // Fokus tombol close setelah transisi ringan
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      // Kembalikan fokus ke elemen sebelumnya
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
      className="relative py-20 md:py-24 min-h-screen flex items-center"
    >
      {/* Background image tetap dengan overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={fotoKelas}
          alt="Background foto kelas sebagai latar galeri"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/90" />
      </div>

      {/* Konten utama */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Heading dengan animasi masuk */}
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

        {/* Grid galeri */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-dark/50 border border-white/10 shadow-lg"
              onClick={() => handleOpen(index)}
              role="button"
              tabIndex={0}
              aria-label={`Lihat gambar ${item.caption}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(index);
                }
              }}
            >
              {/* Gambar dengan lazy loading + skeleton + efek zoom saat hover */}
              <LazyImage
                src={item.src}
                alt={item.caption}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay hover: ikon ZoomIn & caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                <ZoomIn size={26} className="text-white mb-2 opacity-90" />
                <h3 className="text-white font-semibold text-base">
                  {item.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox dengan navigasi & aksesibilitas */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Tampilan gambar galeri"
          >
            {/* Tombol tutup */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
              aria-label="Tutup lightbox"
            >
              <X className="text-white" size={26} />
            </button>

            {/* Navigasi kiri */}
            {totalItems > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="text-white" size={30} />
              </button>
            )}

            {/* Navigasi kanan */}
            {totalItems > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="text-white" size={30} />
              </button>
            )}

            {/* Kontainer gambar lightbox dengan animasi per gambar */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
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