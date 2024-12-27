'use client'
import React from "react";
import ServiceCategory from "./service-category";
import { motion } from "framer-motion";

// Service categories data with unique IDs
const categories = [
  {
    id: "seo", // Using a unique string ID for clarity and consistency
    title: "Search Engine Optimization",
    description:
      "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy centers around user experience.",
    list: ["Logo Design", "Advertisement", "Promotion"],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description:
      "We craft compelling email campaigns that resonate with your audience, driving engagement and conversions.",
    list: ["Campaign Creation", "List Management", "Segmentation"],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description:
      "Our content marketing strategies aim to increase brand awareness through valuable and engaging content.",
    list: ["Blog Writing", "SEO Optimization", "Content Strategy"],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "We help brands grow their presence on social media, fostering community engagement and brand loyalty.",
    list: ["Social Strategy", "Paid Ads", "Influencer Outreach"],
  },
];

export default function ServiceArea() {
  return (
    <section className="service__area min-h-screen">
      <div className="container mx-auto">
        {/* Service Area Header */}
        <div className="service__area--header md:pl-[300px] md:pt-[130px] relative">
          <div className="bg-white">
            <h4 className="text-[1rem] py-4 md:pt-[50px] pb-3 uppercase">Services</h4>
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            className="md:text-[60px] text-4xl font-bold uppercase py-4 md:pb-[40px]">
              Our Marketing <br /> Services
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
          className="service__area--header-subtitle md:pt-[70px] md:pb-[60px] text-base md:ml-[250px] max-w-[410px] text-gray-600">
            Consumers today rely heavily on digital means to research products.
            We research brands by blending engaging content, while 51% of
            consumers say they use Google to research products before buying.
          </motion.p>
        </div>

        {/* Service Categories */}
        <div className="service__categories space-y-12">
          {categories.map((category) => (
            <ServiceCategory
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              list={category.list}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
