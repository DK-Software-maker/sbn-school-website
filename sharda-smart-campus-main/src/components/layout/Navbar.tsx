import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import banner from "@/assets/banner.jpg";

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
  const [showPopup, setShowPopup] = useState(false);
  const [roll, setRoll] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Popup control
  useEffect(() => {
    const resultLive = true; // 👉 ON/OFF

    if (resultLive) {
      setTimeout(() => setShowPopup(true), 1500);
    }
  }, []);

  // 🔍 Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!roll) return alert("Enter Roll Number");
    navigate(`/result/${roll}`);
  };

  return (
    <>
      {/* 🔝 Top bar */}
      <div className="gradient-primary text-primary-foreground text-sm py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91-9414992634, +91-8619555830
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> shardasikwara@gmail.com
            </span>
          </div>
          <span>मुड़तरासिली रोड़ गोलूआ, सीकवाड़ा (जालौर)</span>
        </div>
      </div>

      {/* 🧭 Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-[999]">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">

          {/* Banner */}
          <Link to="/" className="flex items-center">
            <img
              src={banner}
              alt="School Banner"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 📱 Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="flex flex-col px-4 py-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-3 text-sm border-b last:border-0 ${
                      location.pathname === l.path
                        ? "text-blue-600 font-bold"
                        : "text-gray-700"
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

      {/* 🔴 Admission Ribbon */}
      <div className="sticky top-[70px] z-40 bg-red-600 text-white overflow-hidden">
        <div className="marquee-track">
          <Link to="/admissions" className="marquee-text font-semibold text-sm">
            🎓 Admissions Open for Session 2026-27 | नवीन सत्र 2026-27 के लिए प्रवेश प्रारंभ ! | Click Here to Fill Admission Enquiry Form
          </Link>
        </div>
      </div>

      {/* 📌 Floating Button */}
      <Link
        to="/results"
        className="fixed bottom-5 right-5 z-[40] bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2"
      >
        <ClipboardList className="w-5 h-5" />
        Result
      </Link>
    </>
  );
};

export default Navbar;