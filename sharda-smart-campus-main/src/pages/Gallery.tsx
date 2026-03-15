import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState } from "react";

import heroImg from "@/assets/hero-school.jpg";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab.jpg";

import e1 from "@/assets/01.jpg";
import e2 from "@/assets/02.jpg";
import e3 from "@/assets/03.jpg";
import e4 from "@/assets/04.jpg";
import e5 from "@/assets/05.jpg";
import e6 from "@/assets/06.jpg";
import e7 from "@/assets/07.jpg";
import e8 from "@/assets/08.jpg";
import e9 from "@/assets/09.jpg";
import e10 from "@/assets/10.jpg";
import e11 from "@/assets/11.jpg";

import sportsImg from "@/assets/sports.jpg";
import libraryImg from "@/assets/library.jpg";

const categories = ["All", "Campus", "Academics", "Sports", "Events", "Farewell"];

const photos = [
  { src: heroImg, cat: "Campus", label: "School Building" },
  { src: classroomImg, cat: "Academics", label: "Smart Classroom" },
  { src: labImg, cat: "Academics", label: "Science Laboratory" },
  { src: sportsImg, cat: "Sports", label: "Sports Ground" },
  { src: libraryImg, cat: "Academics", label: "School Library" },

  { src: e1, cat: "Events", label: "Republic Day" },
  { src: e2, cat: "Events", label: "Republic Day" },
  { src: e3, cat: "Events", label: "Republic Day" },
  { src: e4, cat: "Events", label: "Republic Day" },
  { src: e5, cat: "Events", label: "Republic Day" },
  { src: e6, cat: "Events", label: "Republic Day" },
  { src: e7, cat: "Events", label: "Republic Day" },
  { src: e8, cat: "Events", label: "Republic Day" },
  { src: e9, cat: "Events", label: "Republic Day" },
  { src: e10, cat: "Events", label: "Republic Day" },
  { src: e11, cat: "Events", label: "Republic Day" },
];

const Gallery = () => {

  const [active, setActive] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? photos
      : photos.filter((p) => p.cat === active);

  return (
    <Layout>

      {/* Hero */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <div className="absolute inset-0 gradient-primary opacity-80" />

        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-primary-foreground">
          Photo Gallery
        </h1>

      </div>

      {/* Gallery */}
      <section className="section-padding bg-card">

        <div className="container mx-auto">

          {/* Categories */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {filtered.map((p, i) => (

              <AnimatedSection key={`${p.label}-${i}`} delay={i * 0.05}>

                <div className="group relative overflow-hidden rounded-xl aspect-[4/3] card-hover">

                  {/* Image */}
                  <img
                    src={p.src}
                    alt={p.label}
                    onClick={() => setSelectedImg(p.src)}
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 pointer-events-none transition-colors duration-300 flex items-end">

                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">

                      <p className="text-primary-foreground font-medium text-sm">
                        {p.label}
                      </p>

                      <p className="text-primary-foreground/70 text-xs">
                        {p.cat}
                      </p>

                    </div>

                  </div>

                </div>

              </AnimatedSection>

            ))}

          </div>

        </div>

      </section>

      {/* Image Modal */}

      {selectedImg && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >

          <div className="relative">

            {/* Image */}
            <img
              src={selectedImg}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
            />

            {/* Download Button */}
            <a
              href={selectedImg}
              download
              className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded text-sm"
            >
              Download
            </a>

          </div>

        </div>

      )}

    </Layout>
  );
};

export default Gallery;