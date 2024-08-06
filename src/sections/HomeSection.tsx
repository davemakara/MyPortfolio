import { Link } from "react-router-dom";
import styles from "./HomeSection.module.css";

import SocialBox from "../components/SocialBox";

const HomeSection = () => {
  return (
    <section className={styles["main-homepage"]}>
      <SocialBox />

      <div className={styles["main-div"]}>
        <Link to="/projects" className={styles.btnLink}>
          <button className={styles.jumpButton}>PROJECTS</button>
        </Link>
        <div>
          <h1>HELLO, DAVID IS HERE.</h1>

          <p>
            A Frontend focused Web Developer - building Websites and Web
            Applications that leads to the success of the overall product
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
