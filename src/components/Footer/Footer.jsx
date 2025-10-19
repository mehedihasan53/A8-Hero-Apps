import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white border-t border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-2xl font-semibold text-white">AppStore</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover and install your favorite apps with ease. We bring
              together the best digital tools in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="hover:text-blue-400 transition">
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-blue-400 transition"
                >
                  My Installations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="p-2 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-full border border-gray-600 hover:border-sky-400 hover:text-sky-400 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 rounded-full border border-gray-600 hover:border-pink-400 hover:text-pink-400 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                className="p-2 rounded-full border border-gray-600 hover:border-gray-300 hover:text-gray-300 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:support@appstore.com"
                className="p-2 rounded-full border border-gray-600 hover:border-green-400 hover:text-green-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section  */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-300">
          <p>
            © 2025 AppStore. All rights reserved. | Built with ❤️ by Mehedi
            Hasan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
