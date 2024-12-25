import Image, { StaticImageData } from "next/image";


export default function BrandImg({ img }: { img: StaticImageData }) {
  return (
    <div className="brand-item">
      <Image src={img} width={100} height={100} alt="brand-1" />
    </div>
  );
}
