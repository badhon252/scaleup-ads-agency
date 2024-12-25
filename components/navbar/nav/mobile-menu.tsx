import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavItem } from "./nav-data";

interface MobileMenuProps {
  navItems: NavItem[];
  onClose: () => void;
}

export function MobileMenu({ navItems,  }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0  z-40"
    >
      <div className="h-screen pt-20 px-6 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.title} className="py-2">
            <button
              onClick={() =>
                setOpenSection(openSection === item.title ? null : item.title)
              }
              className="w-full flex items-center justify-between text-white py-2"
            >
              <span className="text-xl font-medium">{item.title}</span>
              {item.dropdownItems && (
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openSection === item.title ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            <AnimatePresence>
              {openSection === item.title && item.dropdownItems && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  {item.dropdownItems.map((subItem) => (
                    <motion.a
                      key={subItem.title}
                      href={subItem.href}
                      className="block text-gray-400 py-2 pl-4 hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {subItem.title}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
