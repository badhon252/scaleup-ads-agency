"use client";

import { useRef } from "react";
import "./workflow.css";
import image from "@/public/assets/workflow-sec-8.png";
import statsImg from "@/public/assets/counter-3.webp";

import { motion, useScroll, useTransform } from "framer-motion";
import {WhyChooseUs} from "@/components/workflow/WhyChooseUs";
import {StrategySection} from "@/components/workflow/StrategySection";
import {Stats} from "@/components/workflow/Stats";
import {Contact} from "@/components/workflow/Contact";


export default function HorizontalSections() {
  
      const targetRef = useRef<HTMLDivElement | null>(null);
      const { scrollYProgress } = useScroll({ target: targetRef });

      const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  return (
    <div ref={targetRef} className="md:relative md:h-[500vh] ">
      <div className="md:sticky md:top-0 flex items-center justify-between md:h-screen overflow-hidden ">
        <motion.div
          style={{ x }}
          className="border sm:flex"
        >
          <WhyChooseUs />
          <StrategySection image={image} />
          <Stats  statsImg={statsImg}/>
          <Contact />
        </motion.div>
       
      </div>
    </div>
  );
}
