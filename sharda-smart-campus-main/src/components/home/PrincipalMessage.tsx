import AnimatedSection from "@/components/ui/AnimatedSection";
import principalImg from "@/assets/principal.jpg";

const PrincipalMessage = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection delay={0.1} className="order-2 md:order-1">
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">From the Principal's Desk</p>
          <h2 className="section-title">A Message of Inspiration</h2>
          <blockquote className="border-l-4 border-gold pl-4 italic text-muted-foreground leading-relaxed mb-4">
            "शिक्षा केवल पाठ्यक्रम तक सीमित नहीं है; यह चरित्र निर्माण, संस्कारों की स्थापना और हमारे बच्चों को आत्मविश्वास और ईमानदारी के साथ आधुनिक दुनिया की चुनौतियों का सामना करने के लिए तैयार करना है। शारदा बाल निकेतन में, हम ऐसा वातावरण बनाने का प्रयास करते हैं 
            जहाँ हर बच्चे को सपने देखने, खोजने और उपलब्धि हासिल करने के लिए प्रोत्साहित किया जाए।"
          </blockquote>
          <p className="font-heading font-bold text-foreground">— Principal</p>
          <p className="text-sm text-muted-foreground">Sharda Bal Niketan Sr. Sec. School</p>
        </AnimatedSection>
        <AnimatedSection className="order-1 md:order-2">
          <div className="relative">
            <img
              src={principalImg}
              alt="School Principal"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto object-cover h-97 object-center"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl gradient-gold opacity-20" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrincipalMessage;
