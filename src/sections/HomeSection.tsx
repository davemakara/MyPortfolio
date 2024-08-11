import SocialBox from "../components/SocialBox";

import Carousel from "../components/carousel/Carousel";

const HomeSection = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-10 px-10 lg:px-20 lg:py-0 flex flex-col justify-around lg:flex-row lg:items-center lg:justify-around overflow-x-hidden">
      <SocialBox />

      <div className="w-full lg:max-w-[450px] xxl:max-w-[500px] flex flex-col gap-6 lg:gap-16 text-center lg:text-left mb-14 sm:mb-16 lg:mb-0">
        <h1 className="text-3xl md:text-4xl xl:text-5xl xxl:text-6xl text-yellow tracking-wider leading-snug xl:leading-snug xxl:leading-snug mb-6">
          Welcome to my portfolio👨‍💻
        </h1>

        <p className="text-white text-base md:text-lg xl:text-2xl tracking-wider">
          I'm a motivated and detail-oriented Front-end Developer who loves
          building engaging and responsive websites.
        </p>
      </div>
      <Carousel />
    </section>
  );
};

export default HomeSection;
