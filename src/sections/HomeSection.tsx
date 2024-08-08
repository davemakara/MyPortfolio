import { Link } from "react-router-dom";
import styles from "./HomeSection.module.css";

import SocialBox from "../components/SocialBox";

import Carousel from "../components/carousel/Carousel";

const HomeSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <SocialBox />

      <div className={styles["main-div"]}>
        <Link to="/projects" className={styles.btnLink}>
          <button className={styles.jumpButton}>PROJECTS</button>
        </Link>
        <div>
          <h1>HELLO, DAVID IS HERE.</h1>

          {/* <p>
            A Frontend focused Web Developer - building Websites and Web
            Applications that leads to the success of the overall product
          </p> */}
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default HomeSection;
