import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BookOpen, Target, Eye, Users } from "lucide-react";
import principalImg from "@/assets/principal.jpg";
import heroImg from "@/assets/hero-school.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import vprincipalImg from "@/assets/vprincipal.jpg";

const About = () => (
  <Layout>
    {/* Banner */}
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="absolute inset-0 gradient-primary opacity-80" />
      <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
    </div>

    {/* Introduction */}
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Our Story</p>
          <h2 className="section-title mb-6">Welcome to Sharda Bal Niketan</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            शारदा बाल निकेतन वरिष्ठ माध्यमिक विद्यालय, सीकवाड़ा, जालोर जिले के ग्रामीण क्षेत्र में स्थित एक प्रतिष्ठित शैक्षणिक संस्थान है। विद्यालय का लक्ष्य विद्यार्थियों को आधुनिक शिक्षा के साथ 
            भारतीय संस्कार एवं संस्कृतियों से जोड़ना है। अनुभवी आचार्यगण, अनुशासित वातावरण, नियमित टेस्ट, व्यक्तिगत मार्गदर्शन और प्रतियोगी परीक्षाओं की तैयारी के माध्यम से विद्यालय विद्यार्थियों 
            को उज्ज्वल भविष्य के लिए तैयार करता है।
          </p>
          <p className="text-muted-foreground leading-relaxed">
            हम प्राथमिक से लेकर उच्च माध्यमिक स्तर तक शिक्षा प्रदान करते हैं, जो राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) से संबद्ध है। हमारा व्यापक पाठ्यक्रम, सह-पाठ्यचर्या गतिविधियों के साथ मिलकर, 
            प्रत्येक विद्यार्थी का सर्वांगीण विकास सुनिश्चित करता है।
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-card-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
               एक अग्रणी शैक्षणिक संस्थान बनना जो विद्यार्थियों को ज्ञान, संस्कार और कौशल से सशक्त बनाए ताकि वे जिम्मेदार वैश्विक नागरिक बनें और समाज में सकारात्मक योगदान दें।
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-gold-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-card-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                नवीन शिक्षण पद्धतियों, आधुनिक सुविधाओं और एक पोषक वातावरण के माध्यम से समग्र शिक्षा प्रदान करना जो बौद्धिक जिज्ञासा, सृजनात्मकता और नैतिक विकास को बढ़ावा दे।
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Principal's Message */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <AnimatedSection>
            <img src={principalImg} alt="Principal" className="rounded-xl shadow-lg w-80 h-75 object-cover object-center " />
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="md:col-span-2">
            <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Principal's Message</p>
            <h2 className="section-title mb-4">Guiding the Next Generation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
            "शिक्षा केवल पाठ्यक्रम तक सीमित नहीं है; यह चरित्र निर्माण, संस्कारों की स्थापना और हमारे बच्चों को आत्मविश्वास और ईमानदारी के साथ आधुनिक दुनिया की चुनौतियों का सामना करने के लिए तैयार करना है। शारदा बाल निकेतन में, हम ऐसा वातावरण बनाने का प्रयास करते हैं 
            जहाँ हर बच्चे को सपने देखने, खोजने और उपलब्धि हासिल करने के लिए प्रोत्साहित किया जाए।"
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              हम अपने विद्यार्थियों को न केवल शिक्षा में बल्कि खेल, कला और सामुदायिक सेवा में भी भाग लेने के लिए प्रोत्साहित करते हैं। 
              आइए, मिलकर एक उज्ज्वल, समावेशी और संभावनाओं से भरे भविष्य का निर्माण करें।
            </p>
            <p className="font-heading font-bold text-foreground">— प्रधानाचार्य, शारदा बाल निकेतन सीनियर सेकेंडरी स्कूल</p>
          </AnimatedSection>
        </div>
      </div>
    </section>

   {/* Management */}
<section className="section-padding bg-gradient-to-b from-background to-card">
  <div className="container mx-auto text-center">
    <AnimatedSection>

      {/* Heading */}
      <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
        Our Leadership
      </p>
      <h2 className="section-title mb-12">School Management</h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {[
          {
            role: "Chairman",
            name: "श्री माधाराम धाणक",
            img: chairmanImg,
            msg: "विद्यालय का उद्देश्य केवल शिक्षा देना नहीं, बल्कि विद्यार्थियों के सर्वांगीण विकास पर ध्यान देना है। हम चाहते हैं कि हमारे छात्र न केवल पढ़ाई में उत्कृष्ट हों, बल्कि संस्कार, अनुशासन और नैतिक मूल्यों में भी अग्रणी बनें। शिक्षा के माध्यम से हम उन्हें एक सफल और जिम्मेदार नागरिक बनाने का प्रयास करते हैं।",
          },
          {
            role: "Principal",
            name: "श्री करताराम चौधरी",
            img: principalImg,
            msg: "हमारा लक्ष्य है कि प्रत्येक विद्यार्थी को गुणवत्तापूर्ण शिक्षा प्रदान की जाए, जिससे वह अपने जीवन में सफलता प्राप्त कर सके। विद्यालय में हम आधुनिक शिक्षा के साथ-साथ नैतिक शिक्षा पर भी विशेष ध्यान देते हैं। हमारा विश्वास है कि एक अच्छा विद्यार्थी ही भविष्य का अच्छा नागरिक बनता है।",
          },
          {
            role: "Vice Principal",
            name: "सुश्री प्रेरणा चौधरी",
            img: vprincipalImg,
            msg: "अनुशासन, परिश्रम और सकारात्मक सोच ही सफलता की कुंजी है। हम अपने विद्यार्थियों को एक ऐसा वातावरण प्रदान करते हैं, जहाँ वे आत्मविश्वास के साथ सीख सकें और अपने सपनों को साकार कर सकें। हमारा प्रयास है कि हर छात्र अपने लक्ष्य को प्राप्त करे और जीवन में आगे बढ़े।",
          },
        ].map((m, i) => (
          <div
            key={i}
            className="bg-background rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl transition duration-300"
          >

            {/* Square Full Image */}
            <div className="w-full h-65 overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h4 className="font-heading font-bold text-lg text-foreground">
                {m.name}
              </h4>

              <p className="text-sm text-gold font-semibold mb-3">
                {m.role}
              </p>

              {/* Big Hindi Paragraph */}
              <p className="text-[15px] leading-relaxed text-muted-foreground font-serif">
                {m.msg}
              </p>
            </div>

          </div>
        ))}

      </div>

    </AnimatedSection>
  </div>
</section>
  </Layout>
);

export default About;
