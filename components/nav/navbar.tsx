"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { FullScreenMenu } from "./full-screen-menu";
import { Logo } from "./logo";
import { NavDropdown } from "./nav-dropdown";
import { navigationData } from "./navigation-data";
import { FlipText } from "@/lib/RevealTexts";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <nav className="max-w-[1920px] mx-auto px-4 h-20 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            {navigationData.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-md font-medium text-gray-800 hover:text-gray-600"
                >
                  <FlipText>
                  {item.title}
                  </FlipText>
                </a>
                {activeDropdown === item.title && item.children && (
                  <NavDropdown items={item.children} />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <FullScreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
