"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import type { FloatingImage as FloatingImageType } from "@/types/testimonial";
import Image from "next/image";

export function FloatingImage({
  src,
  alt,
  className,
}: FloatingImageType) {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      className={className}
      animate={{
        x: mousePosition.x * 0.02,
        y: mousePosition.y * 0.02,
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 130,
        mass: 0.7,
      }}
    >
      <Image
        src={typeof src === "object" ? src.src : src} // Extract string if StaticImageData
        alt={alt}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-lg shadow-lg"

      />
    </motion.div>
  );
}
