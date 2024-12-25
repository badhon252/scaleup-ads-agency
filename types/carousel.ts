import { StaticImageData } from "next/image";

export interface CarouselItem {
  id: number;
  title: string;
  year: string;
  image: StaticImageData;
}

export interface CarouselProps {
  items: CarouselItem[];
}

export interface TransitionOptions {
  duration: number;
  ease: number[];
}

