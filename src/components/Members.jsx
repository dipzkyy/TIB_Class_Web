import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search } from 'lucide-react';

const membersData = [
  { 
    id: 1, 
    name: "Diva Islamy Rizky Akbar", 
    nim: "25104410033", 
    role: "Mahasiswa",
    interests: ["Fullstack Web", "UI/UX", "Python"], 
    ig: "dipa_rizky" 
  },
  { 
    id: 2, 
    name: "Tahta Alfina Pagelaran", 
    nim: "25104410040", 
    role: "Mahasiswa",
    interests: ["Backend", "Database", "Analyst"], 
    ig: "tahtaaf" 
  },
  { 
    id: 3, 
    name: "Sugeng Tambler", 
    nim: "25104410035", 
    role: "Mahasiswa",
    interests: ["Algorithms", "Software Eng", "Java"], 
    ig: "rawr_sugeng" 
  },
  { 
    id: 4, 
    name: "Budi Santoso", 
    nim: "25104410021", 
    role: "Mahasiswa",
    interests: ["Mobile Dev", "Flutter", "Kotlin"], 
    ig: "budi.dev" 
  },
  { 
    id: 5, 
    name: "Siti Aminah", 
    nim: "25104410018", 
    role: "Mahasiswa",
    interests: ["Data Science", "Machine Learning"], 
    ig: "siti_ai" 
  },
  { 
    id: 6, 
    name: "Rizky Firmansyah", 
    nim: "25104410042", 
    role: "Mahasiswa",
    interests: ["Cyber Security", "Networking"], 
    ig: "rizky.sec" 
  }
];

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredMembers = membersData.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    member.nim.includes(searchQuery)
  );

  return (
    <section id="members" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-[10%] right-[-5%] w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Keluarga Besar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Anggota Kelas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Cari nama atau NIM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 glass bg-white/70 border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl outline-none transition-all duration-300 text-slate-700 font-medium shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        <motion.div ref={ref} className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredMembers.map((member, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={member.id}
                    className="glass bg-white/80 rounded-[2rem] p-6 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl border border-white flex flex-col items-center text-center group"
                  >
                    <div className="relative mb-5">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563EB&color=fff&size=128&bold=true`} 
                        alt={member.name} 
                        className="relative w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-dark mb-1 leading-tight group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm mb-4 bg-slate-100 px-3 py-1 rounded-full">
                      NIM: {member.nim}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
                      {member.interests.map((interest, idx) => (
                        <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10">
                          {interest}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto w-full pt-4 border-t border-slate-100 flex justify-center">
                      <a 
                        href={`https://instagram.com/${member.ig}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-500 hover:text-[#E1306C] transition-colors font-medium text-sm"
                      >
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                        <span>@{member.ig}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Pencarian Tidak Ditemukan</h3>
                <p className="text-slate-500">Tidak ada anggota dengan nama atau NIM "{searchQuery}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;