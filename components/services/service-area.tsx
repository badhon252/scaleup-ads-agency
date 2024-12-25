import React from "react";
import ServiceCategory from "./service-category";

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
        <div className="service__area--header pl-[300px] pt-[130px] relative">
          <div className="bg-white">
            <h4 className="text-[1rem] pt-[50px] pb-3 uppercase">Services</h4>
            <h1 className="text-[60px] font-bold uppercase pb-[40px]">
              Our Marketing <br /> Services
            </h1>
          </div>
          <p className="service__area--header-subtitle pt-[70px] pb-[60px] text-base ml-[250px] max-w-[410px] text-gray-600">
            Consumers today rely heavily on digital means to research products.
            We research brands by blending engaging content, while 51% of
            consumers say they use Google to research products before buying.
          </p>
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
