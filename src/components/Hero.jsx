import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[6%] sm:top-[10%] lg:top-[14%] w-full mx-auto lg:pl-[22vh] lg:pr-[18vh] xl:pl-60 xl:pr-44 2xl:px-24 3xl:px-36 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0 pl-4 sm:pl-8 md:pl-12 lg:pl-16">
          <h1 className='font-bold text-white font-[Creepster] text-[36px] xs:text-[48px] sm:text-[58px] md:text-[68px] lg:text-[80px] 2xl:text-[120px] leading-[80px] 2xl:leading-[120px] mb-8 sm:mb-12 lg:mb-16 streaky-glow'>
            LAKSHYA
          </h1>
          {/* <div className="scale-75 origin-top">
            <Position />
          </div> */}
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-8 sm:mt-16 md:mt-20 lg:mt-24 2xl:mt-32 ml-5 xs:ml-[-2vh] sm:ml-[-10vh] md:ml-[-16vh]">
          <div className='font-bold text-[16px] sm:text-[24px] md:text-[30px] 2xl:text-[36px] sm:leading-[28px] md:leading-[36px] 2xl:leading-[44px] streaky-glow max-w-xs 2xl:max-w-md text-white text-left font-[Creepster]'>
            I love learning <br /> captivating experiences for the programming world to savor.
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
