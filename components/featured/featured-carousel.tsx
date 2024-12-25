"use client";

import './carousel.css'

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type CarouselItem as CarouselItemType } from "@/types/carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

interface FeaturedCarouselProps {
  items: CarouselItemType[];
}

export function FeaturedCarousel({ items }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplay = AutoPlay({ delay: 5000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: true,
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className=" bg-[#111111] text-white featured__carousel">
      <div className="relative  overflow-hidden  selection:bg-white selection:text-black mx-auto pt-[100px] pb-[150px] max-w-[1320px]">
        {/* Featured Work Label */}
        <div className="pb-[15px]">
          <span className="text-[16px] font-medium tracking-wide leading-snug">
            FEATURED
            <br />
            WORK
          </span>
        </div>

        {/* Main Carousel */}
        <div className="embla " ref={emblaRef}>
          <div className="embla__container h-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="embla__slide h-full flex-[0_0_100%]"
              >
                <div className="grid grid-cols-2 h-full gap-8">
                  {/* Text Content */}
                  <div className="relative flex flex-col justify-center px-24   z-50">
                    <div className="absolute top-0 right-24 ">
                      <span className="md:text-[40px] text-2xl font-medium tracking-wide">
                        {currentIndex + 1} / {items.length}
                      </span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className="space-y-2"
                      >
                        <h2 className="md:text-[130px] text-4xl font-bold leading-[0.95] tracking-[-0.02em] whitespace-pre-line">
                          {item.title}
                        </h2>
                        <p className="md:text-[130px] text-4xl font-bold leading-[0.95] tracking-[-0.02em]">
                          {item.year}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  {/* Image */}
                  <div className="relative overflow-hidden flex items-center justify-center z-0 right-20">
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                      className="h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={800}
                        className="object-cover "
                        priority
                        quality={100}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 text-white/50 hover:text-black border rounded-full hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="group absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 text-white/50  hover:text-black border rounded-full hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
