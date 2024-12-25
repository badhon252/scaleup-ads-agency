import '@/public/styles/hero.css'
import headerImg from '@/public/assets/1.webp'
import Image from 'next/image';
import { ScrollIndicator } from '../scroll-indicator';
export default function Hero() {
  return (
    <div className=" container mx-auto hero__area-3 mt-20 relative lg:max-w-[1300px] min-h-screen">
      <div className="hero__area3">
        <h2 className="sec-sub-title ">Digital</h2>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="sec-title md:text-[15rem] sm:text-[9rem] xsm:text-6xl font-extrabold z-10">
          MARK
        </h1>
        <div className="video-intro lg:block md:hidden">
          <button>
            watch <br />
            video intro
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <h3 className="hero__text-3">
          <p className="hero__text-animation">
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev environment
          </p>
        </h3>
        <h1 className="sec-title md:text-[15rem] sm:text-[9rem] xsm:text-6xl font-extrabold justify-end z-10">
          ETING
        </h1>
      </div>

      <div className="hero-footer flex">
        <div className="scroll-down lg:block md:hidden">
          <ScrollIndicator />
        </div>
        <div className="overflow-hidden hero-footer-img absolute right-[-300px] bottom-[150px] z-0">
          <Image src={headerImg} alt="footer-img" />
        </div>
      </div>
    </div>
  );
}
