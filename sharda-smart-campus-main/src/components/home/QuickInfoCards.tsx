import { GraduationCap, Newspaper, ClipboardList, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  { icon: GraduationCap, title: "Admissions Open", desc: "Session 2025-26 admissions now open for all classes.", link: "/admissions", color: "bg-primary" },
  { icon: Newspaper, title: "Latest News", desc: "Stay updated with school announcements and news.", link: "/notices", color: "bg-gold" },
  { icon: ClipboardList, title: "Results", desc: "Check your examination results online.", link: "/results", color: "bg-primary" },
  { icon: CalendarDays, title: "Events", desc: "Upcoming events, functions, and celebrations.", link: "/notices", color: "bg-gold" },
];

const QuickInfoCards = () => (
  <section className="section-padding -mt-16 relative z-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={c.link}
              className="block bg-card rounded-xl p-6 shadow-lg card-hover group"
            >
              <div className={`w-12 h-12 ${c.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <c.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg text-card-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickInfoCards;
