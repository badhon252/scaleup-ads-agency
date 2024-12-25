import '@/public/styles/hero.css'
import headerImg from '@/public/assets/1.webp'
import Image from 'next/image';
import { ScrollIndicator } from '../scroll-indicator';
import '@/public/styles/hero.css'
import startImg from '@/public/assets/6.png'
export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className=" container mx-auto hero__area-3 mt-20 relative lg:max-w-[1300px] md:min-h-screen ">
        <div className="hero__area3 flex justify-between items-center md:flex-wrap-reverse">
          <h2 className="sec-sub-title md:absolute">Digital</h2>
          <div>
            <Image src={startImg} alt="footer-img" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="sec-title lg:text-[15rem] md:text-[10rem] sm:text-[7rem] xsm:text-6xl text-[60px] font-extrabold z-10">
            MARK
          </h1>
          <div className="video-intro md:block hidden">
            <button>
              Watch <br />
              video intro
            </button>
          </div>
        </div>

        <div className="flex justify-between flex-wrap-reverse">
          <h3 className="hero__text-3 ">
            <p className="hero__text-animation py-4">
              Static and dynamic secure code review can prevent a day before
              your product is even released. We can integrate with your dev
              environment
            </p>
          </h3>
          <h1 className="text-right pl-8 sec-title lg:text-[15rem] md:text-[10rem] sm:text-[7rem] xsm:text-6xl text-[60px] font-extrabold justify-end z-10">
            ETING
          </h1>
        </div>

        <div className="hero-footer flex overflow-hidden">
          <div className="scroll-down md:block hidden">
            <ScrollIndicator />
          </div>
          <div className="overflow-hidden hero-footer-img md:absolute md:right-[-300px] bottom-[150px]  z-0 ">
            <Image src={headerImg} alt="footer-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
