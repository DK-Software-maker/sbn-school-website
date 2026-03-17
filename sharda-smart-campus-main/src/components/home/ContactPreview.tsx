import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ContactPreview = () => (
  <section className="section-padding bg-accent">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Left Side - Contact Info */}
        <AnimatedSection>
          <p className="text-gold font-medium uppercase tracking-wider text-sm mb-2">
            Get in Touch
          </p>
          <h2 className="section-title mb-6">Contact Us</h2>

          <div className="space-y-4">
            {[
              { icon: MapPin, text: "Seekwara, Jalore District, Rajasthan, India" },
              { icon: Phone, text: "+91-9414992634, +91-8619555830" },
              { icon: Mail, text: "shardasikwara@gmail.com" },
              { icon: Clock, text: "Mon - Sat: 8:00 AM - 2:00 PM" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right Side - Google Map */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-xl overflow-hidden shadow-lg h-72 lg:h-full min-h-[288px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.91991924542043!2d72.52897638372957!3d25.043618450001034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394319e122770c5b%3A0x7b77d19145a7fb4f!2sSharda%20Bal%20Niketan%20Sr.%20Sec.%20School%20seekwara%20Jalore!5e0!3m2!1sen!2sin!4v1773766554053!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharda Bal Niketan School Location"
            />
          </div>
        </AnimatedSection>

      </div>
    </div>
  </section>
);

export default ContactPreview;