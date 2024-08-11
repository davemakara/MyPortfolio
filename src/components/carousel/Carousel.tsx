import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./Carousel.css";

import { EffectCards } from "swiper/modules";

import { PROJECTS } from "../../store/store";
import ProjectCard from "./ProjectCard";

const Carousel = () => {
  const ReversedProjects = [...PROJECTS].reverse();
  console.log(ReversedProjects);

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ReversedProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
