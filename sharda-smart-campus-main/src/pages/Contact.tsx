import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 gradient-primary opacity-80" />
        <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Contact Us</h1>
      </div>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">Reach Out to Us</p>
              <h2 className="section-title mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Address", text: "Seekwara, Jalore District, Rajasthan, India" },
                  { icon: Phone, label: "Phone", text: "+91- 9414992634, +91-8619555830" },
                  { icon: Mail, label: "Email", text: "info@shardabalniketan.edu.in" },
                  { icon: Clock, label: "Office Hours", text: "Mon - Sat: 8:00 AM - 4:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground">{item.label}</h4>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600!2d72.0!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA3MsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="School Location"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-background rounded-xl p-8 shadow-lg border border-border space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Send us a Message</h3>
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} />
                <Button type="submit" className="w-full gradient-primary border-0 hover:opacity-90">Send Message</Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
