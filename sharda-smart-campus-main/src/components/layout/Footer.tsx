import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain bg-card rounded-full p-1" />
              <div>
                <h3 className="font-heading font-bold text-lg">Sharda Bal Niketan</h3>
                <p className="text-sm opacity-80">Sr. Sec. School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Providing quality education and nurturing young minds since establishment. 
              Building a brighter future for the students of Seekwara and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Admissions", path: "/admissions" },
                { label: "Academics", path: "/academics" },
                { label: "Results", path: "/results" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="opacity-80 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="opacity-80"> Mudtrasili Road Golua, Seekwara, Jalore</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="opacity-80">+91-9414992634, +91-8619555830</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="opacity-80">shardasikwara@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm">School Hours</h5>
              <p className="text-sm opacity-80">Mon - Sat: 8:00 AM - 2:00 PM</p>
              <p className="text-sm opacity-80">Office: 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 py-4 px-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Sharda Bal Niketan Sr. Sec. School, Seekwara (Jalore). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
