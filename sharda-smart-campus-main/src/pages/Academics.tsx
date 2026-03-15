import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BookOpen, Microscope, Monitor, Dumbbell, Library, GraduationCap } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";
import classroomImg from "@/assets/classroom.jpg";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports.jpg";

const facilities = [
  { icon: Microscope, title: "Science Labs", desc: "Well-equipped Geography, Science labs.", img: labImg },
  { icon: Monitor, title: "Computer Lab", desc: "Modern computer lab with internet connectivity.", img: classroomImg },
  { icon: Library, title: "Library", desc: "Vast collection of books, journals, and reference materials.", img: libraryImg },
  { icon: Dumbbell, title: "Sports Ground", desc: "Spacious playground for cricket, football, athletics.", img: sportsImg },
];

const Academics = () => (
  <Layout>
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 gradient-primary opacity-80" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Academics</h1>
    </div>

    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Our Curriculum</p>
          <h2 className="section-title mb-6">Classes We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Nursery - KG", "Class I - V", "Class VI - VIII", "Class IX - X", "Class XI - XII (Arts)"].map((c, i) => (
              <div key={i} className="bg-accent rounded-lg p-4 card-hover">
                <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm text-accent-foreground">{c}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Affiliated with the Rajasthan Board of Secondary Education (RBSE), our curriculum is designed 
            to provide a strong foundation in all subjects while encouraging critical thinking and creativity.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">World-Class Infrastructure</p>
          <h2 className="section-title">Our Facilities</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border card-hover">
                <img src={f.img} alt={f.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground">{f.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Academics;
