import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import libraryImg from "@/assets/library.jpg";
import heroImg from "@/assets/hero-school.jpg";

const images = [
  { src: heroImg, label: "Campus" },
  { src: classroomImg, label: "Classroom" },
  { src: labImg, label: "Science Lab" },
  { src: sportsImg, label: "Sports" },
  { src: libraryImg, label: "Library" },
];

const GalleryPreview = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Our Campus Life</p>
        <h2 className="section-title">Photo Gallery</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-xl aspect-square card-hover">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  {img.label}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to="/gallery">View Full Gallery <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default GalleryPreview;
