"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

import blogImg from "@/public/assets/blog1.webp";
import blogImg2 from "@/public/assets/blog2.webp";
import { FlipText } from "@/lib/RevealTexts";

const BLOG_POSTS = [
  {
    category: "UI Design",
    date: "02 May 2019",
    title: "How to bring fold to your startup company with Axtra",
    image: blogImg,
    link: "/blog/startup-design",
  },
  {
    category: "UI Design",
    date: "02 May 2019",
    title: "How to manage a talented and successful design team",
    image: blogImg2,
    link: "/blog/design-team",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white py-24"
    >
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header Content */}
        <div className="relative">
          <motion.span
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-4 block text-sm font-medium uppercase tracking-wider text-gray-500"
          >
            RECENT BLOG
          </motion.span>

          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-2">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="max-w-2xl"
            >
              <h2 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                READ UPDATED
                <br />
                JOURNAL
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mt-8 max-w-xl lg:mt-0"
            >
              <p className="text-lg text-gray-600">
                Read our blog and try to see everything from every perspective.
                Our passion lies in making everything accessible and aesthetic
                for everyone.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="relative mt-20">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
            {BLOG_POSTS.map((post, index) => (
              <ParallaxScroll key={post.link} offset={index === 1 ? 100 : 50}>
                <motion.article
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 3}
                  className={`relative ${
                    index === 1 ? "lg:translate-y-24" : ""
                  }`}
                >
                  <Link href={post.link} className="group block">
                    <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          className="object-cover"
                        />
                      </motion.div>
                      {/* <motion.div
                        className="absolute inset-0 bg-black/40 opacity-0 transition-opacity"
                        whileHover={{ opacity: 1 }}
                      /> */}
                    </div>

                    {/* blog info  */}
                    <motion.div
                      className="space-y-3 blog__info-3 absolute bottom-0 right-0 w-[63%] p-[40px] bg-white"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>{post.category}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold leading-tight text-[26px] pb-[50px] border-b-[1px] border-gray-200">
                        {post.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 text-sm font-medium">
                        <FlipText>Read More</FlipText>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.article>
              </ParallaxScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
