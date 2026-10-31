import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, BookOpen, CalendarDays, CheckCircle, Info } from 'lucide-react';

const scheduleData = [
  {
    id: 1,
    day: "Senin",
    tag: "Awal Pekan",
    subjects: [
      {
        name: "Analisa dan Perancangan Sistem",
        time: "10:30 - 12:00",
        room: "A2-07",
        type: "Teori & Desain",
        roomColor: "bg-blue-50 text-blue-700 border-blue-200",
      },
      {
        name: "Jaringan Komputer",
        time: "15:30 - 17:00",
        room: "A2-07",
        type: "Teori & Lab",
        roomColor: "bg-blue-50 text-blue-700 border-blue-200",
      }
    ]
  },
  {
    id: 2,
    day: "Rabu",
    tag: "Komputasi",
    subjects: [
      {
        name: "Metode Numerik",
        time: "07:30 - 09:00",
        room: "A2-08",
        type: "Komputasi Sains",
        roomColor: "bg-teal-50 text-teal-700 border-teal-200",
      },
      {
        name: "Teknologi Informasi dan Komputer",
        time: "09:00 - 10:30",
        room: "A2-08",
        type: "Fundamental IT",
        roomColor: "bg-teal-50 text-teal-700 border-teal-200",
      }
    ]
  },
  {
    id: 3,
    day: "Kamis",
    tag: "Software & Bisnis",
    subjects: [
      {
        name: "Rekayasa Perangkat Lunak",
        time: "09:00 - 10:30",
        room: "A2-07",
        type: "Software Engineering",
        roomColor: "bg-blue-50 text-blue-700 border-blue-200",
      },
      {
        name: "Kewirausahaan Dasar",
        time: "10:30 - 12:00",
        room: "A2-06",
        type: "Business & Innovation",
        roomColor: "bg-purple-50 text-purple-700 border-purple-200",
      }
    ]
  },
  {
    id: 4,
    day: "Jumat",
    tag: "Praktikum Web",
    subjects: [
      {
        name: "Pemrograman Web",
        time: "12:30 - 14:00",
        room: "A2-07",
        type: "Fullstack Web",
        roomColor: "bg-blue-50 text-blue-700 border-blue-200",
      }
    ]
  }
];

const Schedule = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedDay, setSelectedDay] = useState("Semua");

  const filterOptions = ["Semua", "Senin", "Rabu", "Kamis", "Jumat"];

  const filteredSchedule = selectedDay === "Semua"
    ? scheduleData
    : scheduleData.filter((item) => item.day === selectedDay);

  return (
    <section id="schedule" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden tech-grid">
      {/* Soft background decor */}
      <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <CalendarDays size={14} />
            <span>Agenda Akademik Semester 4</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Jadwal Perkuliahan Kelas 3B
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Jadwal resmi mata kuliah tatap muka dan praktikum di Kampus Universitas Islam Balitar (Gedung A). Dirancang untuk keterbacaan tinggi di layar proyektor kelas.
          </p>
        </div>

        {/* Day Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                selectedDay === day
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
              }`}
            >
              {day === "Semua" ? "Semua Hari (4 Hari)" : day}
            </button>
          ))}
        </div>

        {/* Schedule Cards Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSchedule.map((dayItem) => (
            <motion.div
              key={dayItem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: dayItem.id * 0.05 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Day Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {dayItem.tag}
                    </span>
                    <h3 className="text-xl font-heading font-extrabold text-slate-900 leading-none mt-0.5">
                      {dayItem.day}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                    {dayItem.subjects.length} Matkul
                  </span>
                </div>

                {/* Subjects list */}
                <div className="space-y-4">
                  {dayItem.subjects.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                          <BookOpen size={16} />
                        </div>
                        <h4 className="font-heading font-bold text-slate-900 text-sm leading-snug">
                          {sub.name}
                        </h4>
                      </div>

                      {/* Time & Room badges */}
                      <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-200/60 text-xs">
                        <div className="inline-flex items-center gap-1.5 font-medium text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200">
                          <Clock size={13} className="text-primary" />
                          <span className="font-semibold">{sub.time}</span>
                        </div>

                        <div className={`inline-flex items-center gap-1.5 font-bold px-2 py-1 rounded-md border ${sub.roomColor}`}>
                          <MapPin size={13} />
                          <span>Ruang {sub.room}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom day info note */}
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                <CheckCircle size={13} className="text-teal-600 shrink-0" />
                <span>Gedung A UNISBA Blitar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projector Note Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
              <Info size={18} />
            </div>
            <span>
              <strong>Catatan Ruang Kuliah:</strong> Ruang A2-06, A2-07, dan A2-08 berada di Lantai 2 Gedung Utama UNISBA.
            </span>
          </div>
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full shrink-0">
            Semester Genap 2025/2026
          </span>
        </div>

      </div>
    </section>
  );
};

export default Schedule;