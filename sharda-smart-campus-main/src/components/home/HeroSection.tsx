import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-school.jpg";
import heroImg1 from "@/assets/h1.jpg";
import heroImg2 from "@/assets/h2.jpg";
import heroImg3 from "@/assets/h3.jpg";

const HeroSection = () => {
  const images = [heroImg, heroImg1, heroImg2, heroImg3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[550px] flex items-center overflow-hidden">

      {/* 🔄 Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-yellow-400 font-semibold mb-3 tracking-widest uppercase text-sm">
            Excellence in Education
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Sharda Bal Niketan
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-medium opacity-90">
              Sr. Sec. School
            </span>
          </h1>

          <p className="text-white/80 text-lg mb-2">
            Mudtrasili Road Golua, Seekwara, Jalore
          </p>

          <p className="text-white/70 text-base mb-8 max-w-lg">
            Nurturing young minds with values, knowledge, and skills for a brighter tomorrow.
          </p>

          {/* 🔥 Highlight Buttons */}
          <div className="flex flex-wrap gap-5">

            {/* 🎓 Admission Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                asChild
                size="lg"
                className="bg-yellow-400 text-black font-bold px-6 py-3 shadow-lg"
              >
                <Link to="/admissions">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Admission Enquiry
                </Link>
              </Button>
            </motion.div>

            {/* 📊 RESULT BUTTON (SUPER HIGHLIGHT) */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 bg-blue-500 blur-xl opacity-40 animate-pulse rounded-xl"></span>

              <Button
                asChild
                size="lg"
                className="relative bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-7 py-3 shadow-2xl border border-white/20"
              >
                <Link to="/results">
                  <ClipboardList className="w-5 h-5 mr-2" />
                  🎯 Check Result Now
                </Link>
              </Button>
            </motion.div>

          </div>

          {/* 🔘 Slider dots */}
          <div className="flex gap-2 mt-6">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === current
                    ? "bg-yellow-400 w-6"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;