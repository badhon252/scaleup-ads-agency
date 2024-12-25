import { CarouselItem } from "../types/carousel";
import featuredImg1 from "@/public/assets/featured1.webp";
import featuredImg2 from "@/public/assets/featured2.webp";
import featuredImg3 from "@/public/assets/featured3.webp";
import featuredImg4 from "@/public/assets/featured4.webp";

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "BENJON\nWEBSITE",
    year: "2012",
    image: featuredImg1,
  },
  {
    id: 2,
    title: "CREATIVE\nPORTFOLIO",
    year: "2013",
    image: featuredImg2,
  },
  {
    id: 3,
    title: "DIGITAL\nSTUDIO",
    year: "2014",
    image: featuredImg3,
  },
  {
    id: 4,
    title: "DESIGN\nAGENCY",
    year: "2015",
    image: featuredImg4,
  },
];
