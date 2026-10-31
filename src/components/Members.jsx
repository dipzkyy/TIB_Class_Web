import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Crown, Search } from 'lucide-react';

const membersData = [
  // Pengurus
  { id: 1, name: "Zainun Abidin", role: "Ketua Kelas", category: "Pengurus" },
  { id: 2, name: "Nadila Ristanti", role: "Wakil Ketua Kelas", category: "Pengurus" },
  { id: 3, name: "Jazilatun Nabilla", role: "Bendahara", category: "Pengurus" },
  { id: 4, name: "Tahta Alfina Pagelaran", role: "Sekretaris", category: "Pengurus" },
  // Anggota
  { id: 5, name: "Adelia Wahyu Bima Sakti", role: "Anggota", category: "Anggota" },
  { id: 6, name: "Aisha Calluella Putri Wijaya", role: "Anggota", category: "Anggota" },
  { id: 7, name: "Alifiyan Rezky Pratama", role: "Anggota", category: "Anggota" },
  { id: 8, name: "Aswin Akmal Rizantha", role: "Anggota", category: "Anggota" },
  { id: 9, name: "Bayu Putra Pratama", role: "Anggota", category: "Anggota" },
  { id: 10, name: "Devika Novalina", role: "Anggota", category: "Anggota" },
  { id: 11, name: "Dhia Al Fitria", role: "Anggota", category: "Anggota" },
  { id: 12, name: "Dila Rahma Wakhida", role: "Anggota", category: "Anggota" },
  { id: 13, name: "Diva Islamy Rizky Akbar", role: "Anggota", category: "Anggota" },
  { id: 14, name: "Ema Netasari", role: "Anggota", category: "Anggota" },
  { id: 15, name: "Fajar Dwi Prayitno", role: "Anggota", category: "Anggota" },
  { id: 16, name: "Febrinda Eka Prasetyo", role: "Anggota", category: "Anggota" },
  { id: 17, name: "Fibi Dita Salsabilla", role: "Anggota", category: "Anggota" },
  { id: 18, name: "Fidlela Latifa Salsabila", role: "Anggota", category: "Anggota" },
  { id: 19, name: "Gladis Ayu Diapitaloka", role: "Anggota", category: "Anggota" },
  { id: 20, name: "Meisya Rozzaaqy Widya Putri", role: "Anggota", category: "Anggota" },
  { id: 21, name: "Mohamad Rifky Ramadani", role: "Anggota", category: "Anggota" },
  { id: 22, name: "Muhammad Fachri Fairuz", role: "Anggota", category: "Anggota" },
  { id: 23, name: "Muhammad Rizki Desca Firmansyah", role: "Anggota", category: "Anggota" },
  { id: 24, name: "Muhamad Naufal Afrizal", role: "Anggota", category: "Anggota" },
  { id: 25, name: "Nadia Mecca Aurellia", role: "Anggota", category: "Anggota" },
  { id: 26, name: "Nadila Ristanti", role: "Anggota", category: "Anggota" },
  { id: 27, name: "Nahrul Mubarok", role: "Anggota", category: "Anggota" },
  { id: 28, name: "Raffi Ahmad Alfahrezy", role: "Anggota", category: "Anggota" },
  { id: 29, name: "Rendra Adnan Farid", role: "Anggota", category: "Anggota" },
  { id: 30, name: "Reyhan Arsa Mulia Gutama", role: "Anggota", category: "Anggota" },
  { id: 31, name: "Reynara Putra Ramadhan", role: "Anggota", category: "Anggota" },
  { id: 32, name: "Rijaldi Aziz Nur Khamim", role: "Anggota", category: "Anggota" },
  { id: 33, name: "Shelma A’yunina Ro’ifin", role: "Anggota", category: "Anggota" },
  { id: 34, name: "Talita Almira Esfiana", role: "Anggota", category: "Anggota" },
  { id: 35, name: "Unggul Wahyudiningrat Eka Atmaja", role: "Anggota", category: "Anggota" }
];

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getAvatarGradient = (id) => {
  const gradients = [
    "from-blue-600 to-indigo-600",
    "from-teal-600 to-emerald-600",
    "from-sky-600 to-blue-700",
    "from-indigo-600 to-purple-600",
    "from-cyan-600 to-teal-700",
  ];
  return gradients[id % gradients.length];
};

const Members = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredMembers = useMemo(() => {
    return membersData.filter((member) => {
      const matchSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchTab = activeTab === "Semua" ? true : member.category === activeTab;
      return matchSearch && matchTab;
    });
  }, [searchTerm, activeTab]);

  const leaders = membersData.filter((m) => m.category === "Pengurus");

  return (
    <section id="members" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden tech-grid">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Users size={14} />
            <span>Keluarga Besar Kelas 3B</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Daftar Mahasiswa & Pengurus
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Mengenal seluruh 35 mahasiswa Teknik Informatika 3B Universitas Islam Balitar yang bersama-sama berkarya dan menempuh studi.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="max-w-2xl mx-auto mb-12 flex flex-col sm:flex-row gap-3 items-center">
          {/* Search Box */}
          <div className="relative w-full">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari nama mahasiswa atau jabatan..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs shrink-0 w-full sm:w-auto justify-center">
            {["Semua", "Pengurus", "Anggota"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab}
                <span className="ml-1.5 opacity-75 text-[10px]">
                  ({tab === "Semua" ? membersData.length : tab === "Pengurus" ? 4 : 31})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Leadership Spotlight (shown when not searching or when search matches leaders) */}
        {searchTerm === "" && (activeTab === "Semua" || activeTab === "Pengurus") && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <Crown className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-heading font-bold text-slate-900">
                Struktur Pengurus Kelas
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {leaders.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-white rounded-2xl p-5 border-2 border-primary/20 shadow-soft hover:shadow-elevated transition-all flex flex-col items-center text-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-full pointer-events-none" />
                  
                  {/* Avatar */}
                  <div className="relative mb-3.5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center font-heading font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
                      {getInitials(leader.name)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-1 shadow-sm">
                      <Crown size={12} />
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-slate-900 text-base leading-tight mb-1">
                    {leader.name}
                  </h4>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {leader.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Members Grid */}
        <div ref={ref}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-heading font-bold text-slate-900">
                {activeTab === "Pengurus" ? "Pengurus" : activeTab === "Anggota" ? "Daftar Anggota" : "Semua Mahasiswa"}
              </h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-200/80 text-slate-700">
              Menampilkan {filteredMembers.length} Mahasiswa
            </span>
          </div>

          {filteredMembers.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 font-medium text-sm">
                Tidak ada mahasiswa yang cocok dengan pencarian "{searchTerm}".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredMembers.map((member, idx) => {
                const isLeader = member.category === "Pengurus";
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.25, delay: (idx % 12) * 0.03 }}
                    className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex flex-col items-center text-center hover:shadow-md group ${
                      isLeader
                        ? "border-primary/30 bg-blue-50/20"
                        : "border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    {/* Initials Avatar */}
                    <div className="relative mb-3">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr ${getAvatarGradient(member.id)} text-white flex items-center justify-center font-heading font-bold text-sm sm:text-base shadow-sm group-hover:scale-105 transition-transform`}>
                        {getInitials(member.name)}
                      </div>
                      {isLeader && (
                        <div className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full p-1 shadow-xs">
                          <Crown size={10} />
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>

                    {/* Role badge */}
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full mt-auto ${
                      isLeader
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-600 border border-slate-200/80"
                    }`}>
                      {member.role}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Members;