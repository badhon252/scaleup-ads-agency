"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircularProgress } from "@/components/workflow/circular-progress";
import { type Section } from "@/types/horizontal-section";
import "./workflow.css";
import SocialLinks from "./social";
import Image from 'next/image';

import image from '@/public/assets/workflow-sec-8.png'
import statsImg from '@/public/assets/counter-3.webp'

const sections: Section[] = [
  {
    id: "why-choose-us",
    type: "hero",
    content: {
      title: "WHY",
      subtitle: "CHOOSE US",
    },
  },
  {
    id: "strategy",
    type: "progress",
    content: {
      title: "Why",
      subtitle: "Choose Us",
      headings: "KEYWORD,RESEARCH, STRATEGY, SURVEY, & ANALYTICS",
      description:
        "Attention, we take out our round glasses and our sweater with elbow patches to go back to the origins of the user experience: the first mention of the user and its importance was born in the",
      progress: [
        {
          title: "STRATEGY",
          percentage: 60,
          description:
            "Your marketing strategy optimizing performances doesn't have to be a guessing game.",
        },
        {
          title: "AUDIENCE",
          percentage: 95,
          description:
            "Your marketing strategy optimizing performances doesn't have to be a guessing game.",
        },
        {
          title: "KEYWORD",
          percentage: 70,
          description:
            "Your marketing strategy optimizing performances doesn't have to be a guessing game.",
        },
      ],
    },
  },
  {
    id: "stats",
    type: "stats",
  
    content: {
      stats: [
        { value: "25k", label: "Project completed" },
        { value: "8k", label: "Happy customers" },
        { value: "15", label: "Years experiences" },
        { value: "98", label: "Awards achievement" },
      ],
    },
  },
  {
    id: "contact",
    type: "contact",
    content: {
      title: "Let's make something great together!",
      subtitle: "Have you project in mind?",
      buttonText: "Contact With Us",
    },
  },
];

// Reusable Hero Section
const HeroSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0, scale: 1.4 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center leading-none"
  >
    <h1 className="text-[120px] font-bold mb-4">{title}</h1>
    <h2 className="text-[120px] font-bold">{subtitle}</h2>
  </motion.div>
);

// Reusable Progress Section
const ProgressSection = ({
  headings,
  title,
  subtitle,
  description,
  progress,
}: {
  headings: string;
  title: string;
  subtitle: string;
  description: string;
  progress: { title: string; percentage: number; description: string }[];
}) => (
  <section className="progressSection">
    <div className="container mx-auto flex  ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" mb-12 flex-1 relative"
      >
        <Image src={image} alt="image" width={100} height={100} className="object-cover absolute bottom-0 left-[-100px]" />

        <div className="uppercase">
          <h2 className="leading-3 font-bold mb-4">{title}</h2>
          <h3 className="leading-3 font-bold mb-8">{subtitle}</h3>
        </div>
        <h1 className="text-[60px] font-bold leading-none pb-[50px]">
          {headings}
        </h1>
        <p className="max-w-[360px] md:ml-[80px]">{description}</p>
        <div className="social-links md:ml-[80px]">
          <SocialLinks title="Google" link="https://www.google.com" />
          <SocialLinks title="Pinterest" link="https://www.pinterest.com" />
          <SocialLinks title="Instagram" link="https://www.instagram.com" />
        </div>
      </motion.div>
      <div className="flex-1">
        {progress.map((item, index) => (
          <CircularProgress key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

// Reusable Stats Section
const StatsSection = ({
  stats,
}: {
  stats: { value: string; label: string }[];
}) => (
  <>
    <div className="flex justify-between ">
      <div className="flex-1">
        <h4 className="text-lg mb-12 ml-12 uppercase font-bold">
          Why <br /> Choose Us
        </h4>
        <div className="grid grid-cols-2 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-[100px] font-bold mb-2 ">{stat.value}</h3>
              <p className="text-xl text-wrap">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>{" "}
      <div className="flex-1">
        <Image
          src={statsImg}
          alt="image"
          width={800}
          height={1000}
          className="object-cover"
        />
      </div>
    </div>
  </>
);

// Reusable Contact Section
const ContactSection = ({
  subtitle,
  buttonText,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <h4 className="text-[28px] mb-[25px] ">{subtitle}</h4>
    <h2 className="text-[100px] font-light pb-60px text-wrap">
      Let&#39;s make something <br /> great together!
    </h2>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full w-[250px] h-[250px] border-2 border-black px-8 py-4 font-medium hover:bg-black hover:text-white duration-700"
    >
      {buttonText}
    </motion.button>
  </motion.div>
);

// Main Component
export default function HorizontalSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const [horizontalSpeed] = useState(200);

  // Adjust background color based on scroll progress
  const backgroundColor = useTransform(
    scrollXProgress,
    [0.75, 1],
    ["rgb(255, 255, 255)", "rgb(220, 231, 220)"]
  );

  // Handle Horizontal Scroll
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (containerRef.current) {
        event.preventDefault();
        containerRef.current.scrollBy({
          left: event.deltaY > 0 ? horizontalSpeed : -horizontalSpeed,
          behavior: "smooth",
        });
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [horizontalSpeed]);

  return (
    <div className="h-screen w-screen overflow-hidden mx-auto">
      <div
        ref={containerRef}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className="flex-none w-screen h-full snap-start choose__us__area"
            style={{
              backgroundColor:
                section.type === "contact" ? backgroundColor : "#fffaf0",
            }}
          >
            <div className="h-full w-full flex items-center justify-center p-8">
              {section.type === "hero" && <HeroSection {...section.content} />}
              {section.type === "progress" && (
                <ProgressSection {...section.content} />
              )}
              {section.type === "stats" && (
                <StatsSection {...section.content} />
              )}
              {section.type === "contact" && (
                <ContactSection {...section.content} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
