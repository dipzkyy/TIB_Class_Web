import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search } from 'lucide-react';

const membersData = [
  // Pengurus
  { id: 1, name: "Mochamad Nazar Sirot", role: "Ketua Kelas" },
  { id: 2, name: "Tahta Alfina Pagelaran", role: "Sekretaris" },
  { id: 3, name: "Jazilatun Nabilla", role: "Bendahara" },
  { id: 4, name: "Zainun Abidin", role: "Wakil Ketua Kelas" },
  // Anggota
  { id: 5, name: "Adelia Wahyu Bima Sakti", role: "Anggota" },
  { id: 6, name: "Aisha Calluella Putri Wijaya", role: "Anggota" },
  { id: 7, name: "Alifiyan Rezky Pratama", role: "Anggota" },
  { id: 8, name: "Aswin Akmal Rizantha", role: "Anggota" },
  { id: 9, name: "Bayu Putra Pratama", role: "Anggota" },
  { id: 10, name: "Devika Novalina", role: "Anggota" },
  { id: 11, name: "Dhia Al Fitria", role: "Anggota" },
  { id: 12, name: "Dila Rahma Wakhida", role: "Anggota" },
  { id: 13, name: "Diva Islamy Rizky Akbar", role: "Anggota" },
  { id: 14, name: "Ema Netasari", role: "Anggota" },
  { id: 15, name: "Fajar Dwi Prayitno", role: "Anggota" },
  { id: 16, name: "Febrinda Eka Prasetyo", role: "Anggota" },
  { id: 17, name: "Fibi Dita Salsabilla", role: "Anggota" },
  { id: 18, name: "Fidlela Latifa Salsabila", role: "Anggota" },
  { id: 19, name: "Gladis Ayu Diapitaloka", role: "Anggota" },
  { id: 20, name: "Meisya Rozzaaqy Widya Putri", role: "Anggota" },
  { id: 21, name: "Mohamad Rifky Ramadani", role: "Anggota" },
  { id: 22, name: "Muhammad Fachri Fairuz", role: "Anggota" },
  { id: 23, name: "Muhammad Rizki Desca Firmansyah", role: "Anggota" },
  { id: 24, name: "Muhamad Naufal Afrizal", role: "Anggota" },
  { id: 25, name: "Nadia Mecca Aurellia", role: "Anggota" },
  { id: 26, name: "Nadila Ristanti", role: "Anggota" },
  { id: 27, name: "Nahrul Mubarok", role: "Anggota" },
  { id: 28, name: "Raffi Ahmad Alfahrezy", role: "Anggota" },
  { id: 29, name: "Rendra Adnan Farid", role: "Anggota" },
  { id: 30, name: "Reyhan Arsa Mulia Gutama", role: "Anggota" },
  { id: 31, name: "Reynara Putra Ramadhan", role: "Anggota" },
  { id: 32, name: "Rijaldi Aziz Nur Khamim", role: "Anggota" },
  { id: 33, name: "Shelma A’yunina Ro’ifin", role: "Anggota" },
  { id: 34, name: "Talita Almira Esfiana", role: "Anggota" },
  { id: 35, name: "Unggul Wahyudiningrat Eka Atmaja", role: "Anggota" }
];

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Filter hanya berdasarkan nama (NIM sudah dihapus)
  const filteredMembers = membersData.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="members" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Efek blur hanya untuk desktop */}
      <div className="hidden md:block absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[100px] -z-10 transform-gpu" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <span className="text-primary font-semibold tracking-wider text-xs md:text-sm uppercase">
              Keluarga Besar
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark mt-2 mb-3">
              Anggota Kelas
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Cari nama anggota..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 glass bg-white/80 border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl outline-none transition-all duration-200 text-slate-700 font-medium shadow-sm text-sm md:text-base"
              />
            </div>
          </motion.div>
        </div>

        <motion.div ref={ref} className="min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    key={member.id}
                    className="glass bg-white/90 rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-lg border border-white flex flex-col items-center text-center group transform-gpu"
                  >
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563EB&color=fff&size=128&bold=true`}
                        alt={member.name}
                        className="relative w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-dark mb-1 leading-tight group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>

                    <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                      {member.role}
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-1">Pencarian Tidak Ditemukan</h3>
                <p className="text-slate-500 text-sm">
                  Tidak ada anggota dengan nama "{searchQuery}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;