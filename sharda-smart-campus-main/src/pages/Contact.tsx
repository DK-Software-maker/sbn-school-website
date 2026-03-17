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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>

      {/* HERO */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 gradient-primary opacity-80" />
        <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>
      </div>

      {/* CONTACT SECTION */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">

                {/* Address */}
                <div className="flex gap-4 bg-background p-4 rounded-xl shadow border">
                  <MapPin className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <a
                      href="https://www.google.com/maps?q=Sharda+Bal+Niketan+Sr.+Sec.+School+Seekwara+Jalore"
                      target="_blank"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Seekwara, Jalore District, Rajasthan
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 bg-background p-4 rounded-xl shadow border">
                  <Phone className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+919414992634" className="block hover:underline text-sm">
                      +91-9414992634
                    </a>
                    <a href="tel:+918619555830" className="block hover:underline text-sm">
                      +91-8619555830
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 bg-background p-4 rounded-xl shadow border">
                  <Mail className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a
                      href="mailto:shardasikwara@gmail.com"
                      className="text-sm hover:underline"
                    >
                      shardasikwara@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex gap-4 bg-background p-4 rounded-xl shadow border">
                  <Clock className="text-primary" />
                  <div>
                    <h4 className="font-semibold">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919414992634?text=Hello%20I%20want%20admission%20details"
                  target="_blank"
                  className="block text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                  💬 Chat on WhatsApp
                </a>

              </div>
            </AnimatedSection>

            {/* RIGHT */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">

                {/* MAP */}
                <div className="rounded-xl overflow-hidden shadow-lg h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.91991924542043!2d72.52897638372957!3d25.043618450001034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394319e122770c5b%3A0x7b77d19145a7fb4f!2sSharda%20Bal%20Niketan%20Sr.%20Sec.%20School%20seekwara%20Jalore!5e0!3m2!1sen!2sin!4v1773766554053!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="School Location"
                  />
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-background p-6 rounded-xl shadow border space-y-4"
                >
                  <h3 className="text-xl font-bold">Send Message</h3>

                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Email" required />
                  <Input placeholder="Phone" />
                  <Input placeholder="Subject" required />
                  <Textarea placeholder="Message" rows={4} required />

                  <Button className="w-full">Send Message</Button>
                </form>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919414992634"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        💬
      </a>

    </Layout>
  );
};

export default Contact;