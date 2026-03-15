import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";
import { useState } from "react";
import { toast } from "sonner";

const steps = [
  "विद्यालय कार्यालय से एडमिशन फॉर्म प्राप्त करें या नीचे डाउनलोड करें।",
  "सभी आवश्यक विवरण सही जानकारी के साथ भरें।",
  "आवश्यक दस्तावेज़ों के साथ फॉर्म विद्यालय कार्यालय में जमा करें।",
  "निर्धारित तिथि पर साक्षात्कार/परीक्षा सत्र में भाग लें।",
  "प्रवेश औपचारिकताएँ और शुल्क भुगतान पूरा करें।",
];

const Admissions = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("https://script.google.com/macros/s/AKfycbwSCMSp1XIYDcTeW-wOv_CKouKRBTwIK88FozzvZf1LRc-y3NH34j6wtYrH0go7gAUY/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
    mode: "no-cors"
  });

  toast.success("Inquiry submitted successfully! We will contact you soon.");

  setFormData({ name: "", email: "", phone: "", message: "" });
};

  return (
    <Layout>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 gradient-primary opacity-80" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Admissions</h1>
          <p className="text-primary-foreground/80 mt-2">Session 2025-26 Now Open</p>
        </div>
      </div>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">How to Apply</p>
            <h2 className="section-title mb-6">Admission Process</h2>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-background p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-foreground">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
             className="gradient-gold text-navy border-0 hover:opacity-90"
             onClick={() => window.open('/admission-form.pdf')}
              >
            <Download className="w-4 h-4 mr-2" />
            Download Admission Form
          </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Have Questions?</p>
              <h2 className="section-title">Admission Inquiry</h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your Query"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full gradient-primary border-0 hover:opacity-90">Submit Inquiry</Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
