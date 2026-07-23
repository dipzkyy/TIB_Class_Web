import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Crown } from 'lucide-react';

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

// Pisahkan data
const leaders = membersData.filter(m => m.role !== "Anggota");
const members = membersData.filter(m => m.role === "Anggota");

const Members = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Kartu anggota/pengurus
  const Card = ({ member, isLeader = false, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`glass bg-white/90 rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-lg border border-white flex flex-col items-center text-center group transform-gpu ${
        isLeader ? 'border-l-4 border-l-primary shadow-md' : ''
      }`}
    >
      <div className="relative mb-4">
        <div className={`absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${
          isLeader ? 'opacity-50' : ''
        }`} />
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563EB&color=fff&size=128&bold=true`}
          alt={member.name}
          className="relative w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          loading="lazy"
        />
        {isLeader && (
          <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full p-1 shadow-lg">
            <Crown className="w-4 h-4" />
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-dark mb-1 leading-tight group-hover:text-primary transition-colors">
        {member.name}
      </h3>

      <span className={`text-sm font-medium px-4 py-1.5 rounded-full ${
        isLeader 
          ? 'bg-primary text-white' 
          : 'bg-primary/10 text-primary'
      }`}>
        {member.role}
      </span>
    </motion.div>
  );

  return (
    <section id="members" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="hidden md:block absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[100px] -z-10 transform-gpu" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-primary font-semibold tracking-wider text-xs md:text-sm uppercase">
            Keluarga Besar
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-dark mt-2 mb-3">
            Struktur Organisasi Kelas
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div ref={ref}>
          {/* Pengurus */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-dark">Pengurus Kelas</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {leaders.map((member, idx) => (
                <Card key={member.id} member={member} isLeader={true} index={idx} />
              ))}
            </div>
          </div>

          {/* Anggota */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-dark">Anggota Kelas</h3>
              <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {members.length} orang
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member, idx) => (
                <Card key={member.id} member={member} isLeader={false} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;