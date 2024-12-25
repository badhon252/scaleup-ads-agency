import React from "react";
import Image from "next/image";
import aboutImg from "@/public/assets/about-area-section.webp";

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-gray-50 pt-12 md:pt-[140px] pb-[110px] about__area-3">
      <div className="flex container mx-auto flex-wrap gap-8 justify-center">
        <div className="md:flex-1 z-10">
          <Image src={aboutImg} alt="about" width={500} height={500} />
        </div>
        <div className="md:flex-1">
          <div className="bg-[#121212] z-10 relative">
            <h4 className="md:pt-[45px]">Who We Are</h4>
            <h1 className="md:text-[60px] text-4xl font-bold uppercase pb-[40px] leading-tight">
              We are leading <br /> digital marketing <br /> agency.
            </h1>
          </div>
          <div className="about-area-section md:ml-[160px] pt-[45px]  ">
            <p className="">
              We’re a team of strategic mdigital marketing working globally with
              largest brands, We believe that progress only happens when you
              refused to play things safe. We combine ideas and behaviors, and
              insights with design, technological data to produce brand
              experiences that customers love our services.
            </p>
            <button className="btn-primary p-6 h-[170px] w-[170px] border border-gray-800 rounded-full mt-12 hover:bg-white hover:text-black transition-all duration-300 ">
              Explore Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
