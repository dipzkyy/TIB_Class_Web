import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, BookOpen } from 'lucide-react';

const scheduleData = [
  {
    id: 1,
    day: "Senin",
    subjects: [
      { name: "Algoritma & Struktur Data", time: "08:00 - 10:30", room: "Ruang LAB 1" },
      { name: "Basis Data Lanjut", time: "11:00 - 13:30", room: "Ruang LAB 2" }
    ]
  },
  {
    id: 2,
    day: "Selasa",
    subjects: [
      { name: "Pemrograman Berorientasi Objek", time: "08:00 - 10:30", room: "Ruang LAB 1" },
      { name: "Matematika Diskrit", time: "13:30 - 16:00", room: "Ruang Teori A" }
    ]
  },
  {
    id: 3,
    day: "Rabu",
    subjects: [
      { name: "Sistem Operasi", time: "09:00 - 11:30", room: "Ruang Teori B" },
      { name: "Pemrograman Web Lanjut", time: "13:00 - 15:30", room: "Ruang LAB 3" }
    ]
  },
  {
    id: 4,
    day: "Kamis",
    subjects: [
      { name: "Interaksi Manusia & Komputer", time: "08:00 - 10:30", room: "Ruang LAB 2" }
    ]
  },
  {
    id: 5,
    day: "Jumat",
    subjects: [
      { name: "Pendidikan Agama", time: "08:00 - 09:40", room: "Ruang Teori A" },
      { name: "Kewarganegaraan", time: "10:00 - 11:40", room: "Ruang Teori A" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const Schedule = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="schedule" className="py-20 md:py-24 bg-background relative overflow-hidden">
      
      {/* Offload Blur to Desktop Only */}
      <div className="hidden md:block absolute top-[20%] left-[-5%] w-[25rem] h-[25rem] bg-secondary/10 rounded-full blur-[80px] -z-10 transform-gpu" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold tracking-wider text-xs md:text-sm uppercase">Kegiatan Akademik</span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark mt-2 mb-3">Jadwal Perkuliahan</h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {scheduleData.map((dayItem) => (
            <motion.div 
              key={dayItem.id} 
              variants={cardVariants}
              className="glass bg-white/90 rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-lg border border-slate-100 transform-gpu"
            >
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 pb-3 border-b border-slate-200">
                {dayItem.day}
              </h3>
              
              <div className="flex flex-col gap-4">
                {dayItem.subjects.map((subject, idx) => (
                  <div key={idx} className="flex flex-col gap-2 group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm md:text-base leading-tight">
                          {subject.name}
                        </h4>
                        <div className="flex flex-col gap-1 mt-1.5 text-xs md:text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-secondary" />
                            <span>{subject.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-accent" />
                            <span>{subject.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;