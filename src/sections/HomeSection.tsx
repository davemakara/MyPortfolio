import SocialBox from "../components/SocialBox";

import Carousel from "../components/carousel/Carousel";

const HomeSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center overflow-x-hidden">
      <SocialBox />

      <div className="w-full px-2s0 block lg:flex lg:justify-around">
        <div className="max-w-[500px] flex flex-col justify-center gap-16">
          <h1 className="text-5xl text-white tracking-wider leading-snug">
            Welcome to my portfolio👨‍💻
          </h1>

          <p className="text-white text-xl">
            A Frontend focused Web Developer - building Websites and Web
            Applications that leads to the success of the overall product
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default HomeSection;
