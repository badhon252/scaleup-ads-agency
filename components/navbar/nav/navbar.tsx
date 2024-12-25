"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { NavDropdown } from "./nav-dropdown";
import { navItems } from "./nav-data";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "../logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md max-w-[1920px] border-b-[1px] mx-auto">
      <nav className=" mx-auto  px-[50px] h-15 flex items-center justify-between">
        {/* Logo */}
          <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.div
                className="text-sm font-medium text-gray-800 hover:text-gray-600 py-2"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={item.href}>{item.title}</Link>
              </motion.div>
              <AnimatePresence>
                {activeDropdown === item.title && item.dropdownItems && (
                  <NavDropdown items={item.dropdownItems} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu navItems={navItems} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
