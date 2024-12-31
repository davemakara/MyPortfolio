import { Project } from "../../store/store";

import { Link } from "react-router-dom";

// import { MdOutlineSwipeRight } from "react-icons/md";
// import { MdOutlineSwipeLeft } from "react-icons/md";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group">
      <Link to={project.id}>
        <img
          src={project.image}
          alt={project.name}
          className="w-[280px] sm:w-[340px] md:w-[450px] xxl:w-[700px] xxxl:w-[900px] h-[220px] sm:h-[280px] md:h-[300px] xxl:h-[500px] xxxl:h-[650px] group-hover:grayscale transition-colors duration-300"
        />
        {/* <div className="absolute top-3 md:top-5 left-3 md:left-5 text-4xl md:text-6xl lg:text-5xl xxl:text-7xl text-yellow shadow-lg shadow-black rounded-full overflow-hidden">
          <MdOutlineSwipeLeft className=" animate-rotate-left" />
        </div>
        <div className="absolute top-3 md:top-5 right-3 md:right-5 text-4xl md:text-6xl lg:text-5xl xxl:text-7xl text-yellow shadow-lg shadow-black rounded-full overflow-hidden">
          <MdOutlineSwipeRight className=" animate-rotate-right" />
        </div> */}
        <div className="absolute top-full -translate-y-full transition-transform duration-300 bg-opacity-90 w-full h-3/5 bg-black p-3 sm:p-6 md:p-8 xxl:p-12 tracking-wide">
          <p className="text-base sm:text-2xl xl:text-2xl xxl:text-5xl font-normal mb-2 lg:mb-3 xxl:mb-10">
            {project.name}
          </p>
          <p className="text-white text-xs sm:text-sm md:text-base xxl:text-xl font-light">
            {project.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
