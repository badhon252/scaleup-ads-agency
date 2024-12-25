"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingImage } from "@/components/testimonials/floating-image";
import { testimonials, floatingImages } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoize the current testimonial for performance
  const currentTestimonial = useMemo(
    () => testimonials[currentIndex],
    [currentIndex]
  );

  // Predefined positions for floating images
  const floatingImagePositions = useMemo(
    () => [
      { top: "10%", left: "20%" },
      { top: "5%", right: "32%" },
      { bottom: "20%", left: "10%" },
      { bottom: "10%", right: "20%" },
      { top: "50%", left: "5%", transform: "translateY(-50%)" },
    ],
    []
  );

  // Animation variants for reusable motion effects
  const animationVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // Handlers for navigation
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Mouse move handler for magnetic effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 py-20 sm:px-6 sm:py-10"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Images with Magnetic Effect */}
      {floatingImages.map((image, index) => {
        const position =
          floatingImagePositions[index % floatingImagePositions.length];
        return (
          <motion.div
            key={index}
            style={position}
            className="absolute"
            initial={false}
            // animate={{
            //   x: (mousePosition.x - window.innerWidth / 2) * 0.05,
            //   y: (mousePosition.y - window.innerHeight / 2) * 0.05,
            // }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <FloatingImage {...image} />
          </motion.div>
        );
      })}

      {/* Testimonial Content */}
      <div
        className="relative mx-auto flex flex-col items-center text-center max-w-2xl bg-gray-50 shadow-lg rounded-lg p-8 sm:p-6"
        aria-labelledby="testimonial-carousel"
      >
        <h2 id="testimonial-carousel" className="sr-only">
          Testimonial Carousel
        </h2>

        {/* Testimonial Animation */}
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
            {/* Testimonial Quote */}
            <motion.blockquote
              className="mb-6 text-2xl font-medium max-w-[630px] leading-relaxed text-gray-800 italic sm:text-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              &#34;{currentTestimonial.quote}&#34;
            </motion.blockquote>

            {/* Testimonial Author */}
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

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="rounded-full hover:bg-black hover:text-white sm:h-10 sm:w-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 sm:h-3 sm:w-3" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full hover:bg-black hover:text-white sm:h-10 sm:w-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 sm:h-3 sm:w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
