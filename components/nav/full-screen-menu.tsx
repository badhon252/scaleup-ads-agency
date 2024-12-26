"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { NavigationContent } from "./navigation-content";
import { navigationData } from "./navigation-data";
import Image from "next/image";
import logo from "@/public/assets/site-logo-white-2.webp";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999999] bg-[#121212] overflow-y-auto"
        >
          <div className=" h-screen flex flex-col md:flex-row">
            {" "}
            {/*Flexbox for responsiveness*/}
            {/* Left Column (Logo, Follow Us, Footer Links) */}
            <div className="bg-[#121212] shadow-lg md:flex flex-col justify-between md:w-1/3 lg:w-1/4 hidden">
              {" "}
              {/*Responsive width*/}
              <div className="logo h-[142px] box-border border-b-[1px] border-gray-800 flex justify-center items-center">
                <Image src={logo} alt="logo" width={150} height={150} />
              </div>
              <div className=" p-8 font-semibold">
                <p className="text-white text-2xl font-bold mb-4">Follow Us</p>
                <ul className=" text-white ">
                  <li className="py-1">Dribbble</li>
                  <li className="py-1">Behance</li>
                  <li className="py-1">Instagram</li>
                  <li className="py-1">Facebook</li>
                  <li className="py-1">Twitter</li>
                  <li className="py-1">YouTube</li>
                </ul>
              </div>
              <div className="p-8 border-t border-gray-700">
                <ul className="space-y-2 text-white font-semibold">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Career</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            {/* Center Column (Navigation) */}
            <div className="bg-[#121212] shadow-lg pt-[142px] border-l-[1px] border-gray-800 overflow-y-auto md:no-scrollbar md:w-2/3 lg:w-1/2">
              {" "}
              {/*Responsive width*/}
              <NavigationContent
                navigationData={navigationData}
                activeSection={activeSection}
                onSectionClick={setActiveSection}
              />
            </div>
            {/* Right Column (Social & Contact) */}
            <div className="bg-[#1d1d1d] shadow-lg md:flex flex-col p-4 md:w-1/3 lg:w-1/4 hidden">
              {" "}
              {/*Responsive width*/}
              <div className="flex-1 p-4">
                <div className="mb-8">
                  <p className="text-white text-lg font-medium mb-2">
                    Get in touch
                  </p>
                  <ul className="space-y-2 text-white">
                    <li>+(02) - 094 980 547</li>
                    <li>info@extratdesign.com</li>
                    <li>230 Norman Street New York,</li>
                    <li>QC (USA) H8R 1A1</li>
                  </ul>
                </div>
                {/* <div className="absolute bottom-0 right-0 mb-4 mr-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute rounded-full h-[70px] w-[70px] bg-orange-300" />
                    <div className="absolute rounded-full h-[50px] w-[50px] bg-purple-300 -top-[20px] -left-[10px]" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white p-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
