import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState, useEffect } from "react";

// 👉 Images
import s1 from "@/assets/h2.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/library.jpg";
import s4 from "@/assets/s3.jpg";
import s5 from "@/assets/13.jpg";
import s6 from "@/assets/s7.jpeg";
import s7 from "@/assets/s8.jpeg";
import s8 from "@/assets/s9.jpeg";

const images = [s1, s2, s3, s4, s5, s6, s7, s8];

const AboutPreview = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  // 🔁 Auto Slide
  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [hovered]);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <>
      {/* ✅ Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');

          .hindi-font {
            font-family: 'Noto Sans Devanagari', 'Hind', 'Mangal', 'Nirmala UI', sans-serif;
          }
        `}
      </style>

      <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ================= CAROUSEL ================= */}
            <AnimatedSection>
              <div
                className="relative group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img
                  src={images[current]}
                  alt="School"
                  className="rounded-3xl shadow-xl w-full object-cover h-[420px] transition duration-700 transform group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition rounded-3xl"></div>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
                >
                  ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`cursor-pointer transition-all duration-300 ${
                        current === index
                          ? "w-6 h-3 bg-primary rounded-full"
                          : "w-3 h-3 bg-white/80 rounded-full"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* ================= CONTENT ================= */}
            <AnimatedSection delay={0.3}>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                About Our School
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-5">
                Building a Foundation for <span className="text-primary">Excellence</span>
              </h2>

              {/* ✅ Hindi Text with Professional Font */}
              <p className="hindi-font text-gray-700 leading-relaxed text-lg mb-4">
                शारदा बाल निकेतन सीनियर सेकेंडरी स्कूल, सीकवाड़ा (SBN School Seekwara) की स्थापना सन 1997 में ग्रामीणों के सहयोग से की गई। यह विद्यालय रामसीन से 5 किमी एवं भीनमाल से 30 किमी दूरी पर स्थित है और आज क्षेत्र के सबसे प्रतिष्ठित विद्यालयों में से एक बन चुका है।
              </p>

              <p className="hindi-font text-gray-700 leading-relaxed text-lg mb-6">
                यहां से पढ़े हुए विद्यार्थियों ने इंजीनियर, डॉक्टर, बिज़नेसमैन एवं सरकारी सेवाओं में उत्कृष्ट स्थान प्राप्त किया है। आज तीसरी पीढ़ी के विद्यार्थी भी यहां अध्ययन कर रहे हैं।
              </p>

              <Button
                asChild
                className="bg-primary text-white px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <Link to="/about">और जानें</Link>
              </Button>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPreview;