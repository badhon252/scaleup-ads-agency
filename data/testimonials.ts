import { Testimonial, FloatingImage } from "@/types/testimonial";
import testimonialImg1 from "@/public/assets/t-1.webp";
import testimonialImg2 from "@/public/assets/t-2.webp";
import testimonialImg3 from "@/public/assets/t-3.webp";
import testimonialImg4 from "@/public/assets/t-4.webp";
import testimonialImg5 from "@/public/assets/t-5.webp";
import testimonialImg6 from "@/public/assets/t-6.webp";

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "managing-director-1",
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "Maria D. Halk",
    title: "Managing Director",
  },
  {
    id: "ceo-1",
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "John Doe",
    title: "CEO",
  },
  {
    id: "agm-1",
    quote:
      "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    author: "Jane Smith",
    title: "Assistant General Manager (AGM)",
  },
];

// Floating Images Data
export const floatingImages: FloatingImage[] = [
  {
    src: testimonialImg1,
    alt: "Team member working",
    className: "absolute top-10 left-10 w-32 h-32 rounded-lg",
  },
  {
    src: testimonialImg2,
    alt: "Office collaboration",
    className: "absolute top-0  w-40 h-40 rounded-lg",
  },
  {
    src: testimonialImg3,
    alt: "Team meeting",
    className: "absolute bottom-20 left-20 w-36 h-36 rounded-lg",
  },
  {
    src: testimonialImg4,
    alt: "Working environment",
    className: "absolute bottom-10 right-20 w-44 h-44 rounded-lg",
  },
  {
    src: testimonialImg5,
    alt: "Brainstorming session",
    className: "absolute top-50 left-50 w-48 h-48 rounded-lg",
  },
  {
    src: testimonialImg6,
    alt: "Team planning",
    className: "absolute bottom-5 right-5 w-56 h-56 rounded-lg",
  },
];


