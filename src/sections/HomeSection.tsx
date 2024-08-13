import SocialBox from "../components/SocialBox";

import Carousel from "../components/carousel/Carousel";
import HomeInfo from "../components/home/HomeInfo";

const HomeSection = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-10 px-10 lg:px-20 lg:py-0 flex flex-col justify-around lg:flex-row lg:items-center lg:justify-around overflow-x-hidden">
      <SocialBox />
      <HomeInfo />
      <Carousel />
    </section>
  );
};

export default HomeSection;
