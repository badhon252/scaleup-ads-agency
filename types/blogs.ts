import { StaticImageData } from "next/image";

export interface BlogPost {
  category: string;
  date: string;
  title: string;
  image: StaticImageData | string;
  link: string;
}
