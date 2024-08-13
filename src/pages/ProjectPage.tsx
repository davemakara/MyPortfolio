import { useParams } from "react-router-dom";
import { PROJECTS } from "../store/store";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find((el) => el.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="w-full min-h-screen pt-36 pb-32 lg:pt-40 xxl:pt-44 px-8 flex flex-col xl:flex-row xl:justify-around">
      <div className="w-full md:w-2/3 xl:w-2/5 md:mx-auto xl:mx-0 mb-12 md:mb-14 xl:mb-0">
        <img
          src={project.image}
          alt={project.image}
          className="w-full bg-cover mb-6 border-4 border-white rounded-lg shadow-lg shadow-black"
        />

        <div className="w-full flex justify-center xl:justify-start gap-3 text-sm sm:text-base text-white tracking-wide">
          <a
            href={project.link}
            target="_blank"
            className="w-20 sm:w-24 h-10 sm:h-12 bg-projectSkill flex items-center justify-center rounded-md hover:bg-orange transition-colors duration-300 ease-in-out shadow-lg shadow-black"
          >
            LIVE
          </a>

          <a
            href={project.link}
            className="w-20 sm:w-24 h-10 sm:h-12 bg-projectSkill flex items-center justify-center rounded-md hover:bg-orange transition-colors duration-300 ease-in-out shadow-lg shadow-black"
          >
            REPO
          </a>
        </div>
      </div>
      <div className="w-full xl:w-2/5 md:px-16 xl:px-0  tracking-wider">
        <h1 className="text-white text-center text-4xl lg:text-5xl xxl:text-6xl pb-10">
          {project.name}
        </h1>
        <h4 className="text-white text-2xl md:text-3xl mb-8">
          Project Overview
        </h4>
        <p className="text-white text-base xl:text-lg">{project.overview}</p>
        <p className="text-white text-base xl:text-lg mt-5 mb-10">
          Feel free to check out the Project by visiting the Live Link.
        </p>
        <h4 className="text-white text-2xl md:text-3xl mb-8">Tools Used</h4>
        <ul className="flex flex-wrap gap-3">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="py-3 px-4 bg-projectSkill text-sm md:text-base text-white rounded-md"
            >
              {skill}
            </span>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectPage;
