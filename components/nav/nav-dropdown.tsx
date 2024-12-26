import { motion } from "framer-motion";
import { NavigationItem } from "./navigation-data";

interface NavDropdownProps {
  items: NavigationItem[];
}

export function NavDropdown({ items }: NavDropdownProps) {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 min-w-[200px] bg-black text-white py-2 rounded-lg shadow-xl"
    >
      {items.map((item, index) => (
        <motion.a
          key={item.title}
          href={item.href}
          className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
}
