import { StaticImageData } from "next/image";

export interface Testimonial {
  id: number | string;
  quote: string;
  author: string;
  title: string;
}
export interface FloatingImage {
  src: StaticImageData | string;
  alt: string;
  className: string;
}
