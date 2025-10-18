import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-2xl font-semibold text-gray-900">AppStore</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Discover and install your favorite apps with ease. We bring
              together the best digital tools in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="hover:text-blue-600">
                  All Apps
                </Link>
              </li>
              <li>
                <Link to="/installation" className="hover:text-blue-600">
                  My Installations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-blue-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-full border border-gray-300 hover:border-sky-500 hover:text-sky-500 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 rounded-full border border-gray-300 hover:border-pink-500 hover:text-pink-500 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                className="p-2 rounded-full border border-gray-300 hover:border-gray-800 hover:text-gray-800 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:support@appstore.com"
                className="p-2 rounded-full border border-gray-300 hover:border-green-500 hover:text-green-500 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section  */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
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
