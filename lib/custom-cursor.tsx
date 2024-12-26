"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "@/public/styles/custom-cursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the user is on a mobile device
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.closest("a") ||
        target.tagName === "LINK" ||
        target.closest("Link")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.closest("a") ||
        target.tagName === "LINK" ||
        target.closest("Link")
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isMobile]);

  // Hide custom cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`cursor`}
        data-cursor="0"
        animate={{
          x: position.x - 2.5,
          y: position.y - 2.5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <motion.div
        className={`cursor cursorHover`}
        data-cursor="1"
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          scale: isHovering ? 4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
