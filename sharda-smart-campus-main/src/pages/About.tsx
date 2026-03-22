import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Eye } from "lucide-react";
import { useEffect, useState } from "react";

import principalImg from "@/assets/principal.jpg";
import heroImg from "@/assets/hero-school.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import vprincipalImg from "@/assets/vprincipal.jpg";

/* 🔢 Counter */
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center backdrop-blur-lg bg-white/30 border border-white/20 rounded-xl p-6 shadow-xl">
      <h2 className="text-4xl font-bold text-primary">{count}+</h2>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const About = () => (
  <Layout>

    {/* ✅ Fonts */}
    <style>
      {`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700&family=Poppins:wght@300;400;600;700&display=swap');
      .font-hindi { font-family: 'Noto Serif Devanagari', serif; }
      .font-english { font-family: 'Poppins', sans-serif; }
      `}
    </style>

    {/* 🔥 HERO */}
    <div className="relative h-64 md:h-80 flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 bg-black/60" />
      <h1 className="relative z-10 text-white text-5xl font-bold font-english">About Us</h1>
    </div>

    {/* 📖 INTRO */}
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>

          <h2 className="section-title mb-6 font-english">Welcome to Sharda Bal Niketan</h2>

          <p className="font-hindi text-muted-foreground leading-relaxed mb-4 text-[17px]">
            शारदा बाल निकेतन सीनियर सेकेंडरी स्कूल, सीकवाड़ा की स्थापना 1997 में बड़े हर्षोल्लास के साथ की गई, जिसमें स्थानीय ग्रामीणों का महत्वपूर्ण योगदान रहा। विद्यालय ने प्राथमिक से माध्यमिक और फिर उच्च माध्यमिक स्तर तक निरंतर प्रगति करते हुए आज आसपास के ग्रामीण क्षेत्रों में एक प्रमुख शिक्षण संस्थान के रूप में अपनी पहचान बनाई है। यह विद्यालय न केवल उत्कृष्ट परीक्षा परिणामों के लिए जाना जाता है, बल्कि यहां से पढ़े विद्यार्थी जीवन के विभिन्न क्षेत्रों जैसे इंजीनियरिंग, चिकित्सा, व्यवसाय एवं सरकारी सेवाओं में सफलतापूर्वक कार्यरत हैं।
            विद्यालय विद्यार्थियों के सर्वांगीण विकास पर विशेष ध्यान देता है, जिसमें शिक्षा के साथ-साथ नैतिक मूल्य, संस्कार, अनुशासन एवं आधुनिक तकनीकी ज्ञान शामिल हैं। खेलकूद में भी विद्यालय ने जिला एवं राज्य स्तर पर कई उपलब्धियां हासिल की हैं। वर्तमान में यह विद्यालय RBSE से संबद्ध हिंदी माध्यम में शिक्षा प्रदान करता है तथा कला संकाय उपलब्ध है, जबकि भविष्य में विज्ञान एवं वाणिज्य संकाय शुरू करने की योजना है। विद्यालय में लगभग 75% छात्राएं अध्ययन कर रही हैं, जो बेटियों की शिक्षा के प्रति बढ़ते विश्वास का प्रतीक है।
          </p>

          <p className="font-hindi text-muted-foreground leading-relaxed text-[17px]">
            हम प्राथमिक से लेकर उच्च माध्यमिक स्तर तक शिक्षा प्रदान करते हैं, जो राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) से संबद्ध है।
          </p>

        </AnimatedSection>
      </div>
    </section>

    {/* 🔢 STATS */}
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <Counter target={500} label="Students" />
        <Counter target={100} label="Results %" />
        <Counter target={75} label="Girls %" />
        <Counter target={28} label="Years" />
      </div>
    </section>

    {/* 🕰️ TIMELINE */}
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 font-english">Our Journey</h2>

        <div className="border-l-4 border-primary pl-6 space-y-10">
          {[
            { year: "1997", text: "School Established in Seekwara" },
            { year: "2005", text: "Upgraded to Secondary Level" },
            { year: "2016", text: "Senior Secondary Started" },
            { year: "2020", text: "Digital Learning Introduced" },
            { year: "2025", text: "Future Expansion (Science & Commerce)" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-primary">{item.year}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 🎯 VISION */}
    <section className="section-padding grid md:grid-cols-2 gap-8 container mx-auto">
      <div className="backdrop-blur-lg bg-white/30 p-8 rounded-xl shadow-xl">
        <Eye className="mb-3 text-blue-600" />
        <h3 className="text-2xl font-bold font-english">Vision</h3>
        <p className="font-hindi text-muted-foreground">
          विद्यार्थियों को ज्ञान, संस्कार और कौशल से सशक्त बनाना।
        </p>
      </div>

      <div className="backdrop-blur-lg bg-white/30 p-8 rounded-xl shadow-xl">
        <Target className="mb-3 text-yellow-600" />
        <h3 className="text-2xl font-bold font-english">Mission</h3>
        <p className="font-hindi text-muted-foreground">
          आधुनिक शिक्षा और नैतिक मूल्यों के साथ सर्वांगीण विकास करना।
        </p>
      </div>
    </section>

    {/* 👨‍🏫 PRINCIPAL */}
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center">

        <img src={principalImg} className="w-80 h-75 object-cover rounded-xl" />

        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold font-english mb-4">Principal's Message</h2>

          <p className="font-hindi text-muted-foreground leading-relaxed mb-4">
            "शिक्षा केवल पाठ्यक्रम तक सीमित नहीं है, बल्कि यह एक ऐसा माध्यम है जो व्यक्ति के जीवन को सही दिशा देता है। शारदा बाल निकेतन सीनियर सेकेंडरी स्कूल में हमारा प्रयास है कि प्रत्येक विद्यार्थी को गुणवत्तापूर्ण शिक्षा के साथ-साथ नैतिक मूल्य, अनुशासन और आत्मविश्वास प्रदान किया जाए। हम चाहते हैं कि हमारे विद्यार्थी केवल पढ़ाई में ही नहीं, बल्कि जीवन के हर क्षेत्र में सफल हों और एक जिम्मेदार नागरिक बनकर समाज में सकारात्मक योगदान दें।"
          </p>

          <p className="font-hindi text-muted-foreground leading-relaxed mb-4">
            "विद्यालय में हम आधुनिक शिक्षा पद्धति, तकनीकी ज्ञान और सह-पाठ्यचर्या गतिविधियों के माध्यम से विद्यार्थियों के सर्वांगीण विकास पर विशेष ध्यान देते हैं। हमारा उद्देश्य है कि प्रत्येक छात्र अपनी क्षमताओं को पहचाने और अपने सपनों को साकार करने के लिए निरंतर प्रयास करता रहे।"
          </p>

          <p className="font-bold font-english">
            — प्रधानाचार्य, SBN School Seekwara
          </p>
        </div>

      </div>
    </section>

    {/* 👥 MANAGEMENT */}
    <section className="section-padding">
      <div className="container mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12 font-english">Management</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
           
            {
              name: "श्री करताराम चौधरी",
              role: "Director",
              img: principalImg,
              msg: "हमारा लक्ष्य प्रत्येक विद्यार्थी को गुणवत्तापूर्ण शिक्षा देना है। हम आधुनिक शिक्षा के साथ नैतिक शिक्षा पर भी ध्यान देते हैं। विद्यार्थियों को आत्मविश्वास और अनुशासन के साथ आगे बढ़ने के लिए प्रेरित किया जाता है। हम उनकी क्षमता को विकसित करने का प्रयास करते हैं। एक अच्छा विद्यार्थी ही भविष्य का अच्छा नागरिक बनता है।"
            },
            {
              name: "श्री माधाराम धाणक",
              role: "Administrator",
              img: chairmanImg,
              msg: "विद्यालय का उद्देश्य केवल शिक्षा देना नहीं बल्कि विद्यार्थियों के सर्वांगीण विकास को सुनिश्चित करना है। हम चाहते हैं कि हमारे छात्र पढ़ाई के साथ-साथ संस्कार और अनुशासन में भी उत्कृष्ट हों। हम उन्हें जिम्मेदार नागरिक बनाने का प्रयास करते हैं। सही मार्गदर्शन और मेहनत से हर विद्यार्थी सफल हो सकता है। हम विद्यार्थियों के उज्ज्वल भविष्य के लिए सदैव समर्पित हैं।"
            },
            {
              name: "सुश्री प्रेरणा चौधरी",
              role: "Vice Principal",
              img: vprincipalImg,
              msg: "अनुशासन और परिश्रम सफलता की कुंजी है। हम विद्यार्थियों को सकारात्मक वातावरण प्रदान करते हैं। यहां वे आत्मविश्वास के साथ सीखते हैं और आगे बढ़ते हैं। हम नैतिक मूल्यों और संस्कारों पर विशेष ध्यान देते हैं। हमारा लक्ष्य हर छात्र को सफल बनाना है।"
            }
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg">

              <div className="h-65">
                <img src={m.img} className="w-full h-full object-cover" />
              </div>

              <div className="p-5 text-left">
                <h4 className="font-bold text-lg">{m.name}</h4>
                <p className="text-sm text-gold mb-2">{m.role}</p>

                <p className="font-hindi text-muted-foreground text-[15px] leading-relaxed">
                  {m.msg}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    {/* 🎥 VIDEO */}
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">School Video</h2>

      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
    <iframe
      src="https://www.youtube.com/embed/eYWa09yEL8w?autoplay=0&rel=0"
      title="School Video"
      className="absolute top-0 left-0 w-full h-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
    </section>

  </Layout>
);

export default About;