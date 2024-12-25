"use client";

import { ScrollIndicator } from "./scroll-indicator";
import { motion } from "framer-motion";

export default function HeroSection() {

  return (
    <div className="relative min-h-screen  ">
      {/* Main container for content */}
      <div className="relative container mx-auto px-4">
        <div className="pb-20 pt-32">
          <div className="max-w-xl">
            {/* Heading section with a line divider */}
            <div className="mb-4 flex items-center gap-4">
              <motion.h2
                className="text-sm font-medium"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                DIGITAL
              </motion.h2>
              <motion.div
                className="h-[1px] w-12 bg-current opacity-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Main title and video intro */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
              <motion.h1
                className="text-[3rem] md:text-[8rem] lg:text-[12rem] font-bold leading-[0.85] tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                MARK
              </motion.h1>
              <motion.div
                className="mt-4 lg:mt-0 text-sm text-blue-500 underline cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Video Intro
              </motion.div>
            </div>

            {/* Description text */}
            <motion.p
              className="mt-8 max-w-md text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Static and dynamic secure code review can prevent issues a day
              before your product is even released. We can integrate with your
              dev environment.
            </motion.p>

            {/* Action button */}
            {/* <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button variant="outline" size="sm" onClick={toggleTheme}>
                Switch Theme
              </Button>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
}
