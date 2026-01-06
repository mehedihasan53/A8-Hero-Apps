import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#001931] text-white border-t border-gray-700 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="sr-only">Footer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="HERO.IO logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-semibold text-white">HERO.IO</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover and install your favorite apps with ease. We bring
              together the best digital tools in one place.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-blue-400 transition"
                  aria-label="All Apps"
                >
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-blue-400 transition"
                  aria-label="My Installations"
                >
                  My Installations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Footer support links">
            <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-blue-400 transition"
                  aria-label="FAQs"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition"
                  aria-label="Terms & Conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (opens in a new tab)"
                className="p-2 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter (opens in a new tab)"
                className="p-2 rounded-full border border-gray-600 hover:border-sky-400 hover:text-sky-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                className="p-2 rounded-full border border-gray-600 hover:border-pink-400 hover:text-pink-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github (opens in a new tab)"
                className="p-2 rounded-full border border-gray-600 hover:border-gray-300 hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:support@hero.io"
                aria-label="Send email to support"
                className="p-2 rounded-full border border-gray-600 hover:border-green-400 hover:text-green-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section  */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p>
            © {currentYear} HERO.IO. All rights reserved. | Built with ❤️ by
            Mehedi Hasan
          </p>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 rounded"
              aria-label="Back to top"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
