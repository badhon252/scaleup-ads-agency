"use client";

import { motion } from "framer-motion";
// import SocialLinks from "./social";
// import Link from 'next/link';

interface CircularProgressProps {
  percentage: number;
  title: string;
  description: string;
}

export function CircularProgress({
  percentage,
  title,
  description,
}: CircularProgressProps) {
  const circumference = 2 * Math.PI * 45; // radius is 45

  return (
    <div className="h-fit w-fit flex md:flex-col md:justify-center md:gap-4 md:pl-[100px] pl-4  md:pb-[30px] pb-6">
      <motion.div
        className="relative w-32 h-32"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-gray-200"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-black"
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
            }}
            whileInView={{
              strokeDashoffset:
                circumference - (percentage / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center  progress-percentage">
          <span className="text-2xl font-bold ">{percentage}%</span>
        </div>
      </motion.div>
      <motion.div 
      animate={{
        opacity: 1,
        y: 0,
        scale: 1.2,
        transition: {
          duration: 0.5,
          ease: [0.32, 0.72, 0, 1],
        },
      }}
      className="ml-[40px]"
      >
        <h3 className="text-[26px] font-bold pb-[15px]">{title}</h3>
        <p className="text-[16px]  max-w-xs">{description}</p>

        

      </motion.div>
    </div>
  );
}
