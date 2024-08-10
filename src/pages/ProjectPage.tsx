import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../store/store";

import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = PROJECTS.find((el) => el.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles["project-detail-wrapper"]}>
      <span className={styles["image-wrapper"]}>
        <img src={project.image} alt={project.image} />
      </span>
      <h1>{project.name}</h1>
      <div className={styles["project-below-wrapper"]}>
        <h4>Project Overview</h4>
        <p>{project.overview}</p>
        <p className={styles.lastP}>
          Feel free to check out the Project by visiting the Live Link.
        </p>
        <h4>Tools Used</h4>
        <ul className={styles["project-skills-wrapper"]}>
          {project.skills.map((skill) => (
            <span key={skill} className={styles["project-skill"]}>
              {skill}
            </span>
          ))}
        </ul>
        <h4>See Live</h4>
        <div className={styles["btn-wrapper"]}>
          <a
            href={project.link}
            target="_blank"
            className={styles["a-live-link"]}
          >
            LIVE LINK
          </a>

          <Link to="/" className={styles["a-go-back"]}>
            GO BACK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
