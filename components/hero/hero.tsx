'use client'
import '@/public/styles/hero.css'
import headerImg from '@/public/assets/1.webp'
import Image from 'next/image';
import { ScrollIndicator } from '../scroll-indicator';
import '@/public/styles/hero.css'
import startImg from '@/public/assets/6.png'
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className=" container mx-auto hero__area-3 mt-20 relative lg:max-w-[1300px] md:min-h-screen ">
        <div className="hero__area3 flex justify-between items-center md:flex-wrap-reverse">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sec-sub-title md:absolute"
          >
            Digital
          </motion.h2>
          <div>
            <Image src={startImg} loading='lazy' placeholder='blur' alt="footer-img" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0.5, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sec-title lg:text-[15rem] md:text-[10rem] sm:text-[7rem] xsm:text-6xl text-[60px] font-extrabold z-10"
          >
            MARK
          </motion.h1>
          <div className="video-intro md:block hidden">
            <button>
              Watch <br />
              video intro
            </button>
          </div>
        </div>

        <div className="flex justify-between flex-wrap-reverse">
          <motion.article
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hero__text-3 "
          >
              Static and dynamic secure code review can prevent a day before
              your product is even released. We can integrate with your dev
              environment
          </motion.article>
          <motion.h1
            initial={{ opacity: 0.5, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .37 }}
            className="text-right pl-8 sec-title lg:text-[15rem] md:text-[10rem] sm:text-[7rem] xsm:text-6xl text-[60px] font-extrabold justify-end z-10"
          >
            ETING
          </motion.h1>
        </div>

        <div className="hero-footer flex overflow-hidden">
          <div className="scroll-down md:block hidden">
            <ScrollIndicator />
          </div>
          <motion.div
            initial={{ opacity: 0.5, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden hero-footer-img md:absolute md:right-[-300px] bottom-[150px]  z-0 "
          >
            <Image loading='lazy' src={headerImg} alt="footer-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
