"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Link {
  title: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: Link[];
  actionButtonTitle?: string;
}

export default function NavbarHome({
  brand = "Yuk Baca Buku Yuk 📖",
  links = [
    { title: "Home", href: "/home" },
    { title: "Profile", href: "/profile" },
    { title: "Transactions", href: "/transactionhistory" },
  ],
  actionButtonTitle = "Login",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 3 }}
      className={`fixed top-0 z-30 w-full transition-colors duration-500 ${
        isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className="text-white text-lg font-bold">{brand}</span>

            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white text-xl focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="border border-transparent text-white hover:border-green-500 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                {link.title}
              </a>
            ))}
            <FaUser className="text-white hover:text-green-400 mx-3 text-sm" />
            <Link
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm px-4 py-2 rounded-md transition-all"
              href={"/auth/login"}
            >
              {actionButtonTitle}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden mt-2 bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col px-4 pb-4 space-y-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white hover:text-green-400 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="flex items-center space-x-2">
                  <FaUser className="text-white text-sm" />
                  <Link
                    href="/auth/login"
                    className="text-green-500 border border-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {actionButtonTitle}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
