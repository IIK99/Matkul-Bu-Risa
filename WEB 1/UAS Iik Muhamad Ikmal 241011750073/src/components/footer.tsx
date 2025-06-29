"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white p-10"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-xl mb-5">Ticketing.com</h2>
          <div className="flex mt-4">
            <a href="#" className="mr-4 text-gray-300 hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="mr-4 text-gray-300 hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="mr-4 text-gray-300 hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3">Product</h2>
          <ul className="space-y-2">
            {["Overview", "Pricing", "Customer stories", "Integrations", "Security"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3">Resources</h2>
          <ul className="space-y-2">
            {["Blog", "Guides & tutorials", "Help center", "Whats new"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-3">Company</h2>
          <ul className="space-y-2">
            {["About us", "Media kit", "Contact support"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-8 mt-8">
        <p>&copy; {currentYear} Yuk Baca Buku Yuk. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
