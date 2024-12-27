"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have this component
import { testimonials, floatingImages } from "@/data/testimonials"; // Your data
import Image from "next/image";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

   const [windowWidth, setWindowWidth] = useState(0);
   const [windowHeight, setWindowHeight] = useState(0);

   useEffect(() => {
     if (typeof window !== "undefined") {
       const handleResize = () => {
         setWindowWidth(window.innerWidth);
         setWindowHeight(window.innerHeight);
       };
       window.addEventListener("resize", handleResize);
       handleResize(); // Get initial dimensions
       return () => window.removeEventListener("resize", handleResize);
     }
   }, []);

  const currentTestimonial = useMemo(
    () => testimonials[currentIndex],
    [currentIndex],
  );

  const floatingImagePositions = useMemo(
    () => [
      { top: "10%", left: "20%" },
      { top: "5%", right: "32%" },
      { bottom: "20%", left: "10%" },
      { bottom: "10%", right: "20%" },
      { top: "50%", left: "5%", transform: "translateY(-50%)" },
    ],
    [],
  );

  const animationVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    console.log(
      "Next button clicked. currentIndex:",
      currentIndex,
      ", nextIndex:",
      nextIndex,
    );
  };

  const previous = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    console.log(
      "Previous button clicked. currentIndex:",
      currentIndex,
      ", prevIndex:",
      prevIndex,
    );
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    console.log("currentIndex changed:", currentIndex); //Check if currentIndex is indeed updated.
  }, [currentIndex]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center  px-4 py-20 sm:px-6 sm:py-10"
      ref={carouselRef}
    >
      {floatingImages.map((image, index) => {
        const position =
          floatingImagePositions[index % floatingImagePositions.length];
        return (
          <motion.div
            key={index}
            style={position}
            className="absolute cursor-pointer" // Make images clickable (optional)
            animate={{
              x: (mousePosition.x - windowWidth / 2) * 0.08, // Use windowWidth
              y: (mousePosition.y - windowHeight / 2) * 0.08, // Use windowHeight
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="h-32 w-32 object-cover rounded-full opacity-50 hover:opacity-100"
            />
          </motion.div>
        );
      })}

      <div className="relative mx-auto flex flex-col items-center text-center max-w-2xl bg-white rounded-lg p-8 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="flex flex-col items-center"
            aria-live="polite"
          >
            <motion.blockquote className="mb-6 text-2xl font-medium max-w-[630px leading-relaxed text-gray-800 italic sm:text-lg">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </motion.blockquote>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 sm:text-lg">
                {currentTestimonial.author}
              </h3>
              <p className="text-sm text-gray-500">
                {currentTestimonial.title}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="rounded-full hover:bg-black hover:text-white sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-4 w-4 sm:h-3 sm:w-3" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full hover:bg-black hover:text-white sm:h-10 sm:w-10"
          >
            <ChevronRight className="h-4 w-4 sm:h-3 sm:w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
