import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* 🔻 FOOTER */}
      <footer className="bg-gradient-to-r from-red-900 to-red-700 text-gray-200 pt-12 pb-6 mt-16">

        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10">

          {/* 🏫 School Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              SBN School Seekwara
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Providing quality education with discipline, values and modern learning 
              for a brighter future.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Admission", link: "/admission" },
                { name: "Results", link: "/results" },
                { name: "Contact", link: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">

              <li className="flex items-center gap-2 hover:text-white transition">
                <MapPin size={16} />
                Mudtrasili Road Golua,Seekwara, Jalore, Rajasthan
              </li>

              <li className="flex items-center gap-2 hover:text-white transition">
                <Phone size={16} />
                <a href="tel:+9194149926">
                  +91-9414992634
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} />
                <a href="shardasikwara@gmail.com">
                  shardasikwara
                </a>
              </li>

            </ul>
          </div>

          {/* 🌐 Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              {/* 👉 links fill karna */}
              <a href="#" target="_blank"
                className="bg-red-800 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition-all">
                <Facebook size={18} />
              </a>

              <a href="#" target="_blank"
                className="bg-red-800 p-3 rounded-full hover:bg-pink-600 hover:scale-110 transition-all">
                <Instagram size={18} />
              </a>

              <a href="#" target="_blank"
                className="bg-red-800 p-3 rounded-full hover:bg-red-500 hover:scale-110 transition-all">
                <Youtube size={18} />
              </a>

            </div>

            <p className="text-xs mt-4 text-gray-400">
              Stay connected with us
            </p>
          </div>

        </div>

        {/* 🔻 Bottom Line */}
        <div className="border-t border-red-600 mt-10 pt-5 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} SBN School Seekwara. All Rights Reserved.
        </div>

        {/* 👨‍💻 Developer Credit */}
        <div className="text-center text-xs text-gray-400 mt-2">
          Designed & Developed by{" "}
          <span className="text-white font-semibold">
            Dinesh Patel
          </span>
        </div>

      </footer>

      {/* 💬 WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/91-6376004863" // 👉 apna number yaha daalo
        target="_blank"
        className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce"
      >
        💬 Chat
      </a>
    </>
  );
};

export default Footer;