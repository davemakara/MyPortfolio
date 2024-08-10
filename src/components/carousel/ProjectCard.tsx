import { Project } from "../../store/store";

import { Link } from "react-router-dom";

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
          className="w-[280px] sm:w-[340px] md:w-[450px] xxl:w-[700px] h-[220px] sm:h-[280px] md:h-[300px] xxl:h-[500px]"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 bottom-0 bg-opacity-90 w-full h-3/5 bg-black p-3 sm:p-6 md:p-8 xxl:p-12">
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
