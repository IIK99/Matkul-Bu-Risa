"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaUserCog, FaBars, FaTimes } from "react-icons/fa";

interface AdminLink {
  title: string;
  href: string;
}

interface AdminNavbarProps {
  brand?: string;
  links?: AdminLink[];
  actionButtonTitle?: string;
}

const adminLinks: AdminLink[] = [];

export default function AdminNavbar({
  brand = "Ticketing.com - Admin Dashboard",
  links = adminLinks,
  actionButtonTitle = "Logout",
}: AdminNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between w-full sm:w-auto items-center">
            <span className="text-white text-lg font-bold">{brand}</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-xl sm:hidden"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  {link.title}
                </span>
              </Link>
            ))}
            <FaUserCog className="text-white hover:text-green-500 text-lg" />
            <Link
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm px-4 py-2 rounded-md cursor-pointer"
              href={"/home"}
            >
              {actionButtonTitle}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-2 space-y-2 pb-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <span
                  className="block text-white hover:text-green-400 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </span>
              </Link>
            ))}
            <div className="flex items-center px-4 space-x-2">
              <FaUserCog className="text-white text-sm" />
              <Link
                href="/home"
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
