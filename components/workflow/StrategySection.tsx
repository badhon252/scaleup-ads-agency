import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { CircularProgress } from "@/components/workflow/circular-progress";
import SocialLinks from "./social";

export const StrategySection = ({image}:{image:StaticImageData}) => {
  return (
    <section className="progressSection pt-[85px] bg-[#f3ecec] w-[100vw] mx-auto lg:p-40 p-5 z-[11]">
      <div className=" md:flex flex-wrap items-center justify-center   ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex-1 relative flex-wrap"
        >
          <Image
            src={image}
            alt="image"
            width={50}
            height={50}
            className="object-cover absolute bottom-[20px] md:left-0 right-8"
          />

          <div className="uppercase ">
            <h2 className="leading-3 font-bold mb-4">Why</h2>
            <h3 className="leading-3 font-bold mb-8">Choose Us</h3>
          </div>
          <h1 className="md:text-[60px] text-3xl font-bold leading-none md:pb-[50px] pb-6">
            KEYWORD, RESEARCH, STRATEGY, SURVEY, & ANALYTICS
          </h1>
          <p className="md:max-w-[360px] py-4 md:ml-[80px]">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>
          <div className="social-links md:ml-[80px] space-x-4">
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
