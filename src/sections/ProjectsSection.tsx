// import ProjectItem from "../components/ProjectItem";
import styles from "./ProjectsSection.module.css";

// import { PROJECTS } from "../store/store";

const ProjectsSection = () => {
  return (
    <section className={styles["projectsPage-wrapper"]}>
      <div className={styles["projects-heading"]}>
        <h1>PROJECTS</h1>
        <p>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      {/* <div className={styles["projects-box"]}>
        {PROJECTS.toReversed().map((el) => (
          <ProjectItem key={el.id} data={el} />
        ))}
      </div> */}
    </section>
  );
};

export default ProjectsSection;
