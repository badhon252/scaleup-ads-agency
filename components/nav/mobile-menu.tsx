"use client";

import { motion, AnimatePresence } from "framer-motion";
import {X } from "lucide-react";
import { useState } from "react";
import { NavigationContent } from "./navigation-content";
import { SocialLinks } from "./social-links";
import { ContactInfo } from "./contact-info";
import { navigationData } from "./navigation-data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40 overflow-y-auto"
        >
          <div className="container mx-auto min-h-screen flex flex-col">
            <div className="flex-grow pt-20 pb-8 px-4">
              <div className="flex flex-col md:flex-row">
                {/* Main Navigation Column */}
                <div className="w-full md:w-3/4 mb-8 md:mb-0">
                  <NavigationContent
                    navigationData={navigationData}
                    activeSection={activeSection}
                    onSectionClick={setActiveSection}
                  />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-1/4 md:pl-8">
                  <div className="space-y-12">
                    <SocialLinks />
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="sticky bottom-0 bg-black py-4 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search keyword"
                  className="w-full bg-gray-900 text-white rounded-full px-4 py-2 pr-10"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400"
                  >
                    →
                  </motion.span>
                </button>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white p-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
