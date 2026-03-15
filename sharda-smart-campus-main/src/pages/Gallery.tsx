import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState } from "react";
import heroImg from "@/assets/hero-school.jpg";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import libraryImg from "@/assets/library.jpg";

const categories = ["All", "Campus", "Academics", "Sports", "Events"];

const photos = [
  { src: heroImg, cat: "Campus", label: "School Building" },
  { src: classroomImg, cat: "Academics", label: "Smart Classroom" },
  { src: labImg, cat: "Academics", label: "Science Laboratory" },
  { src: sportsImg, cat: "Sports", label: "Sports Ground" },
  { src: libraryImg, cat: "Academics", label: "School Library" },
  { src: heroImg, cat: "Campus", label: "Campus Front View" },
  { src: classroomImg, cat: "Events", label: "Annual Day" },
  { src: labImg, cat: "Events", label: "Science Exhibition" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <Layout>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 gradient-primary opacity-80" />
        <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Photo Gallery</h1>
      </div>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <AnimatedSection key={`${p.label}-${i}`} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-xl aspect-[4/3] card-hover">
                  <img src={p.src} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-primary-foreground font-medium text-sm">{p.label}</p>
                      <p className="text-primary-foreground/70 text-xs">{p.cat}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
