import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, scale: 1.4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center leading-none w-[100vw]  flex flex-col justify-center items-center"
    >
      <h1 className="md:text-[120px] sm:text-6xl font-bold mb-4">WHY</h1>
      <h2 className="md:text-[120px] sm:text-6xl font-bold">CHOOSE US</h2>
    </motion.div>
  );
};
