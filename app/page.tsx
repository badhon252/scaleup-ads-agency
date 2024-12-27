'use client'
import { useEffect } from "react";
import Lenis from "lenis"

import Hero from '@/components/hero/hero'
import About from '@/components/about/about-area'
import BrandLists from '@/components/brand-lists/brand-area'
import { FeaturedCarousel } from '@/components/featured/featured-carousel';
import ServiceArea from '@/components/services/service-area'
import { carouselItems } from "@/data/carousel-items";
import { TestimonialCarousel } from '@/components/testimonials/testimonial-carousel';
import PricingTable from '@/components/pricing-table/pricing-table';
import { BlogSection } from '@/components/blog/blog-section';
import Footer from '@/components/footer/footer';
import HorizontalSections from '@/components/workflow/horizontal-sections';


export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="">
      <Hero />
      <BrandLists/>
      <About/>
      <ServiceArea/>
      <FeaturedCarousel items={carouselItems} />
      <TestimonialCarousel/>
      <HorizontalSections/>
      <PricingTable/>
      <BlogSection/>
      <Footer/>
    </main>
  )
}

