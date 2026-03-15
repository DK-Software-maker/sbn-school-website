import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Results", path: "/results" },
  { label: "Notices", path: "/notices" },
  { label: "Gallery", path: "/gallery" },
  { label: "Faculty", path: "/faculty" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="gradient-primary text-primary-foreground text-sm py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91-9414992634, +91-8619555830</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> shardasikwara@gmail.com</span>
          </div>
          <span>मुड़तरासिली रोड़ गोलूआ, सीकवाड़ा (जालौर)</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="School Logo" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="font-heading text-lg font-bold text-foreground leading-tight">शारदा बाल निकेतन</h1>
              <p className="text-xs text-muted-foreground">उच्च माध्यमिक विद्यालय सीकवाड़ा, जालौर</p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-t"
            >
              <div className="flex flex-col px-4 py-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-3 rounded-md text-sm font-medium border-b border-border last:border-0 ${
                      location.pathname === l.path
                        ? "text-primary font-bold"
                        : "text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
