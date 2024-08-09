// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Carousel.css";

// import required modules
import { EffectCards } from "swiper/modules";

import Pic from "../../assets/projects/flowrecords.png";
import Pic2 from "../../assets/projects/dice-game.png";

const Carousel = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://enagram.ai/" target="_blank">
            <div className="group">
              <img src={Pic} alt="pic" className="w-[700px] h-[500px]" />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-0 bg-opacity-90 w-full h-3/5 bg-black p-10 flex flex-col justify-around">
                <p className="text-4xl">FlowRecords</p>
                <p className="text-white text-xl">
                  A Frontend focused Web Developer - building Websites and Web
                  Applications that leads to the success of the overall product
                </p>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a href="https://enagram.ai/" target="_blank">
            <div className="group">
              <img src={Pic2} alt="pic" className="w-[700px] h-[500px]" />
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-0 bg-opacity-90 w-full h-3/5 bg-black p-10 flex flex-col justify-around">
                <p className="text-4xl">Dice Game</p>
                <p className="text-white text-xl">
                  A Frontend focused Web Developer - building Websites and Web
                  Applications that leads to the success of the overall product
                </p>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
