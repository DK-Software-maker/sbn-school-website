import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import classroomImg from "@/assets/classroom.jpg";

const AboutPreview = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <img
            src={classroomImg}
            alt="Students in classroom"
            className="rounded-xl shadow-lg w-full object-cover h-80"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">About Our School</p>
          <h2 className="section-title">Building a Foundation for Excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            शारदा बाल निकेतन उच्च माध्यमिक विद्यालय सीकवाड़ा, जालौर जिले के ग्रामीण क्षेत्र में स्थित एक प्रतिष्ठित शैक्षणिक संस्थान है। विद्यालय का लक्ष्य विद्यार्थियों को आधुनिक शिक्षा के साथ 
            भारतीय संस्कार एवं संस्कृतियों से जोड़ना है। अनुभवी आचार्यगण, अनुशासित वातावरण, नियमित टेस्ट, व्यक्तिगत मार्गदर्शन और प्रतियोगी परीक्षाओं की तैयारी के माध्यम से विद्यालय विद्यार्थियों 
            को उज्ज्वल भविष्य के लिए तैयार करता है।
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            हम प्राथमिक से लेकर उच्च माध्यमिक स्तर तक शिक्षा प्रदान करते हैं, जो राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) से संबद्ध है। हमारा व्यापक पाठ्यक्रम, सह-पाठ्यचर्या गतिविधियों के साथ मिलकर, 
            प्रत्येक विद्यार्थी का सर्वांगीण विकास सुनिश्चित करता है।
          </p>
          <Button asChild className="gradient-primary border-0 hover:opacity-90">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
    
  </section>
);

export default AboutPreview;
