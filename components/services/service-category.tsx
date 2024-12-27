import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCategoryProps {
  id: number | string;
  title: string;
  description: string;
  list: string[];
}

export default function ServiceCategory({
  title,
  description,
  list,
}: ServiceCategoryProps) {
  return (
    <>
      <hr className="text-gray-100 md:mt-8" />
      <div className="service__category md:pt-[55px] md:pb-[50px] md:flex justify-between">
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold uppercase leading-tight pb-4 basis-1/4 text-wrap">
          {title}
        </motion.h1>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="service__category-details max-w-[400px] basis-1/4">
          <p className="text-lg">{description}</p>
          <ServiceCategoryList list={list} />
        </motion.div>

        <DetailsButton />
      </div>
    </>
  );
}

// Extracted list component
const ServiceCategoryList = ({ list }: { list: string[] }) => (
  <ul className="pt-[20px] service__category-lists">
    {list.map((item, index) => (
      <li key={index} className="flex items-center gap-[10px] text-lg">
        <i className="fa fa-check" aria-hidden="true"></i>+ {item}
      </li>
    ))}
  </ul>
);

// Button component
const DetailsButton = () => (
  <button
    className="basis-2/5 mt-8 md:max-w-[200px] md:max-h-[200px] min-w-[200px] min-h-[200px] border rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-500"
    aria-label="See details"
  >
    <Link href="#">
      Details <i className="fa fa-angle-right" aria-hidden="true"></i>
    </Link>
  </button>
);
