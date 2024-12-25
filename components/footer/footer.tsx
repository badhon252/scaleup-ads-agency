"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "FACEBOOK", icon: Facebook, href: "#" },
    { name: "TWITTER", icon: Twitter, href: "#" },
    { name: "LINKEDIN", icon: Linkedin, href: "#" },
    { name: "INSTAGRAM", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Axtra</h2>
            <p className="text-sm text-gray-400">DIGITAL AGENCY STUDIO</p>
          </div>
          <p className="text-gray-400 max-w-sm">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={social.href}
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span>{social.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end">
          <motion.h2
            className="text-[#C5F42C] text-4xl md:text-6xl font-bold leading-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            LET&apos;S TALK
          </motion.h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-16 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2022 - 2025 | All rights reserved by{" "}
          <Link href="@mailto:dev.khalidhossain@gmail.com">dev.khalidhossain@gmail.com</Link>
        </p>
        <nav className="flex space-x-8 mt-4 md:mt-0">
          {["ABOUT US", "CONTACT", "CAREER", "FAQS"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
