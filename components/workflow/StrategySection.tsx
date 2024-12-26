import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { CircularProgress } from "@/components/workflow/circular-progress";
import SocialLinks from "./social";

export const StrategySection = ({image}:{image:StaticImageData}) => {
  return (
    <section className="progressSection ">
      <div className="mx-auto flex items-center justify-center h-screen w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex-1 relative"
        >
          <Image
            src={image}
            alt="image"
            width={100}
            height={100}
            className="object-cover absolute bottom-0 left-[-100px]"
          />

          <div className="uppercase">
            <h2 className="leading-3 font-bold mb-4">Why</h2>
            <h3 className="leading-3 font-bold mb-8">Choose Us</h3>
          </div>
          <h1 className="text-[60px] font-bold leading-none pb-[50px]">
            KEYWORD, RESEARCH, STRATEGY, SURVEY, & ANALYTICS
          </h1>
          <p className="max-w-[360px] md:ml-[80px]">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>
          <div className="social-links md:ml-[80px]">
            <SocialLinks title="Google" link="https://www.google.com" />
            <SocialLinks title="Pinterest" link="https://www.pinterest.com" />
            <SocialLinks title="Instagram" link="https://www.instagram.com" />
          </div>
        </motion.div>
        <div className="flex-1">
          {[
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
          ].map((item, index) => (
            <CircularProgress key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
