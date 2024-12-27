import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export const Stats = ({ statsImg }: { statsImg: StaticImageData }) => {
  return (
    <div className="flex items-center justify-between min-h-screen min-w-[100vw] bg-[#fffaf0] z-50">
      <div className="flex-1">
        <h4 className="text-lg mb-12 ml-12 uppercase font-bold">
          Why <br /> Choose Us
        </h4>
        <div className="grid grid-cols-2 gap-16">
          {[
            { value: "25k", label: "Project completed" },
            { value: "8k", label: "Happy customers" },
            { value: "15", label: "Years experiences" },
            { value: "98", label: "Awards achievement" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-[100px] font-bold mb-2">{stat.value}</h3>
              <p className="text-xl text-wrap">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
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
  );
};
