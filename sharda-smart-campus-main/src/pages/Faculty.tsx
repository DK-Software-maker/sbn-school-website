import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Users } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const teachers = [
  { name: "Shri Madharam Dhanak", subject: "Mathematics", qualification: "M.Sc., B.Ed." },
  { name: "Mrs. Prerna Choudhary", subject: "English", qualification: "M.A., B.Ed." },
  { name: "Shri Ugam singh", subject: "Science", qualification: "M.Sc., B.Ed." },
  { name: "Shri Bhomaram Singhal", subject: "Hindi", qualification: "M.A., B.Ed." },
  { name: "Shri Shakti singh", subject: "Social Science", qualification: "M.A., B.Ed." },
  { name: "Mrs. Kanku kumari", subject: "Computer Science", qualification: "MCA, B.Ed." },
  { name: "Shri Dinesh kumar", subject: "Physical Education", qualification: "M.P.Ed." },
  { name: "Shri Hajararam", subject: "Sanskrit", qualification: "M.A., B.Ed." },
];

const Faculty = () => (
  <Layout>
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 gradient-primary opacity-80" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Our Faculty</h1>
    </div>

    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Dedicated Educators</p>
          <h2 className="section-title">Meet Our Teachers</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-background rounded-xl p-6 text-center border border-border card-hover">
                <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{t.name}</h3>
                <p className="text-primary font-medium text-sm">{t.subject}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.qualification}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;
