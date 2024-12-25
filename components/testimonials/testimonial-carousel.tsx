"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingImage } from "@/components/testimonials/floating-image";
import { testimonials, floatingImages } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative min-h-screen  overflow-hidden bg-white px-4 py-20 flex items-center">
      {/* Floating Images */}
      {floatingImages.map((image, index) => (
        <FloatingImage key={index} {...image} />
      ))}

      {/* Testimonial Content */}
      <div className="relative mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              className="mb-8 text-2xl font-medium max-w-[630px] leading-relaxed text-gray-800 text-semibold italic" 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              &#34;{currentTestimonial.quote}&#34;
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900">
                {currentTestimonial.author}
              </h3>
              <p className="text-sm text-gray-500">
                {currentTestimonial.title}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="rounded-full hover:bg-black hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full hover:bg-black hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
