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
      <hr className="text-gray-100 mt-8" />

      <div className="service__category pt-[55px] pb-[50px] flex justify-between">
        <h1 className="text-4xl font-bold uppercase leading-loose basis-1/4 text-wrap">
          {title}
        </h1>

        <div className="service__category-details max-w-[400px] font-medium basis-1/4">
          <p className="text-lg">{description}</p>

          <ServiceCategoryList list={list} />
        </div>

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
    className="basis-2/5 max-w-[200px] max-h-[200px] border rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-500"
    aria-label="See details"
  >
    <Link href="#">
      Details <i className="fa fa-angle-right" aria-hidden="true"></i>
    </Link>
  </button>
);