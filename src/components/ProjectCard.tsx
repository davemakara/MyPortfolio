// import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

// import { Project } from "../store/store";

const ProjectCard = () => {
  return (
    <section className={styles["project-item-wrapper"]}>
      {/* <span>
        <img src={data.image} alt="project image" />
      </span>
      <div className={styles["project-item-description"]}>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <button className={styles["project-button"]}>
          <Link to={data.id} className={styles["project-linkBtn"]}>
            CASE STUDY
          </Link>
        </button>
      </div> */}
    </section>
  );
};

export default ProjectCard;
