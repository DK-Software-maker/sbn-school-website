import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-school.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Excellence in Education
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Sharda Bal Niketan
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal opacity-90">
              Sr. Sec. School
            </span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-2">
            Mudtrasili Road Golua, Seekwara, Jalore 
          </p>
          <p className="text-primary-foreground/70 text-base mb-8 max-w-lg">
            Nurturing young minds with values, knowledge, and skills for a brighter tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gradient-gold text-navy font-semibold border-0 hover:opacity-90">
              <Link to="/admissions">
                <GraduationCap className="w-5 h-5 mr-2" />
                Admissions Open
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
              <Link to="/results">
                <ClipboardList className="w-5 h-5 mr-2" />
                Check Results
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
