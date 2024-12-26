"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { NavigationItem } from "./navigation-data";
import { FlipText } from "@/lib/RevealTexts";

interface NavigationContentProps {
  navigationData: NavigationItem[];
  activeSection: string | null;
  onSectionClick: (section: string) => void;
}

export function NavigationContent({
  navigationData,
  activeSection,
  onSectionClick,
}: NavigationContentProps) {
  return (
    <div className="">
      {navigationData.map((item) => (
        <div
          key={item.title}
          className="relative border-t-[1px] border-gray-800 mt-0 pl-[40px]"
        >
          <button
            onClick={() =>
              onSectionClick(activeSection === item.title ? "" : item.title)
            }
            className="w-full flex items-center justify-between text-white group"
          >
            <span
              className="text-4xl md:text-6xl font-semibold py-5"
            
            >
              <FlipText>{item.title}</FlipText>
            </span>
            {item.children && item.children.length > 0 && (
              <span className="bg-neutral-800 flex justify-center items-center h-[100px] w-[84px] rounded font-bold">
                {activeSection === item.title ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            )}
          </button>

          <AnimatePresence>
            {activeSection === item.title &&
              item.children &&
              item.children.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 ml-4 space-y-2"
                >
                  {item.children.map((child) => (
                    <motion.a
                      key={child.title}
                      href={child.href}
                      className="block text-gray-400 hover:text-white text-lg py-1"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {child.title}
                    </motion.a>
                  ))}
                </motion.div>
              )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
