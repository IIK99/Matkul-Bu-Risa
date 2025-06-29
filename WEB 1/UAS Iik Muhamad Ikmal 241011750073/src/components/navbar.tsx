"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
  title: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: NavLink[];
  actionButtonTitle?: string;
}

export default function Navbar({
  brand = "Yuk Baca Buku Yuk 📖",
  links = [
    { title: "Home", href: "/home" },
    { title: "Profile", href: "/profile" },
    { title: "Transactions", href: "/transactionhistory" },
  ],
  actionButtonTitle = "Login",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 z-30 w-full shadow bg-gray-900 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between w-full sm:w-auto items-center">
            <span className="text-white text-lg font-bold">{brand}</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-xl sm:hidden"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="border border-transparent text-white hover:border-green-500 hover:bg-transparent hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.title}
              </a>
            ))}
            <FaUser className="text-white hover:text-green-500 mx-3 text-sm" />
            <Link
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm px-4 py-2 rounded-md"
              href={"/auth/login"}
            >
              {actionButtonTitle}
            </Link>
          </div>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 pb-4 space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-green-400 px-4 py-2"
              >
                {link.title}
              </a>
            ))}
            <div className="flex items-center px-4 space-x-2">
              <FaUser className="text-white text-sm" />
              <Link
                href="/auth/login"
                className="text-green-500 border border-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition-all"
              >
                {actionButtonTitle}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
