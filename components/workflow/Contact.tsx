import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center w-[100vw] flex flex-col justify-center items-center bg-[#e0e3cc]"
    >
      <h4 className="text-[28px] mb-[25px]">Have you project in mind?</h4>
      <h2 className="text-[100px] font-medium pb-[60px]">
        Let&#39;s make something <br /> great together!
      </h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full w-[250px] h-[250px] border-2 border-black px-8 py-4 font-medium hover:bg-black hover:text-white duration-700"
      >
        Contact With Us
      </motion.button>
    </motion.div>
  );
};
